const dotenv = require('dotenv')
dotenv.config()
if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: '.env.development' })
} else {
  dotenv.config()
}
//console.log('NODE_ENV',process.env.NODE_ENV)
//console.log('API URL:', process.env.API_URL)
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
