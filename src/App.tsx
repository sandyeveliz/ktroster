import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ErrorPage from "./src/pages/errors/error-page";
import Factions from "./src/pages/factions/Factions";
import Home from "./src/pages/home/Home";
import Layout from "./src/pages/layout";
import Data from "./src/pages/data/data";
import { PrimeReactProvider } from 'primereact/api';

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
      {
        path: "/data",
        element: <Data />,
      },
    ],
  },
]);
function App() {
  return (<PrimeReactProvider>
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
  </PrimeReactProvider>);
}

export default App;
