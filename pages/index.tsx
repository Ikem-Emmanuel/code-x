import Head from 'next/head';
import Header from '../Components/Sections/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Code -X</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <p className="text-red-500">hello text</p>
      </main>
    </>
  );
}
