import { create } from "zustand";

const useMapStore = create((set) => ({
    userLocation: null,
    selectedRestaurant: null,
    setUserLocation: (loc) => set({ userLocation: loc }),
    setSelectedRestaurant: (restaurant) => set({ selectedRestaurant: restaurant }),
}));
export default useMapStore;