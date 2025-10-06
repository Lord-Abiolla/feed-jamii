import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import NavigateMap from "./NaviagateMap";

function Map() {
    return (
        <div className="relative w-full h-screen">
            <div className="absolute bottom-30 left-8 top-30 rounded-2xl p-4 bg-[#30573B] z-[900]">
                <NavigateMap />
            </div>
            <div className="absolute w-full">
                <MapContainer className="w-full h-screen" center={[-1.28333, 36.81667]} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        maxZoom={22}
                    />
                    <Marker position={[36.81667, -1.28333]}>
                        <Popup>Nairobi, Kenya</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}

export default Map;