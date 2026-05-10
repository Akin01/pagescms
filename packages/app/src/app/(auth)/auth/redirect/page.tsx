import { redirect } from "next/navigation";
import { getSafeRedirect } from "@pagescms/core/lib/auth-redirect";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ to?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  redirect(getSafeRedirect(resolvedSearchParams.to));
}
