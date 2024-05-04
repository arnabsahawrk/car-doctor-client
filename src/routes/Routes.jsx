import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import HomePage from "../pages/HomePage";
import AllServicesPage from "../pages/AllServicesPage";
import ServiceDetailsPage from "../pages/ServiceDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/services",
        element: <AllServicesPage />,
      },
      {
        path: "/services/details/:id",
        element: <ServiceDetailsPage />,
      },
    ],
  },
]);

export default router;
