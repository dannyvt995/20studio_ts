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

  //state navbar modal
  stateMenuIsOpen: boolean;
  setStateMenuIsOpen: (key:boolean) => void;

  //navbarlist state
  stateNavbarList: boolean;
  setStateNavbarList: (key:boolean) => void;

  //button navbar state
  stateButtonNav: boolean;
  setStateButtonNav: (key:boolean) => void;

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
  stateCursor: {
    isActive: boolean;
    label: string;
    isLock:boolean
  };
  setStateCursor: (value: Partial<IStoreZustand['stateCursor']>) => void;
  

   //url
   stateUrl: {
    isTarget: string;
    isCurrent: string;
  };
  setStateUrl: (value: Partial<IStoreZustand['stateUrl']>) => void;
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


  // state navbar modal
  stateMenuIsOpen: false,
  setStateMenuIsOpen: (key:boolean) => {
    set(() => ({ stateMenuIsOpen: key }));
  },

  //button navbar state
  stateNavbarList: false,
  setStateNavbarList: (key:boolean) => {
    set(() => ({ stateNavbarList: key }));
  },

  //button navbar state
  stateButtonNav: false,
  setStateButtonNav: (key:boolean) => {
    set(() => ({ stateButtonNav: key }));
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
   stateCursor: {
    isActive: false,
    label: 'Scroll',
    isLock: false
  },
  // Hàm để cập nhật stateCursor, cho phép cập nhật từng phần
  setStateCursor: (value) => {
    set((state) => ({
      stateCursor: {
        ...state.stateCursor, // Duy trì các giá trị cũ
        ...value, // Cập nhật các giá trị mới
      },
    }));
  },

    //state url
    stateUrl: {
      isTarget: 'none',
      isCurrent: 'none',
    },
    // Hàm để cập nhật stateCursor, cho phép cập nhật từng phần
    setStateUrl: (value) => {
      set((state) => ({
        stateUrl: {
          ...state.stateUrl, // Duy trì các giá trị cũ
          ...value, // Cập nhật các giá trị mới
        },
      }));
    }

}));

export default useStoreZustand;
