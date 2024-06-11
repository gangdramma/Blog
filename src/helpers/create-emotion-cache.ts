import createCache from "@emotion/cache";

const inBrowser = typeof document !== "undefined";

export default function createEmotionCache() {
  let insertionPoint;

  if (inBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]'
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({ key: "mui-style", insertionPoint });
}
