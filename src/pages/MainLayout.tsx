import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Breadcrumb from "./components/Breadcrumb";

function MainLayout() {
  return (
    <div className="relative">
      <Header />
      <main className="px-4 xl:px-0 max-w-310 mx-auto pb-20 xl:pb-40 overflow-hidden">
        <Breadcrumb />
        <Outlet />
      </main>
    </div>
  );
}
export default MainLayout;
