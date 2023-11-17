import { AppProps } from 'next/app';
import { DataProvider } from '../context/DataContext';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DataProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DataProvider>
    </>
  );
}

