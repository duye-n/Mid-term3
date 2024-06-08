import React, { createContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);

  return (
    <SearchContext.Provider value={{ text, setText, users, setUsers }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
