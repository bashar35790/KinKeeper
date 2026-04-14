import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import "./index.css";
import { RouterProvider } from "react-router";
import Dashboard from "./pages/dashbord/Dashbord";
import Stats from "./pages/stats/Stats";
import Timeline from "./pages/timeline/Timeline";
import Layout from "./layout/Layout";
import FrindDetails from "./pages/frindDetails/FrindDetails";
import FriendsContextProvider from "./context/FriendsContext";
import { ToastContainer } from "react-toastify";
import NotFound from "./pages/notFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: async () => {
          const res = await fetch("/Friends.json");
          return res.json();
        },
      },
      {
        path: "/stats",
        element: <Stats />,
      },
      { path: "/timeline", element: <Timeline /> },
      {
        path: "/friends-details/:id",
        element: <FrindDetails />,
        loader: async () => {
          const res = await fetch("/Friends.json");
          return res.json();
        },
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <StrictMode>
    <FriendsContextProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </FriendsContextProvider>
  </StrictMode>,
);
