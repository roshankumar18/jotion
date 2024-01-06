"use client";

import { createContext, useContext, useState } from "react";

const SearchContext = createContext({
  isopen: false,
  onOpen: () => {},
  onClose: () => {},
  onToggle: () => {},
});
export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [isopen, setIsopen] = useState(false);
  const onOpen = () => {
    setIsopen(true);
  };
  const onClose = () => {
    setIsopen(false);
  };
  const onToggle = () => {
    setIsopen((prev) => !prev);
  };
  return (
    <SearchContext.Provider value={{ isopen, onOpen, onClose, onToggle }}>
      {children}
    </SearchContext.Provider>
  );
};
export const useSearchContext = () => {
  return useContext(SearchContext);
};
