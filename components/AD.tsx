import * as React from 'react'
import Script from 'next/script'
export const AD: React.FC = () => {
  return (
    <Script
      async
      src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3799724663967277'
      crossOrigin='anonymous'
    ></Script>
  )
}
