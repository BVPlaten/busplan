type BusStop = {
    name: string;
    time: string;
};

type BusRoute = {
    route: string;
    stops: BusStop[];
};