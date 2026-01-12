const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode
  reactStrictMode: true,
  
  // Add Turbopack configuration for Next.js 16
  turbopack: {
    // Turbopack-specific optimizations will go here when needed
    // For now, this silences the warning about missing turbopack config
  },
  
  // Configure webpack optimizations (used when webpack is explicitly requested)
  webpack: (config, { isServer, dev }) => {
    // Only apply these optimizations in production
    if (!dev && !isServer) {
      // More aggressive chunk splitting to reduce number of files
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: 3, // Reduce number of initial requests
          maxAsyncRequests: 3,   // Reduce number of async requests
          minSize: 30000,        // Increase minimum chunk size
          cacheGroups: {
            // Combine all third-party libraries into one chunk
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 10,
              enforce: true,
            },
            // Combine all app code into one chunk
            app: {
              test: /[\\/](src|app)[\\/]/,
              name: 'app',
              chunks: 'all',
              priority: 20,
              enforce: true,
            },
          },
        },
        // Enable runtime chunk
        runtimeChunk: false, // Disable runtime chunk to reduce files
      };

      // Merge small chunks
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
    }

    return config;
  },

  // Configure compression
  compress: true,
  
  // Enable modern JavaScript optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Configure headers for better caching
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*).(css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Configure image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000,
  },

  // Configure power headers
  poweredByHeader: false,
};

module.exports = withBundleAnalyzer(nextConfig);