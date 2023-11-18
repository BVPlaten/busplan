import { useState } from 'react';
import { useDataContext } from '../context/DataContext';
import { it } from 'node:test';

const Labor: React.FC = () => {
  const [selectedStopIndex, setSelectedStopIndex] = useState<number | null>(null);
  const { data } = useDataContext();
  let stopList: Array<ArrivalsAtStop> = new Array<ArrivalsAtStop>();
  
  if (!data) {
    return <div><h1>Daten noch nicht geladen</h1></div>;
  }

  const handleStopChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const index = parseInt(event.target.value, 10);
    setSelectedStopIndex(index);
  };

  function prepareData() : void {
    const raw = expandData();
  }

  function addBusArrival(stopName: string, arrival: BusArrivals): void {
      const existingStop = stopList.find((stop) => stop.stop === stopName);

      if (existingStop) {
          // Falls der Stop bereits vorhanden ist, füge das BusArrival hinzu
          existingStop.arrivals.push(arrival);
      } else {
          // Falls der Stop noch nicht existiert, erstelle ein neues ArrivalsAtStop
          const newStop: ArrivalsAtStop = {
              stop: stopName,
              arrivals: [arrival],
          };
          stopList.push(newStop);
      }
  }

  function expandData() : Array<StopPlanData> {
    if(data) {
      const arrivals = new Array<StopPlanData>();  // todo : kann weg
      stopList = new Array<ArrivalsAtStop>();

      data.forEach((route,index) => { 
        if(route.stops.length > 0) {
          for (let i = 0; i < route.stops.length; i++) {
            let arrive: StopPlanData = {
              name: route.stops[i].name,
              route: route.route,
              time: route.stops[i].time
            };
            //createStopList(arrive);
            addBusArrival(arrive.name, {route: arrive.route, time: arrive.time});
            arrivals.push(arrive);  // todo : kann weg
          }
        }
      });
      return arrivals;
    }
    return [];
  }


  prepareData();
    
  // Find routes that contain the selected stop
  const filteredRoutes = selectedStopIndex !== null ? data.filter((route) => route.stops.some((stop) => stop.name === data[selectedStopIndex!].stops[selectedStopIndex!].name))
    : [];

    return (
    <>
    {/*}
      <div>
        {expandData().map((item, index) => (
          <div key={index}>{`Index : ${index}  #  Name:${item.name}   Zeit: ${item.time}    Buslinie:${item.route} `}</div>
        ))}

      </div>
      */}
      <div>
        {stopList.map((item,index) => (
          <div key={index}>{`Index : ${index}  #  Haltestelle : ${item.stop}  # Abfahrten : ${item.arrivals.length}`}</div>
        )) }
      </div>
    </>
  );
};

export default Labor;