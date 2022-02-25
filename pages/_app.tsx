import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>EtherCheck | Ethereum Explorer</title>
        <meta name="description" content="EtherCheck🔎 is an alternative ethereum blockchain explorer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
