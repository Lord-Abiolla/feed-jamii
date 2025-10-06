import { create } from "zustand";

const useMapStore = create((set) => ({
    userLocation: null,
    selectedDestination: null,
    nearbyPlaces: [],
    route: null,

    setUserLocation: (coords) => set({ userLocation: coords }),
    setNearbyPlaces: (place) => set({ nearbyPlaces: place }),
    setSelectedDestination: (places) => set({ selectedDestination: places }),
    setRoute: (geojson) => set({ route: geojson }),
}));
export default useMapStore;