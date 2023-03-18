import type * as React from "react";
import cs from "classnames";
import Script from "next/script";

import styles from "./styles.module.css";

export function Comment(){
  return <div className={ cs([styles.giscus, "giscus"]) }>
    <Script
      src="https://giscus.app/client.js"
      data-repo="hongzzz/nextjs-notion-starter-kit"
      data-repo-id="R_kgDOJLB1Bg"
      data-category="Announcements"
      data-category-id="DIC_kwDOJLB1Bs4CVAOk"
      data-mapping="title"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="bottom"
      data-theme="preferred_color_scheme"
      data-lang="zh-CN"
      crossOrigin="anonymous"
      async>
    </Script>
  </div>;
};

