type BusStop = {
    name: string;
    time: string;
};

type BusRoute = {
    route: string;
    stops: BusStop[];
};

type BusArrivals = {
    route: string;
    time: string;
};

type ArrivalsAtStop = {
    stop: string;
    arrivals: BusArrivals[];
};

type StopPlanData = {
    name: string;
    route: string;
    time: string;
};