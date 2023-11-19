import React, { useState } from 'react';
import { useDataContext } from '../context/DataContext';
import { Button, Modal } from 'react-bootstrap';
import StopDetails from './StopDetails';
import getBackgroundColor from '../components/Colorizer';

const RouteColors = {
  "Route A": {"color": "#FFC0CB"},  // Pink
  "Route B": {"color": "#FFD700"},  // Gold
  "Route C": {"color": "#FFA07A"},  // LightSalmon
  "Route D": {"color": "#FF69B4"},  // HotPink
  "Route E": {"color": "#9370DB"},  // MediumPurple
  "Route F": {"color": "#87CEEB"},  // SkyBlue
  "Route G": {"color": "#98FB98"},  // PaleGreen
  "Route H": {"color": "#FF6347"},  // Tomato
  "Route I": {"color": "#FF4500"},  // OrangeRed
  "Route J": {"color": "#20B2AA"},  // LightSeaGreen
  "Route K": {"color": "#FF8C00"},  // DarkOrange
  "Route L": {"color": "#00FA9A"},  // MediumSpringGreen
  "Route M": {"color": "#FFDAB9"},  // PeachPuff
  "Route N": {"color": "#6A5ACD"},  // SlateBlue
  "Route O": {"color": "#FF1493"},  // DeepPink
  "Route P": {"color": "#00BFFF"},  // DeepSkyBlue
  "Route Q": {"color": "#FFE4B5"},  // Moccasin
  "Route R": {"color": "#8A2BE2"},  // BlueViolet
  "Route S": {"color": "#FFFF00"},  // Yellow
  "Route T": {"color": "#B0C4DE"},  // LightSteelBlue
  "Route U": {"color": "#FF4500"},  // OrangeRed
  "Route V": {"color": "#32CD32"},  // LimeGreen
  "Route W": {"color": "#FA8072"},  // Salmon
  "Route X": {"color": "#FF00FF"},  // Magenta
  "Route Y": {"color": "#FF6347"},  // Tomato
  "Route Z": {"color": "#00FF7F"}   // SpringGreen
};

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
