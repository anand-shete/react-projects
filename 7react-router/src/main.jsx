import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  About,
  Contact,
  Github,
  GitHubLoader,
  Home,
  Layout,
  User,
} from "./Components";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router";
import "./index.css";

const root = document.getElementById("root");

// Latest Documentation
// ReactDOM.createRoot(root).render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="user/:userId" element={<User />} />
//         <Route loader={GitHubLoader} path="github" element={<Github />} />
//       </Route>
//     </Routes>
//   </BrowserRouter>
// );

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route
        loader={GitHubLoader}
        path="github"
        element={<Github />}
        hydrateFallbackElement
      />
    </Route>
  )
);

ReactDOM.createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
