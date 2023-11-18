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
      <label className="form-label" htmlFor="routes">Buslinie auswählen:</label>
      <select className="form-select" id="routes" onChange={handleRouteChange} value={selectedIndex !== null ? selectedIndex : ''}>
        <option value="" disabled>Route</option>
        {data.map((route, index) => (
          <option key={index} value={index}>
            {route.route}
          </option>
        ))}
      </select>
  
      {selectedIndex !== null && (
        <div className="mt-3"> {/* Bootstrap margin top */}
          <h2>Stops für Linie {data[selectedIndex].route}</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Haltestelle</th>
                <th scope="col">Abfahrtszeit</th>
              </tr>
            </thead>
            <tbody>
              {data[selectedIndex].stops.map((stop, index) => (
                <tr key={index}>
                  <td>{stop.name}</td>
                  <td>{stop.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DropdownComponent;

