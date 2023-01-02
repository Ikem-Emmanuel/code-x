import { Nunito } from '@next/font/google';
import '../styles/globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${nunito.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
