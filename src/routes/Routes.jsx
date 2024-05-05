import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import HomePage from "../pages/HomePage";
import AllServicesPage from "../pages/AllServicesPage";
import ServiceDetailsPage from "../pages/ServiceDetailsPage";
import OrderPage from "../pages/OrderPage";
import DashboardLayout from "../layouts/DashboardLayout";
import LogInPage from "../pages/LogInPage";

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
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        index: true,
        element: <OrderPage />,
      },
      {
        path: "/dashboard/login",
        element: <LogInPage />,
      },
    ],
  },
]);

export default router;
