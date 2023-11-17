/*
import React from 'react'

type Props = {}

function StopDetails({}: Props) {
  return (
    <div>StopDetails</div>
  )
}

export default StopDetails
*/

import { useState } from 'react';
import { useDataContext } from '../context/DataContext';

interface Route {
  route: string;
  stops: { name: string; time: string }[];
}

interface StopDropdownProps {
  routes: Route[];
}

const StopDetails: React.FC<StopDropdownProps> = () => {
  const [selectedStopIndex, setSelectedStopIndex] = useState<number | null>(null);
  const { data } = useDataContext();
  
  const handleStopChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const index = parseInt(event.target.value, 10);
    setSelectedStopIndex(index);
  };

  if (!data) {
    return <div><h1>Daten noch nicht geladen</h1></div>;
  }
    
  // Find routes that contain the selected stop
  const filteredRoutes = selectedStopIndex !== null ? data.filter((route) => route.stops.some((stop) => stop.name === data[selectedStopIndex!].stops[selectedStopIndex!].name))
    : [];

  return (
    <div>
      <label htmlFor="stops">Choose a stop:</label>
      <select id="stops" onChange={handleStopChange} value={selectedStopIndex !== null ? selectedStopIndex : ''}>
        <option value="" disabled>Select a stop</option>
        {data.map((route, index) => (
            
          <option key={index} value={index}>
             {/* {route.stops[0].name} Displaying the first stop name for simplicity */}
             {route.stops[0] !== undefined ? route.stops[0].name : ''}
          </option>
        ))}
      </select>

      {selectedStopIndex !== null && (
        <div>
          <h2>Routes with Stop {data[selectedStopIndex].stops[selectedStopIndex].name}</h2>
          <ul>
            {filteredRoutes.map((route, index) => (
              <li key={index}>
                {route.route}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StopDetails;
