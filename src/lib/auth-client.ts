import { createAuthClient } from "better-auth/react";
import { apiKeyClient } from "@better-auth/api-key/client";
import {
  genericOAuthClient,
  inferAdditionalFields,
  organizationClient,
} from "better-auth/client/plugins";
import { captureClientEvent, resetAnalyticsUser } from "@/client/lib/posthog";
import { userAdditionalFields } from "@/lib/auth-options";
import { isHostedClientAuthMode } from "@/lib/auth-mode";
import { orgAccessControl, orgRoles } from "@/lib/org-permissions";
import { getSignInHrefForLocation } from "@/lib/auth-redirect";

export const authClient = createAuthClient({
  baseURL: typeof window !== "undefined" ? window.location.origin : "",
  plugins: [
    apiKeyClient(),
    // ac/roles must match the server plugin exactly, otherwise the client's
    // synchronous checkRolePermission evaluates against the defaults and
    // disagrees with the server.
    organizationClient({ ac: orgAccessControl, roles: orgRoles }),
    genericOAuthClient(),
    inferAdditionalFields({ user: userAdditionalFields }),
  ],
});

// Only hosted mode mounts the Better Auth routes; in local_noauth and
// cloudflare_access, /api/auth/get-session (and every other auth endpoint)
// returns 404, and there is no client-side Better Auth session at all —
// local_noauth injects a single admin user server-side, and cloudflare_access
// authenticates at the edge. Calling the real useSession in those modes fires a
// request that 404s on every page load (visible as a console error) while
// always resolving to a null session. Skip the fetch and return a stable empty
// session instead.
//
// isHostedClientAuthMode() reads a build-time constant (import.meta.env
// .AUTH_MODE), so the branch below is fixed for the life of the bundle and
// never flips between renders — calling the hook on only one side is safe.
const EMPTY_SESSION = {
  data: null,
  isPending: false,
  isRefetching: false,
  error: null,
  refetch: () => {},
} as unknown as ReturnType<typeof authClient.useSession>;

export function useSession(): ReturnType<typeof authClient.useSession> {
  if (!isHostedClientAuthMode()) {
    return EMPTY_SESSION;
  }
  return authClient.useSession();
}

export function signOutAndRedirect() {
  const signInHref = getSignInHrefForLocation(window.location);
  captureClientEvent("auth:sign_out");
  resetAnalyticsUser();
  void authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        window.location.assign(signInHref);
      },
    },
  });
}
