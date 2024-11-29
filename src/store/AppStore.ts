import { create } from 'zustand'

export interface AppState {
    search: string;
    darkMode: boolean;
    setSearch: (value: string) => void;
    toggleDarkMode: () => void;
  }
  

export const useAppStore = create<AppState>((set) => ({
  search: "",
  darkMode: false,
  setSearch: (value: string) => set({ search: value }),
  toggleDarkMode: () =>
    set((state: { darkMode: boolean;}) => ({ darkMode: !state.darkMode })),
}));