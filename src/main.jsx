import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import "./index.css";
import { RouterProvider } from "react-router";
import Dashboard from "./pages/dashbord/Dashbord";
import Stats from "./pages/stats/Stats";
import Timeline from "./pages/timeline/Timeline";
import FrindDetails from "./pages/frindDetails/FrindDetails";
import Layout from "./layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "/stats", element: <Stats /> },
      { path: "/timeline", element: <Timeline /> },
      { path: "/friends", element: <FrindDetails /> },
    ],
  },
]);

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
