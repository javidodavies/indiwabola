'use client';

import { useEffect } from 'react';

export default function AdBanner() {
  useEffect(() => {
    // Initialize AdSense
    (window as any).adsbygoogle = (window as any).adsbygoogle || [];
    (window as any).adsbygoogle.push({});
  }, []);

  return (
    <div className="bg-white">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT}
        data-ad-slot="8056339074"
      />
    </div>
  );
}