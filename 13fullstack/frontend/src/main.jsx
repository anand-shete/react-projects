import "./index.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import { Login, Signup, AllUsers } from "./components";
import { StrictMode } from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    // route path is / but inside the route i am getting data from api of route '/api/allUsers'
    // the parent element reqires Outlet inside its element
    <Route path="/" element={<App />}>
      <Route index element={<AllUsers />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
