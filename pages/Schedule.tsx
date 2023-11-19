import React, { useState } from 'react';
import { useDataContext } from '../context/DataContext';
import { Button, Modal } from 'react-bootstrap';
import StopDetails from './StopDetails';
import getBackgroundColor from '../components/Colorizer';

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
        <hr />
        <h3><strong>loading...</strong></h3>
        <img src="/HI9M.gif" alt="Loading" />
        <hr />
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <h2>Datenanzeige</h2>
        <div className="row">
          {data.map((route, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div style={{ backgroundColor: getBackgroundColor(route.route) }}>
                <div>
                  <h4>{route.route}</h4>
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
            </div>
          ))}
        </div>
      </div>

      <Modal show={selectedStop !== null} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>An- und Abfahrten {selectedStop}</Modal.Title>
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
