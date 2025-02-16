import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
import axios from "axios";

export default function AllUsers() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // using axios (or fetch) gives more control over form submissio,  handling API responses dynamically., validation, and handling responses without a full page reload
  useEffect(() => {
    axios
      .get("/api/allUsers")
      .then((res) => {
        // console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.log("axios /api/allUsers error: ", err));
  }, []);

  return users ? (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">Users</h1>
      <div className="bg-red-200 w-1/2 p-4">
        <div className="flex bg-red-400 font-bold border-black">
          <div className="flex-1 px-4 py-2 border-black text-center">Name</div>
          <div className="flex-1 px-4 py-2 border-black text-center">Email</div>
          <div className="flex-1 px-4 py-2 text-center">Age</div>
        </div>

        {users.map((user) => (
          <div key={user._id} className="flex border-black text-center">
            <div className="flex-1 px-4 py-2 border-black">{user.name}</div>
            <div className="flex-1 px-4 py-2 border-black">{user.email}</div>
            <div className="flex-1 px-4 py-2">{user.age}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-row m-3 p-3">
        <button
          className="border mx-10 px-3 py-2 bg-red-500 rounded-md cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button
          className="border mx-10 px-3 py-2 bg-red-500 rounded-md cursor-pointer"
          onClick={() => navigate("/signup")}
        >
          Signup
        </button>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}
