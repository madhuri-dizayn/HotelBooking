/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["marketplace.canva.com", "upcdn.io"],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "marketplace.canva.com",
  //       port: "",
  //       pathname: "",
  //     },
  //   ],
  // },
};

export default nextConfig;
