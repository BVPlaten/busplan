import React, { createContext, useContext, useEffect, useState } from 'react';

/*
type BusStop = {
  name: string;
  time: string;
};

type BusRoute = {
  route: string;
  stops: BusStop[];
};
*/

interface DataContextProps {
  children: React.ReactNode;
}

interface DataContextType {
  data: BusRoute[] | null;
  fetchData: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider !');
  }
  return context;
};

export const DataProvider: React.FC<DataContextProps> = ({ children }) => {
  const [data, setData] = useState<BusRoute[] | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/schedule');
      const result = await response.json();

      setData(result);
    } catch (error) {
      console.error('Error retrieving the data :', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contextValue: DataContextType = {
    data,
    fetchData,
  };

  return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
};
