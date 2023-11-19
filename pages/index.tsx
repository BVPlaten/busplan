import React from 'react';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Busfahrplan</title>
      </Head>
      <h2>
        <strong>Busfahrplan Coding Task</strong>
      </h2>
      <h4>Zielsetzung: </h4>
      <p>Erstelle eine React-Anwendung, die einen Busfahrplan für ein öffentliches Verkehrssystem anzeigt.</p>
      <p>Die Benutzer sollen den Fahrplan einsehen, ihn nach verschiedenen Routen filtern und Details zu jeder Haltestelle sehen können..</p>
    </>
  );
};

export default Home;