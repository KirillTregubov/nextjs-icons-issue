import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'I am still here!',
  // straight from https://nextjs.org/docs/app/api-reference/functions/generate-metadata#icons
  icons: {
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  )
}
