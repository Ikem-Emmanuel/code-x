import { Nunito } from '@next/font/google';
import { AppProps } from 'next/app';
import '../styles/globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${nunito.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
