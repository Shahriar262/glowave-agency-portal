import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingActions from "../components/FloatingActions";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFF]">
      <Navbar />

      <main className="flex-grow pt-28 lg:pt-36">
        <Outlet />
      </main>
     
      <FloatingActions />
      <Footer />
    </div>
  );
};

export default MainLayout;
