import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import DisplayData from './DisplayData';

import Table from './table';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Fahrplan</title>
      </Head>
      <h1>
        Lese <Link href="./Routes">diese Seite</Link>
      </h1>
      <div>
        <h1>Daten aus der API</h1>
        <DisplayData />
      </div>
    </>

  );
};

export default Home;