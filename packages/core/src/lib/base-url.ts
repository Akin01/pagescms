const DEV_BASE_URL = "http://localhost:3000";
const isProductionBuild = () => {
  return process.env.NEXT_PHASE === "phase-production-build" || process.env.npm_lifecycle_event === "build";
};


export const getBaseUrl = () => {
  const baseUrl = process.env.BASE_URL?.trim();

  if (baseUrl) {
    return baseUrl;
  }

  if (process.env.NODE_ENV !== "production" || isProductionBuild()) {
    return DEV_BASE_URL;
  }

  throw new Error("Missing BASE_URL. Set BASE_URL in production.");
};
