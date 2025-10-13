import { useState } from "react";
import useMapStore from "../../store/store";

function NearbyFreeFood() {
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [restaurants, setRestaurants] = useState([]);
    const [selected, setSelected] = useState(null);
    const setUserLocation = useMapStore((s) => s.setUserLocation);
    const setSelectedRestaurant = useMapStore((s) => s.setSelectedRestaurant);

    const handleGetFood = async (e) => {
        e.preventDefault();
        setRestaurants([]);
        setSelected(null);


        if (!input.trim()) return alert("Please enter a location");

        try {
            setIsLoading(true);
            const response = await fetch("http://127.0.0.1:8000/api/closest-restaurants", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ place_name: input, radius: 5000 }),
            });

            if (!response.ok) {
                throw new Error(`Backend error: ${response.status}`);
                return;
            }

            const data = await response.json();
            const { user_location, closest_restaurants } = data;
            setUserLocation({
                lat: user_location.lat,
                lon: user_location.lon,
            });

            const formatted = closest_restaurants
                .filter((r) => r.lat !== undefined && r.lon !== undefined) // add this filter
                .map((r) => ({
                    id: r.id,
                    name: r.tags?.name || "Unnamed Restaurant",
                    lat: r.lat,
                    lon: r.lon,
                    address: r.tags?.["addr:street"] || "Unknown address",
                    distance: r.distance_km.toFixed(2) + " km",
                }));
            console.log("Fetched restaurants:", formatted);

            setInput("");
            setRestaurants(formatted);
        } catch (error) {
            console.error(error);
            setInput("");
        } finally {
            setIsLoading(false);
        }
    };
    const handleSelected = (r) => {
        setSelected(r);
    }

    const handleGetDirection = () => {
        if (!selected) return alert("Select a restaurant to get directions!");

        if (selected.lat === undefined || selected.lon === undefined)
            return alert("Selected restaurant has invalid coordinates!");

        setSelectedRestaurant(selected);
    }


    return (
        <div className="p-2">
            <form onSubmit={handleGetFood} className="flex flex-col z-[1000] p-3">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter your location"
                    className={`bg-white p-3 rounded-2xl opacity-80 outline-0 ${isLoading ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    className="bg-white p-3 opacity-90 rounded-3xl mt-4 font-bold text-[#30573B] cursor-pointer"
                >
                    {isLoading ? "Fetching..." : "Fetch Free Food"}
                </button>
            </form>
            {restaurants.length > 0 &&
                <>
                    <div className="mt-7 p-3 bg-white rounded-2xl opacity-80">
                        <h4 className="font-bold text-[#30573B] text-center">Closest free food joints</h4>
                        {restaurants.map((r) => (
                            <label
                                key={r.id}
                                className="flex items-center cursor-pointer gap-2 border-b border-gray-200 py-2"
                            >
                                <input
                                    type="checkbox"
                                    checked={selected?.id === r.id}
                                    onChange={() => handleSelected(r)}
                                />
                                <div>
                                    <p className="text-sm px-2 py-1">{r.name} <span className="text-red-950">{r.distance}</span>
                                    </p>
                                </div>
                            </label>
                        ))}
                    </div>
                    <div className="mt-4 text-xs text-white text-center opacity-70">
                        <p>Select name☝️to get direction</p>
                    </div>
                    {selected &&
                        <div className="flex mt-4 justify-center items-center align-center">
                            <button
                                className="bg-white p-4 opacity-90 rounded-3xl text-sm mt-4 font-semibold text-[#30573B] cursor-pointer"
                                onClick={handleGetDirection}
                            >
                                Get Direction
                            </button>
                        </div>
                    }
                </>

            }
        </div >
    );
}

export default NearbyFreeFood;
