import type { NextConfig } from "next";

const configuredBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH ?? process.env.BASE_PATH ?? "";
const basePath =
  configuredBasePath && !configuredBasePath.startsWith("/")
    ? `/${configuredBasePath}`
    : configuredBasePath;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
