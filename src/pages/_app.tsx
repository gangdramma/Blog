import type { AppProps } from "next/app";
import "src/styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../helpers/create-emotion-cache";
import Head from "next/head";
import theme from "src/helpers/theme";
import CssBaseline from "@mui/material/CssBaseline";
import NextNProgress from "nextjs-progressbar";
const clientSliderEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const {
    Component,
    emotionCache = clientSliderEmotionCache,
    pageProps,
  } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NextNProgress
          color="#29D"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
