import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";

function Routing({ start, end }) {
    const map = useMap();
    const routingRef = useRef(null);

    useEffect(() => {
        if (!start || !end) return;

        if (routingRef.current) {
            map.removeControl(routingRef.current);
        }

        routingRef.current = L.Routing.control({
            waypoints: [L.latLng(start[0], start[1]), L.latLng(end[0], end[1])],
            lineOptions: { styles: [{ color: "blue", weight: 4 }] },
            show: false,
            addWaypoints: false,
            routeWhileDragging: false,
            fitSelectedRoutes: true,
        }).addTo(map);

        return () => {
            if (routingRef.current) {
                map.removeControl(routingRef.current);
                routingRef.current = null;
            }
        };
    }, [start, end, map]);

    return null;
}

export default Routing;
