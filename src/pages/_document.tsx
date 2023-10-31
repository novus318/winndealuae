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
        <script src="https://cdn.tailwindcss.com" async/>
        
<script async src="https://www.googletagmanager.com/gtag/js?id=G-RNK665VC8Y"></script>
<script>
  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(){(window as any).dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-RNK665VC8Y');
</script>

      </body>
    </Html>
  )
}
