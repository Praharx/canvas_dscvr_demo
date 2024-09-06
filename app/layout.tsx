// app/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DSCVR Canvas App',
  description: 'A Next.js app integrated with DSCVR Canvas',
  other: {
    'dscvr:canvas:version': 'vNext',
     "og:image": "https://unsplash.com/photos/a-stack-of-books-sitting-on-top-of-a-table-zUtEPOCm5q0",
  },
  openGraph: {
    images: ['https://unsplash.com/photos/a-stack-of-books-sitting-on-top-of-a-table-zUtEPOCm5q0'],
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
        <meta property="og:image" content="https://unsplash.com/photos/a-stack-of-books-sitting-on-top-of-a-table-zUtEPOCm5q0" />
        
        {/* You can add more meta tags here if needed */}
      </head>
      <body>{children}</body>
    </html>
  )
}
