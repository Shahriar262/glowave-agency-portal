import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import LegalPages from "../pages/LegalPages";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:id", element: <BlogDetail /> },
      { path: "/contact", element: <Contact /> },
      { path: "/services", element: <Services /> },
      { path: "/about", element: <About /> },
      { path: "/legal-page", element: <LegalPages /> },
    ],
  },
]);

export default router;
