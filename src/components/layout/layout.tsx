import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import { Toaster } from "react-hot-toast";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}
