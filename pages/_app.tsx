import { AppProps } from 'next/app';
import { DataProvider } from '../context/DataContext';
import styles from '../styles/Home.module.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <DataProvider>
        <Component {...pageProps} />
        </DataProvider>
    </>
  );
}

