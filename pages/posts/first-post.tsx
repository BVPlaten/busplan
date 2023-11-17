import Link from 'next/link';
import * as React from 'react';

export interface IFirstPostProps {
}

export default function FirstPost (props: IFirstPostProps) {
  return (
    <>

      <h1>Liste der Bus-Linien</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}

