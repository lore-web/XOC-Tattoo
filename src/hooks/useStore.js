import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const config = (set) => {
  const initalState = {
    isOpened: false,
    setIsOpen: (boolean) => {
      set((draft) => {
        draft.isOpened = boolean;
      });
    },
    handleDialogModal: (boolean) => {
      initalState.setIsOpen(boolean);
    },
  };

  return initalState;
};

const useStore = create(immer(config));

export default useStore;
