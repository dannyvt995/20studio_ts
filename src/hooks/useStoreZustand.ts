import { create } from "zustand";

interface IStoreZustand {
  //slider Navbar
  indexItemNavbar: number;
  prevIndexItemNavbar: number;
  selectedItemNavbar: (index: number) => void;

  //slider Service
  indexItemService: number;
  prevIndexItemService: number;
  selectedItemService: (index: number) => void;

  //button navbar state
  stateMenuIsOpen: boolean;
  setStateMenuIsOpen: () => void;

  //loadingPage
  stateEnterPage: boolean;
  setStateEnterPage: () => void;


    //lenis global
    stateVarGlobalLenis: boolean;
    setStateVarGlobalLenis: () => void;

  //transition
  stateTransition: string;
  setStateTransition: (key: string) => void;

  //cursor
  stateCursor: boolean;
  setStateCursor: (value : boolean) => void;
  
}

const useStoreZustand = create<IStoreZustand>((set) => ({
  //slider Navbar
  indexItemNavbar: -1,
  prevIndexItemNavbar: -1,
  selectedItemNavbar: (index: number) => {
    set((state) => ({
      prevIndexItemNavbar: state.indexItemNavbar,
      indexItemNavbar: Number(index),
    }));
  },

//slider Service
indexItemService: -1,
prevIndexItemService: -1,
selectedItemService: (index: number) => {
  set((state) => ({
    prevIndexItemService: state.indexItemService,
    indexItemService: Number(index),
  }));
},


  //button navbar state
  stateMenuIsOpen: false,
  setStateMenuIsOpen: () => {
    set((state) => ({ stateMenuIsOpen: !state.stateMenuIsOpen }));
  },

  //loadingPage
  stateEnterPage: false,
  setStateEnterPage: () => {
    set((state) => ({ stateEnterPage: !state.stateEnterPage }));
  },

  //lenis global
  stateVarGlobalLenis: false,
  setStateVarGlobalLenis: () => {
    set((state) => ({ stateVarGlobalLenis: !state.stateVarGlobalLenis }));
  },
  
  //transition
  stateTransition: 'none',
  setStateTransition: (key: string) => {
    set((state) => ({ stateTransition: key }));
  },


   //cursor
   stateCursor: false,
   setStateCursor: (value) => {
     set(() => ({ stateCursor: value }));
   },

   

}));

export default useStoreZustand;
