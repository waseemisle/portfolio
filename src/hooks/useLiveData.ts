"use client";

import { useEffect, useState } from "react";

/**
 * Fetches live content client-side and overlays it on top of the
 * statically-rendered default once it resolves. The default keeps the
 * static export fast and non-blank; this hook makes admin edits show up
 * without a rebuild.
 */
export function useLiveData<T>(fetcher: () => Promise<T>, initial: T): T {
  const [data, setData] = useState<T>(initial);

  useEffect(() => {
    let active = true;
    fetcher()
      .then((result) => {
        if (active) setData(result);
      })
      .catch(() => {
        /* keep the default on failure */
      });
    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
}
