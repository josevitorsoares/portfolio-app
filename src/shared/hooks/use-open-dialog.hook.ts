import { create } from "zustand";

type DialogStore = {
  isOpened: boolean;
  handleOpenChange: (open: boolean) => void;
};

export const useOpenDialog = create<DialogStore>((set) => ({
  isOpened: false,
  handleOpenChange: (open) => set({ isOpened: open }),
}));
