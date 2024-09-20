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
