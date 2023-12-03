import { createContext, useContext, useState } from "react";

const EditDetailsContext = createContext();

function EditDetailsProvider({ children }) {
  const [editDetails, setEditDetails] = useState();

  return (
    <EditDetailsContext.Provider value={{ editDetails, setEditDetails }}>
      {children}
    </EditDetailsContext.Provider>
  );
}

function useEditDetails() {
  const context = useContext(EditDetailsContext);

  if (context === undefined)
    throw new Error(
      "EditDetailsContext was used outside of EditDetailsProvider"
    );

  return context;
}

export { EditDetailsProvider, useEditDetails };
