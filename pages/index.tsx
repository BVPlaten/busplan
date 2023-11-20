import React from 'react';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Busfahrplan</title>
      </Head>
      <h2>Busfahrplan Coding Task</h2>
      <hr/>
      <h4>Zielsetzung: </h4>
      <hr/>
      <br />
      <p>Erstelle eine React-Anwendung, die einen Busfahrplan für ein öffentliches Verkehrssystem anzeigt.</p>
      <p>Die Benutzer sollen den Fahrplan einsehen, ihn nach verschiedenen Routen filtern und Details zu jeder Haltestelle sehen können..</p>
      <br/>
      <hr/>
    </div>
  );
};

export default Home;