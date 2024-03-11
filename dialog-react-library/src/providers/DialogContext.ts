import { createContext, useContext } from "react";

type DialogContextType = {
  openDialog: () => void;
  closeDialog: () => void;
};

const DialogContext = createContext<DialogContextType | null>(null);

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
};

export default DialogContext;
