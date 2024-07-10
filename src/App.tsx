import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ErrorPage from "./src/pages/errors/error-page";
import Factions from "./src/pages/factions/Factions";
import Home from "./src/pages/home/Home";
import Layout from "./src/pages/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/factions",
        element: <Factions />,
      },
    ],
  },
  
]);
function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
