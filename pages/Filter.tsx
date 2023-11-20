import { useState } from "react";
import { useDataContext } from "../context/DataContext";
import getBackgroundColor from "../components/Colorizer";

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
    return (
      <div>
        <h3>
          <strong>loading...</strong>
        </h3>
        <img src="/HI9M.gif" alt="Loading" />
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Linienplan</h2>
      <hr />
      <div>
        <label className="form-label" htmlFor="routes">
          Buslinie auswählen:
        </label>
        <select
          className="form-select"
          id="routes"
          onChange={handleRouteChange}
          value={selectedIndex !== null ? selectedIndex : ""}
        >
          <option value="" disabled>
            Route
          </option>
          {data.map((route, index) => (
            <option key={index} value={index}>
              {route.route}
            </option>
          ))}
        </select>

        {selectedIndex !== null && (
          <div className="mt-3">
            <h2
              style={{
                backgroundColor: getBackgroundColor(data[selectedIndex].route),
              }}
            >
              Stops für Linie {data[selectedIndex].route}
            </h2>
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
    </div>
  );
};

export default DropdownComponent;
