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
