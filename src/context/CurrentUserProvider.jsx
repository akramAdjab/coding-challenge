import { createContext, useContext, useState } from "react";

const CurrentUserContext = createContext();

function CurrentUserProvider({ children }) {
  const [currentUserId, setCurrentUserId] = useState(null);

  return (
    <CurrentUserContext.Provider value={{ currentUserId, setCurrentUserId }}>
      {children}
    </CurrentUserContext.Provider>
  );
}

function useCurrentUser() {
  const context = useContext(CurrentUserContext);
  if (context === undefined)
    throw new Error(
      "CurrentUserContext was used outside of CurrentUserProvider"
    );

  return context;
}

export { CurrentUserProvider, useCurrentUser };
