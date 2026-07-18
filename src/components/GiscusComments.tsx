'use client';

import Giscus from '@giscus/react';

export default function GiscusComments() {
  return (
    <div className="mt-16 pt-12 border-t border-border">
      <Giscus
        repo="danielvertex/portafolio"
        repoId="R_kgDOTW8fYQ"
        category="General"
        categoryId="DIC_kwDOTW8fYc4DBK6H"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="dark"
        lang="es"
        loading="lazy"
      />
    </div>
  );
}
