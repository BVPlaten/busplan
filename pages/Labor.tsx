import React, { useState, useEffect } from 'react';
import { useDataContext } from '../context/DataContext';

const Labor: React.FC = () => {
  const [stopList, setStopList] = useState<Array<ArrivalsAtStop>>([]);
  const [selectedStop, setSelectedStop] = useState<string | null>(null);
  const { data } = useDataContext();

  useEffect(() => {
    if (data) {
      const newStopList: Array<ArrivalsAtStop> = [];

      data.forEach((route, index) => {
        if (route.stops.length > 0) {
          for (let i = 0; i < route.stops.length; i++) {
            const arrive: StopPlanData = {
              name: route.stops[i].name,
              route: route.route,
              time: route.stops[i].time,
            };

            const existingStop = newStopList.find((stop) => stop.stop === arrive.name);

            if (existingStop) {
              existingStop.arrivals.push({ route: arrive.route, time: arrive.time });
            } else {
              const newStop: ArrivalsAtStop = {
                stop: arrive.name,
                arrivals: [{ route: arrive.route, time: arrive.time }],
              };
              newStopList.push(newStop);
            }
          }
        }
      });

      setStopList(newStopList);
    }
  }, [data]);

  if (!data) {
    return <div><h1>Daten noch nicht geladen</h1></div>;
  }

  const handleStopChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStop(event.target.value);
  };

  const selectedStopData = selectedStop ? stopList.find((stop) => stop.stop === selectedStop) : null;

  return (
    <>
      <div className="mb-3">
        <label htmlFor="stops" className="form-label">Wähle eine Haltestelle:</label>
        <select id="stops" className="form-select" onChange={handleStopChange} value={selectedStop || ''}>
          <option value="" disabled>Haltestelle auswählen</option>
          {stopList.map((stop, index) => (
            <option key={index} value={stop.stop}>
              {stop.stop}
            </option>
          ))}
        </select>
      </div>

      {selectedStopData && (
        <div>
          <h2>Abfahrten für Haltestelle {selectedStopData.stop}</h2>
          <ul>
            {selectedStopData.arrivals.map((arrival, index) => (
              <li key={index}>
                {`Route: ${arrival.route}, Zeit: ${arrival.time}`}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Labor;
