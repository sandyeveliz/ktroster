import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import "./layout.scss";
import { Header } from "../components/Header";
import { AuthStatus, useAuth } from "../context/AuthContext";
function Layout() {
  const { userState } = useAuth();

  if (userState === AuthStatus.LOADING) return <div>Loading...</div>;

  if (userState === AuthStatus.NOT_LOGGED_IN) {
    return (
      <>
        <Header />
        <div>Not logged in</div>
      </>
    );
  }

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
