/*import { useState } from 'react';
import { useDataContext } from '../context/DataContext';

interface Route {
  route: string;
  stops: { name: string; time: string }[];
}

interface DropdownProps {
  routes: Route[];
}

const Filter: React.FC<DropdownProps> = ({ routes }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { data } = useDataContext();

  if (!data) {
    return <div>Daten noch nicht geladen</div>;
  }

  const handleRouteChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const index = parseInt(event.target.value, 10);
    setSelectedIndex(index);
  };

  return (
    <div>
      <label htmlFor="routes">Choose a route:</label>
      <select id="routes" onChange={handleRouteChange} value={selectedIndex !== null ? selectedIndex : ''}>
        <option value="" disabled>Select a route</option>
        {data.map((route, index) => (
          <option key={index} value={route.route}>
            {route.route}
          </option>
        ))}
      </select>

      {selectedIndex !== null && (
        <div>
          <h2>Stops for Route {data[selectedIndex].route}</h2>
          <ul>
            {data[selectedIndex].stops.map((stop, index) => (
              <li key={index}>
                {stop.name} - {stop.time}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filter;



*/
import { useState } from 'react';
import { useDataContext } from '../context/DataContext';

interface Route {
  route: string;
  stops: { name: string; time: string }[];
}

interface DropdownProps {
  routes: Route[];
}

const DropdownComponent: React.FC<DropdownProps> = ({ routes }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { data } = useDataContext();

  const handleRouteChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const index = parseInt(event.target.value, 10);
    setSelectedIndex(index);
  };

  if (!data) {
    return <div><h1>Daten noch nicht geladen</h1></div>;
  }

  return (
    <div>
      <label htmlFor="routes">Choose a route:</label>
      <select id="routes" onChange={handleRouteChange} value={selectedIndex !== null ? selectedIndex : ''}>
        <option value="" disabled>Select a route</option>
        {data.map((route, index) => (
          <option key={index} value={index}>
            {route.route}
          </option>
        ))}
      </select>

      {selectedIndex !== null && (
        <div>
          <h2>Stops for Route {data[selectedIndex].route}</h2>
          <ul>
            {data[selectedIndex].stops.map((stop, index) => (
              <li key={index}>
                {stop.name} - {stop.time}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownComponent;

