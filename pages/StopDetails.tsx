import React, { useState, useEffect } from 'react';
import { useDataContext } from '../context/DataContext';
import getBackgroundColor from '../components/Colorizer';

interface StopDetailsProps {
  stopId: string;
}

const StopDetails: React.FC<StopDetailsProps> = ({ stopId }) => {
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

  useEffect(() => {
    if (stopId && Array.isArray(stopList) && stopList.length > 0) {
      setSelectedStop(stopId);
    }
  }, [stopId, stopList]);

  const selectedStopData = selectedStop ? stopList.find((stop) => stop.stop === selectedStop) : null;

  if (!data) {
    return (
      <div>
        <hr />
        <h3><strong>loading...</strong></h3>
        <img src="/HI9M.gif" alt="Loading" />
        <hr />
      </div>
    );
  }

  return (
    <>
      {selectedStopData && (
        <div>
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
                  <td style={{ backgroundColor: getBackgroundColor(arrival.route) }}>{arrival.route}</td>
                  <td>{arrival.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default StopDetails;
