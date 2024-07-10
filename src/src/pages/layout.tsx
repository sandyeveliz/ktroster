import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import "./layout.scss";
import { Header } from "../components/Header";
function Layout() {
  return (
    <>
      <div className="layout-container">
        <Sidebar />
        <div>
          <Header />
          <div className="pages-container">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
