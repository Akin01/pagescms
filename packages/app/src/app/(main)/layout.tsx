import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { getAccounts } from "@pagescms/core/lib/accounts";
import { UserProvider } from "@/contexts/user-context";
import { User } from "@pagescms/core/types/user";
import { getServerSession } from "@pagescms/core/lib/session-server";
import { GithubAuthExpired } from "@/components/github-auth-expired";
import { isGithubAuthError } from "@pagescms/core/lib/github-auth";
import { hasAdminAccess } from "@pagescms/core/lib/admin";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const session = await getServerSession();
  const returnTo = requestHeaders.get("x-return-to");
  const signInUrl =
    returnTo && returnTo !== "/sign-in"
      ? `/sign-in?redirect=${encodeURIComponent(returnTo)}`
      : "/sign-in";
  if (!session?.user) return redirect(signInUrl);

  let accounts;
  try {
    accounts = await getAccounts(session.user as User);
  } catch (error) {
    if (isGithubAuthError(error)) {
      return <GithubAuthExpired />;
    }
    throw error;
  }

  const userWithAccounts = {
    ...session.user,
    isAdmin: hasAdminAccess(session.user as User),
    accounts,
  };
  
	return (
    <UserProvider user={userWithAccounts}>
      {children}
    </UserProvider>
  );
}
