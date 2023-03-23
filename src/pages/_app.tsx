import { CacheProvider } from '@emotion/react';
import { useRouter } from 'next/router';
import appStyles from '@/scss/main.scss';
import { createEmotionCache } from '@/theme';
import { useRef } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, pageProps, emotionCache = clientSideEmotionCache }: any) {
  const router = useRouter();

  const queryClientRef = useRef<QueryClient>();

  if (!queryClientRef.current) queryClientRef.current = new QueryClient();

  return (
    <>
      <style jsx>{appStyles}</style>
      <CacheProvider value={emotionCache}>
        <QueryClientProvider client={queryClientRef.current}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} key={router.asPath} />
            {process.env.NODE_ENV !== 'production' && <ReactQueryDevtools initialIsOpen={false} />}
          </Hydrate>
        </QueryClientProvider>
      </CacheProvider>
    </>
  );
}
