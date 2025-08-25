import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import AllServices from "../Pages/AllServices";
import ServiceDetails from "../Pages/ServiceDetails";
import Contact from "../Pages/Contact/Contact";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import Protfolio from "../Pages/portfolio/portfolio";
import ProtfolioDetails from "../Pages/ProtfolioDetails/ProtfolioDetails";
import ThankYou from "../pages/thank-you/thank-you";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-services",
        element: <AllServices />,
      },
      {
        path: "/service-details",
        element: <ServiceDetails />,
      },
      {
        path: "/all-blog",
        element: <AllBlogs />,
      },
      {
        path: "/blog-details",
        element: <BlogDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/portfolio",
        element: <Protfolio />,
      },
      {
        path: "/portfolio-details/:id",
        element: <ProtfolioDetails />,
      },
      {
        path: "/thank-you",        
        element: <ThankYou />,     
      },
    ],
  },
]);
