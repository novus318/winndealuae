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
            <script defer async src={'https://www.googletagmanager.com/gtag/js?id=AW-11289254960'} />
          <script defer
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-11289254960');`,
            }}
          />
   
          <meta property="og:title" content="WinnDeal - The Best IT Solutions and Web Development in UAE" />
        <meta property="og:description" content="We deliver cutting-edge IT solutions and Web Developments tailored to your business needs in UAE, Our team of experts is committed to providing top-notch services that drive results" />
        <meta property="og:image" content="https://www.winndeal.com/ogimage.png" />
        <meta property="og:url" content="https://www.winndeal.com/" />
        <meta name="twitter:card" content="https://www.winndeal.com/ogimage.png" />
        <meta name="msvalidate.01" content="E5E8CF9515FF9A22A8A95BA5E8418DC6" />
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
