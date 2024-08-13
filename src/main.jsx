import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import App from "./App.jsx";
import Home from "./routes/Home.jsx";
import Contact from "./routes/Contact.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import ContactDetails from "./routes/ContactDetails.jsx";
import Video from "./routes/VideoModal.jsx";
import "./index.css";

// Criação das rotas com createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "video",
        element: <Video />,
      },
      {
        path: "contact/:id",
        element: <ContactDetails />,
      },
      {
        path: "oldcontact",
        element: <Navigate to="/contact" />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
