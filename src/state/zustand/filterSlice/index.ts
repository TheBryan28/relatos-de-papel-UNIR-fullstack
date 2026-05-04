import { type StateCreator } from "zustand";
import type { FilterSlice } from "./types";

export const createFilterSlice: StateCreator<FilterSlice, [], [], FilterSlice> = (set) => ({
  searchTerm: "",
  setSearchTerm: (term) => set((state) => ({ ...state, searchTerm: term })),
});
