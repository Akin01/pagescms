import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { loadEnvConfig } from "@next/env";

const findMonorepoRoot = (startDir: string) => {
  let current = startDir;

  while (true) {
    if (existsSync(join(current, "pnpm-workspace.yaml"))) return current;

    const parent = dirname(current);
    if (parent === current) return startDir;
    current = parent;
  }
};

loadEnvConfig(findMonorepoRoot(process.cwd()));