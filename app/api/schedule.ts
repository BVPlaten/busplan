const createRoutes = () => {
    return {
        route: "Route A",
        stops: [
            { name: "Stop Hilfarth", time: "09:00" },
            { name: "Stop Ganterath", time: "09:05" },
            { name: "Stop Himmerich", time: "09:10" },
            { name: "Stop Saefelen", time: "09:15" },
            { name: "Stop Hückelhoven", time: "09:35" }
        ]
    }
}

export default function handler(req, res) {
    const data = createRoutes();

    res.status(200).json(data);
}  