import * as React from "react";
import { useEffect } from "react";
import cs from "classnames";
import styles from "./styles.module.css";

export const Comment: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://giscus.app/client.js";
      script.dataset.repo = "hongzzz/nextjs-notion-starter-kit";
      script.dataset.repoId = "R_kgDOJLB1Bg";
      script.dataset.category = "Announcements";
      script.dataset.categoryId = "DIC_kwDOJLB1Bs4CVAOk";
      script.dataset.mapping = "title";
      script.dataset.strict = "0";
      script.dataset.reactionsEnabled = "1";
      script.dataset.emitMetadata = "0";
      script.dataset.inputPosition = "bottom";
      script.dataset.theme = "preferred_color_scheme";
      // script.dataset.lang = 'zh-CN'
      script.crossOrigin = "anonymous";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return <div className={ cs([styles.giscus, "giscus"]) }></div>;
};

