/** @type {import('next').NextConfig} */
const nextConfig = {


    images: {
        remotePatterns:[
          {
            hostname:"cdn.sanity.io",
            protocol:"https",
            // images:"/images//*"
            

          }
        ]
        },
      };


export default nextConfig;
