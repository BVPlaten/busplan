import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import DisplayData from './DisplayData';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Busfahrplan</title>
      </Head>
      <h2>
        <strong>Busfahrplan Coding Task</strong>
      </h2>
      <p>
      Zielsetzung: Erstelle eine React-Anwendung, die einen Busfahrplan für ein öffentliches
      Verkehrssystem anzeigt. Die Benutzer sollen den Fahrplan einsehen, ihn nach
      verschiedenen Routen filtern und Details zu jeder Haltestelle sehen können.
      </p>
    </>

  );
};

export default Home;