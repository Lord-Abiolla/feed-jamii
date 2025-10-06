import { useState } from "react";
import useMapStore from "../../store/store";

function NearbyFreeFood() {
    const [input, setInput] = useState("");
    const setUserLocation = useMapStore((s) => s.setUserLocation);
    const setNearbyPlaces = useMapStore((s) => s.setNearbyPlaces);

    const handleGetFood = async (e) => {
        e.preventDefault();

        if (!input.trim()) return alert("Please enter a location");

        try {
            // Step 1: Geocode input
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
                    input
                )}`
            );
            const data = await response.json();

            if (data.length === 0) {
                alert("Location not found!");
                return;
            }

            const { lat, lon } = data[0];
            const coords = { lat: parseFloat(lat), lon: parseFloat(lon) };
            setUserLocation(coords);

            // Step 2: Overpass query
            const overpassQuery = `
      [out:json];
      node["amenity"="restaurant"](around:400,${coords.lat},${coords.lon});
      out;
    `;

            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 30000);

            const res = await fetch("https://overpass.kumi.systems/api/interpreter", {
                method: "POST",
                body: overpassQuery,
                signal: controller.signal,
            });

            clearTimeout(timeout);

            if (!res.ok) {
                throw new Error(`Overpass error: ${res.status}`);
            }

            const json = await res.json(); // ✅ only call this once

            if (!json.elements || json.elements.length === 0) {
                alert("No nearby restaurants found!");
                return;
            }

            const sorted = json.elements
                .filter((el) => el.lat && el.lon)
                .map((el) => ({
                    id: el.id,
                    name: el.tags?.name || "Unnamed Restaurant",
                    lat: el.lat,
                    lon: el.lon,
                    address: el.tags?.["addr:street"] || "Unknown address",
                }))
                .slice(0, 3);

            setNearbyPlaces(sorted);
        } catch (error) {
            console.error("Error fetching nearby locations:", error);
            alert("Error fetching nearby locations. Please try again later.");
        }
    };


    return (
        <div className="p-2">
            <form onSubmit={handleGetFood} className="flex flex-col z-[1000] p-3">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter your location"
                    className="bg-white p-3 rounded-2xl outline-0"
                />
                <button
                    type="submit"
                    className="bg-white p-3 rounded-2xl mt-4 font-bold text-[#30573B] cursor-pointer"
                >
                    Free Food
                </button>
            </form>
        </div>
    );
}

export default NearbyFreeFood;
