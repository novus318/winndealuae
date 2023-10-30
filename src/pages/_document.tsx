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
        <script src="https://cdn.tailwindcss.com"></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
