import React, { useState } from 'react';
import { useDataContext } from '../context/DataContext';
import { Button, Modal } from 'react-bootstrap';
import StopDetails from './StopDetails';

const Schedule: React.FC = () => {
  const { data } = useDataContext();
  const [selectedStop, setSelectedStop] = useState<string | null>(null);

  const handleStopClick = (stopName: string) => {
    setSelectedStop(stopName);
  };

  const handleCloseModal = () => {
    setSelectedStop(null);
  };

  if (!data) {
    return (
    <div>
      <hr/>
      <h3><strong>loading...</strong></h3>
      <img src="/HI9M.gif" alt="Loading" />
      <hr/>
    </div>    
  )}

  return (
    <>
      <div className="container">
        <h2>Datenanzeige</h2>
        {data.map((route,index) => (
          <div key={index} className="card">
            <div>
              <h3>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="24" height="24" style={{ marginRight: '5px' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
                </svg>
                {route.route}
              </h3>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>Haltestelle</th>
                  <th>Zeit</th>
                </tr>
              </thead>
              <tbody>
                {route.stops.map((stop, index) => (
                  <tr key={index}>
                    <td>
                      <Button variant="link" onClick={() => handleStopClick(stop.name)}>
                        {stop.name}
                      </Button>
                    </td>
                    <td>{stop.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      <Modal show={selectedStop !== null} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedStop}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StopDetails stopId={selectedStop || ''} />
        </Modal.Body>
      </Modal>

      <br />
      <hr />
    </>
  );
};

export default Schedule;
