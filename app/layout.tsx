// app/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DSCVR Canvas App',
  description: 'A Next.js app integrated with DSCVR Canvas',
  other: {
    'dscvr:canvas:version': 'vNext',
  },
  openGraph: {
    images: ['https://my-canvas.com/preview-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* DSCVR Canvas specific meta tags */}
        <meta name="dscvr:canvas:version" content="vNext" />
        <meta property="og:image" content="https://my-canvas.com/preview-image.png" />
        
        {/* You can add more meta tags here if needed */}
      </head>
      <body>{children}</body>
    </html>
  )
}