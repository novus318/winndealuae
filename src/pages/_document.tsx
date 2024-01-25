import { Html, Head, Main, NextScript } from 'next/document'
import * as gtag from '@/gtag.mjs';
export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <script defer async src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
          <script defer
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

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
