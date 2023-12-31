import React, { useState, useEffect } from "react";
import { useDataContext } from "../context/DataContext";

const StopDetailSelection: React.FC = () => {
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

            const existingStop = newStopList.find(
              (stop) => stop.stop === arrive.name
            );

            if (existingStop) {
              existingStop.arrivals.push({
                route: arrive.route,
                time: arrive.time,
              });
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
    return (
      <div>
        <hr />
        <h3>
          <strong>loading...</strong>
        </h3>
        <img src="/HI9M.gif" alt="Loading" />
        <hr />
      </div>
    );
  }

  const handleStopChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStop(event.target.value);
  };

  const selectedStopData = selectedStop
    ? stopList.find((stop) => stop.stop === selectedStop)
    : null;

  return (
    <div className="container">
      <h2>Haltestellenplan</h2>
      <hr />

      <div className="mb-3">
        <label htmlFor="stops" className="form-label">
          Wähle eine Haltestelle:
        </label>
        <select
          id="stops"
          className="form-select"
          onChange={handleStopChange}
          value={selectedStop || ""}
        >
          <option value="" disabled>
            Haltestelle auswählen
          </option>
          {stopList.map((stop, index) => (
            <option key={index} value={stop.stop}>
              {stop.stop}
            </option>
          ))}
        </select>
      </div>

      {selectedStopData && (
        <div>
          <h2>Abfahrten an Haltestelle {selectedStopData.stop}</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Route</th>
                <th scope="col">Zeit</th>
              </tr>
            </thead>
            <tbody>
              {selectedStopData.arrivals.map((arrival, index) => (
                <tr key={index}>
                  <td>{arrival.route}</td>
                  <td>{arrival.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StopDetailSelection;
