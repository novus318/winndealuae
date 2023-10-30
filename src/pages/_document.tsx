import { Html, Head, Main, NextScript } from 'next/document';
import { useState, useEffect } from 'react';

export default function Document() {
  const [tailwindLoaded, setTailwindLoaded] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
    link.rel = 'stylesheet';
    link.onload = () => {
      setTailwindLoaded(true);
    };
    document.head.appendChild(link);
  }, []);

  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/title.webp"
        />
      </Head>
      <body>
        {tailwindLoaded ? (
          <Main />
        ) : null}
        <NextScript />
      </body>
    </Html>
  );
}
