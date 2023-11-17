import React, { useState, useEffect } from 'react';

const Schedule = () => {
  const [scheduleData, setScheduleData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // API-Aufruf zur relativen URL "/api/schedule"
        const response = await fetch('/api/schedule');

        if (!response.ok) {
          throw new Error('Error retrieving the data !');
        }

        // Empfangenes JSON-Objekt
        const data = await response.json();

        // Setzen Sie den Datenzustand
        setScheduleData(data);
      } catch (error) {
        console.error('Fehler beim Abrufen der Daten:', error.message);
      }
    };

    // Daten beim Laden der Komponente abrufen
    fetchData();
  }, []); // Leeres Abhängigkeitsarray bedeutet, dass dieser Effekt nur einmal beim Laden ausgeführt wird

  return (
    <div>
      <h2>Schedule</h2>
      {scheduleData ? (
        <pre>{JSON.stringify(scheduleData, null, 2)}</pre>
      ) : (
        <p>Lade Daten...</p>
      )}
    </div>
  );
};

export default Schedule;
