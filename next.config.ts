import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old slow-transit detail page → new singular Sri Lanka landing
      { source: '/gatherings/the-slow-transit', destination: '/gatherings', permanent: true },
      // Other catalogued trips → new catalogue route
      { source: '/gatherings/decision-detox-goa', destination: '/experiences/decision-detox-goa', permanent: true },
      { source: '/gatherings/monsoon-reading-kerala', destination: '/experiences/monsoon-reading-kerala', permanent: true },
      // Custom-curation route rename
      { source: '/experience', destination: '/plan-with-us', permanent: true },
    ];
  },
};

export default nextConfig;
