import { AppProps } from 'next/app';
import { DataProvider } from '../context/DataContext';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Home.module.css'

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

