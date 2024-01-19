import { Html, Head, Main, NextScript } from 'next/document'
import * as gtag from '@/gtag.mjs';
export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gtag.GA_TRACKING_ID}');`,
            }}
          />
          <meta property="og:title" content="WinnDeal IT Solutions and Web development" />
        <meta property="og:description" content="We deliver cutting-edge IT solutions and Web Developments tailored to your business needs in UAE, Our team of experts is committed to providing top-notch services that drive results" />
        <meta property="og:image" content="https://www.winndeal.com/ogimage.png" />
        <meta property="og:url" content="https://www.winndeal.com/" />
        <meta name="twitter:card" content="https://www.winndeal.com/ogimage.png" />
      </Head>
      <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/title.svg"
        />
        <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
/>

      <body>
        <Main />
        <NextScript />
        <script src="https://cdn.tailwindcss.com" async/>
      </body>
    </Html>
  )
}
