import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import nextEnv from "@next/env";

const { loadEnvConfig } = nextEnv;

const appDir = dirname(fileURLToPath(import.meta.url));
const workspaceRoot = join(appDir, "../..");

loadEnvConfig(workspaceRoot);

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@pagescms/core"],
  allowedDevOrigins: ["dda3-103-3-220-84.ngrok-free.app"],
};

export default nextConfig;
