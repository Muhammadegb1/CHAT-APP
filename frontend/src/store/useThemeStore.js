import { create } from "zustand";


export const useThemeStore = create((set) => ({
    theme: localStorage.getItem("chat-item") || "cofee",
    setTheme: (theme) => {
        localStorage.setItem("chat-item", theme);
        set({ theme });
    },
})
);
