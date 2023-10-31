import Script from 'next/script';
import React from 'react';

const GoogleTagManager: React.FC = () => {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-RNK665VC8Y"/>
      <Script id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-RNK665VC8Y');
          `,
        }}
      />
    </>
  );
};

export default GoogleTagManager;
