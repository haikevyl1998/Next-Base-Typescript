import type { AppProps } from 'next/app';
import appStyles from '@scss/main.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx>{appStyles}</style>
      <Component {...pageProps} />
    </>
  );
}
