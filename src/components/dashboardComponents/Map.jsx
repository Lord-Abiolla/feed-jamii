import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import NavigateMap from "./NavigateMap";
import Profile from "../Profile";
import useMapStore from "../../store/store";
import Routing from "./Routing";

function Map() {
    const userLocation = useMapStore((s) => s.userLocation);
    const selectedRestaurant = useMapStore((s) => s.selectedRestaurant);

    return (
        <div className="relative w-full h-screen">
            <div className="absolute bottom-30 left-8 top-30 rounded-2xl p-4 bg-[#30573B]/90 z-[900]">
                <NavigateMap />
            </div>
            <div className="bg-[#30573B]/90 absolute top-4 right-6 z-[1000] p-3 rounded-3xl">
                <Profile />
            </div>
            <div className="absolute w-full">
                <MapContainer
                    className="w-full h-screen"
                    center={[-1.28333, 36.81667]}
                    zoom={13}
                    scrollWheelZoom={true}
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" maxZoom={22} />
                    {userLocation && (
                        <Marker position={[userLocation.lat, userLocation.lon]}>
                            <Popup>Your location</Popup>
                        </Marker>
                    )}
                    {selectedRestaurant && (
                        <Marker position={[selectedRestaurant.lat, selectedRestaurant.lon]}>
                            <Popup>{selectedRestaurant.name}</Popup>
                        </Marker>
                    )}
                    {userLocation && selectedRestaurant && (
                        <Routing
                            start={[userLocation.lat, userLocation.lon]}
                            end={[selectedRestaurant.lat, selectedRestaurant.lon]}
                        />
                    )}
                </MapContainer>
            </div>
        </div>
    );
}

export default Map;
