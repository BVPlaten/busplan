import React from 'react';
import { useDataContext } from '../context/DataContext';

const DisplayData: React.FC = () => {
  const { data } = useDataContext();

  if (!data) {
    return <div>Lade...</div>;
  }

  return (

    <div>
      <h2>Datenanzeige</h2>
      <ul>
        {data.map((route) => (
          <div key={route.route}>
            <h3>{route.route}</h3>
            <ul>
              {route.stops.map((stop, index) => (
                <li key={index}>
                  {stop.name} - {stop.time}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </div>

  );
};

export default DisplayData;
