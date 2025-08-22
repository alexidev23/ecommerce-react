import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { ThemeProvider } from "./theme-provider";


export default function Layout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen w-screen bg-background text-foreground">
        <Header />

        <main className="mx-auto max-w-6xl p-4">
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
}