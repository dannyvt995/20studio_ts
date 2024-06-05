import { create } from "zustand";

interface IStoreZustand {
  //slider
  indexItemNavbar: number;
  prevIndexItemNavbar: number;
  selectedItemNavbar: (index: number) => void;
  //button navbar state
  stateMenuIsOpen: boolean;
  setStateMenuIsOpen: () => void;
  //transition
  stateTransition: string;
  setStateTransition: (key: string) => void;
}

const useStoreZustand = create<IStoreZustand>((set) => ({
  //slider
  indexItemNavbar: -1,
  prevIndexItemNavbar: -1,
  selectedItemNavbar: (index: number) => {
    set((state) => ({
      prevIndexItemNavbar: state.indexItemNavbar,
      indexItemNavbar: Number(index),
    }));
  },


  //button navbar state
  stateMenuIsOpen: false,
  setStateMenuIsOpen: () => {
    set((state) => ({ stateMenuIsOpen: !state.stateMenuIsOpen }));
  },


  //transition
  stateTransition: 'none',
  setStateTransition: (key: string) => {
    set((state) => ({ stateTransition: key }));
  },

}));

export default useStoreZustand;
