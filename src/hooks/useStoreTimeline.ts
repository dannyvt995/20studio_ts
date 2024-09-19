// store/timelineStore.ts
import { create } from 'zustand';
import { gsap } from 'gsap';

// Define the interface for the store
interface TimelineStore {
  timelines: {

    navbarModal: gsap.core.Timeline | null;
    navbarDesListOn: gsap.core.Timeline | null;
    navbarDesListOff: gsap.core.Timeline | null;
    buttonNavbar: gsap.core.Timeline | null;
    itemNavbarModal: gsap.core.Timeline | null;
    otherTimelines: Record<string, gsap.core.Timeline | null>; // Sử dụng Record<string, Timeline | null> để cho phép chỉ mục kiểu string
  };
  setTimeline: (key: 'navbarModal' | 'navbarDesListOn' | 'navbarDesListOff' | 'buttonNavbar' | 'itemNavbarModal', timeline: gsap.core.Timeline) => void;
  getTimeline: (key: 'navbarModal' | 'navbarDesListOn' | 'navbarDesListOff' | 'buttonNavbar' | 'itemNavbarModal') => gsap.core.Timeline | null;
  setOtherTimeline: (key: string, timeline: gsap.core.Timeline) => void; // Cập nhật kiểu key
  getOtherTimeline: (key: string) => gsap.core.Timeline | null; // Cập nhật kiểu key
  getAllTimelines: () => Record<string, gsap.core.Timeline | null>; // Cập nhật kiểu trả về
}

// Zustand store with types
const useStoreTimeline = create<TimelineStore>((set, get) => ({
  timelines: {
    navbarModal: null,
    navbarDesListOn: null,
    navbarDesListOff:null,
    buttonNavbar: null,
    itemNavbarModal: null,
    otherTimelines: {
      '/home': null,
      '/work': null,
      '/about': null,
      '/service': null,
      '/contact': null,
    },
  },
  setTimeline: (key, timeline) =>
    set((state) => ({
      timelines: { ...state.timelines, [key]: timeline },
    })),
  getTimeline: (key) => get().timelines[key],
  setOtherTimeline: (key, timeline) =>
    set((state) => ({
      timelines: {
        ...state.timelines,
        otherTimelines: {
          ...state.timelines.otherTimelines,
          [key]: timeline,
        },
      },
    })),
  getOtherTimeline: (key) => get().timelines.otherTimelines[key],
  getAllTimelines: () => get().timelines.otherTimelines,
}));

export default useStoreTimeline;
