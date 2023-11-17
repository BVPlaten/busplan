import Link from 'next/link';
import * as React from 'react';
import DisplayData from './DisplayData';
import { DataProvider } from '../context/DataContext';

export interface IFirstPostProps {
}

export default function Routes (props: IFirstPostProps) {
  return (
    <>

      <h1>Übersicht Bus-Linien</h1>
      <h4>
        <Link href="/">Back to home</Link>
      </h4>

      <br /><br />
      <DisplayData />
    </>
  );
}

