import { create } from "zustand";

const useSearchStore = create((set) => ({
  searchTerm: "",
  searchType: "users",
  currentPage: 1,
  setSearchTerm: (term) => set({ searchTerm: term, currentPage: 1 }),
  setSearchType: (type) => set({ searchType: type, currentPage: 1 }),
  setCurrentPage: (page) => set({ currentPage: page }),
}));

export default useSearchStore;
