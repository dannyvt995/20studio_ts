import { create } from "zustand";

interface IStoreZustand {
  indexItemNavbar: number;
  prevIndexItemNavbar: number;
  selectedItemNavbar: (index: number) => void; // Updated the signature to accept a number parameter
}

 const useStoreZustand = create<IStoreZustand>((set) => ({
  indexItemNavbar: -1,
  prevIndexItemNavbar: -1,
  selectedItemNavbar: (index: number) => {
    // Use a function inside set to update the state based on the previous state
    set((state) => ({
      prevIndexItemNavbar: state.indexItemNavbar,
      indexItemNavbar: index,
    }));
  },
}));

export default useStoreZustand;
