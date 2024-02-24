/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dqqim3gc1",
    NEXT_PUBLIC_CLOUDINARY_API_KEY:"721226248867572",
    NEXT_PUBLIC_CLOUDINARY_API_SECRET:"CKrex0VAs6am79v6nC8eXAzIFKk",
  },
  images: {
    domains: ['res.cloudinary.com'],
  }
};

export default nextConfig;
