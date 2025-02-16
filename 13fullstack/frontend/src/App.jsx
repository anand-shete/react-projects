import { Outlet } from "react-router";

export default function App() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center ">
      <h1 className="text-5xl font-bold mt-10">Welcome to App</h1>
      <p className="mt-3">
        Simple Web application created using React and Express.js which fetches
        data dynamically from MongoDB
      </p>
      {/* Outlet will be replaced by whichever child component matches the current route. */}
      <Outlet />
    </div>
  );
}
