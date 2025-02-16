import { useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // only executed if there are no validation errors
  const onSubmit = async (data) => {
    const res = await axios.post("/api/signup", data);

    if (res.data.error)
      console.error(
        "API Error:",
        res.data.error?.errorResponse?.errmsg || res.data.error
      );
    else navigate("/login");
  };
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-center">
      <h1 className="">Signup</h1>
      {Object.values(errors).map((error) => (
        <p key={error.message} className="text-red-500 text-center">
          {error.message}
        </p>
      ))}
      <form
        className="flex flex-col justify-center items-center bg-gray-800 w-1/3 px-10 border rounded-2xl  text-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        {}
        <div className="flex flex-row justify-evenly mt-10">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border hover:rounded-md hover:bg-gray-600 text-center"
            placeholder="Jhon Doe"
            {...register("name", { required: "Name is required" })}
          />
        </div>
        <div className="flex flex-row justify-evenly my-10">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="jhon@gmail.com"
            className="border hover:rounded-md hover:bg-gray-600 text-center"
            {...register("email", { required: "Email is required" })}
          />
        </div>
        <div className="flex flex-row justify-evenly mb-10">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="pussy"
            className="border hover:rounded-md hover:bg-gray-600 text-center"
            {...register("password", { required: "Password is required" })}
          />
        </div>
        <div className="flex flex-row justify-evenly mb-10">
          <label htmlFor="age">Age: </label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="18"
            className="border hover:rounded-md hover:bg-gray-600 text-center"
            {...register("age", { required: "Age is also required" })}
          />
        </div>
        <button
          type="submit"
          className=" border w-30 bg-white text-black mb-10 cursor-pointer rounded-md p-2"
        >
          Signup
        </button>
      </form>
      <button
        className="bg-gray-500 p-3 rounded-xl border-2 border-black m-3 cursor-pointer"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </div>
  );
}
