import Link from 'next/link';
import * as React from 'react';
import { DataProvider } from '../context/DataContext';
import DisplayDataNice from './DisplayDataNice';

export interface IFirstPostProps {
}

export default function Schedule (props: IFirstPostProps) {
  return (
    <>

      <h1>Übersicht Bus-Linien</h1>
      <h4>
        <Link href="/">Back to home</Link>
      </h4>

      <br /><br />
      <DisplayDataNice />
    </>
  );
}

