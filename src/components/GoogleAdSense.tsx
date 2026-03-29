"use client";

import { useEffect } from "react";

export default function GoogleAdSense({ pubId }: { pubId: string }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pubId}`;
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  }, [pubId]);

  return null;
}
