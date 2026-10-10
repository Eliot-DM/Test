import { useEffect } from "react";
import { useUserStore } from "./store/Store";

function App() {
  const theme = useUserStore((state) => state.user.theme);
  const setTheme = useUserStore((state) => state.setTheme);

  useEffect(() => {
    document.documentElement.classList.remove("dark", "red");

    if (theme !== "white") {
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  return (
    <div
      className="
        min-h-screen 
       
        dark:bg-black dark:text-white
        red:bg-red-900 red:text-white
        transition-colors
      "
    >
      <div className="flex min-h-screen flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-bold">Привет, мир 👋</h1>

        <div className="flex gap-2">
          <button
            onClick={() => setTheme("white")}
            className="rounded-lg bg-gray-200 px-4 py-2 text-black"
          >
            ☀️ White
          </button>

          <button
            onClick={() => setTheme("dark")}
            className="rounded-lg bg-gray-800 px-4 py-2 text-white"
          >
            🌙 Dark
          </button>

          <button
            onClick={() => setTheme("red")}
            className="rounded-lg bg-red-500 px-4 py-2 text-white"
          >
            ❤️ Red
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
