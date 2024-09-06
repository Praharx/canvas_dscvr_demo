// next.config.js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'nonce-${process.env.CSP_NONCE}' https://trusted-scripts.com;
              style-src 'self' 'nonce-${process.env.CSP_NONCE}' https://trusted-styles.com;
              img-src 'self' https://trusted-images.com;
              font-src 'self' https://trusted-fonts.com;
              connect-src 'self' https://api.example.com;
              media-src 'self' https://trusted-media.com;
              worker-src 'self' blob:;
              child-src 'self' blob:;
              frame-ancestors 'none';
              object-src 'none';
              form-action 'self';
              base-uri 'self';
              upgrade-insecure-requests;
            `.replace(/\s{2,}/g, ' ').trim()
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig