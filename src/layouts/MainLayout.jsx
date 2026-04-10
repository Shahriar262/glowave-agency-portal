import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFF]">
      <Navbar />

      <main className="flex-grow pt-28 lg:pt-36">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
