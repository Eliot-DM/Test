import { create } from "zustand";

type User = {
  id: number;
  name: string;
  theme: "white" | "dark" | "red";
};

type UserStore = {
  user: User;
  setTheme: (theme: "white" | "dark" | "red") => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: {
    id: 1,
    name: "Alex",
    theme: "white",
  },

  setTheme: (theme) =>
    set((state) => ({
      user: {
        ...state.user,
        theme,
      },
    })),
}));
