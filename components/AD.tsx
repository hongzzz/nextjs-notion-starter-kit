import type * as React from 'react'
import Script from 'next/script'

export function AD(){
  return (
    <>
      {/*google adsense*/}
      <Script
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3799724663967277'
        crossOrigin='anonymous'
        strategy='beforeInteractive'
      />
      {/* google analysis*/}
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-B6YCV10DD7'
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-B6YCV10DD7');
        `}
      </Script>
    </>
  )
}
