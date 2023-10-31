import GoogleTagManager from '@/GoogleTagManager'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/title.webp"
        />
        <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
/>

      <body>
        <Main />
        <NextScript />
        <GoogleTagManager />
        <script src="https://cdn.tailwindcss.com" async/>
      </body>
    </Html>
  )
}
