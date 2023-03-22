import { CacheProvider } from '@emotion/react';
import { useRouter } from 'next/router';
import appStyles from '@scss/main.scss';
import { createEmotionCache } from '@/theme';

const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, pageProps, emotionCache = clientSideEmotionCache }: any) {
  const router = useRouter();

  return (
    <>
      <style jsx>{appStyles}</style>
      <CacheProvider value={emotionCache}>
        <Component {...pageProps} key={router.asPath} />
      </CacheProvider>
    </>
  );
}
