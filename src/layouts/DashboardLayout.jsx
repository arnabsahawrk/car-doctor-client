import { Outlet } from "react-router-dom";
import DashboardNav from "../components/common/Nav/DashboardNav";

const DashboardLayout = () => {
  return (
    <main className="text-pretty">
      <DashboardNav />
      <Outlet />
    </main>
  );
};

export default DashboardLayout;
