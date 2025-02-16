import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-center text-white">
      <h1>Login</h1>
      <form
        action="/api/login"
        method="POST"
        className="flex flex-col justify-center items-center bg-gray-800 w-1/3 px-10 border rounded-2xl"
      >
        <div className="flex flex-row justify-evenly my-10">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="jhon@gmail.com"
            className="border hover:rounded-md hover:bg-gray-600 text-center"
          />
        </div>
        <div className="flex flex-row justify-evenly mb-10">
          <label htmlFor="name">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="pussy"
            className="border hover:rounded-md hover:bg-gray-600 text-center"
          />
        </div>
        <button
          type="submit"
          className=" border w-30 bg-white text-black mb-10 cursor-pointer rounded-md"
        >
          Login
        </button>
      </form>
      <button
        className="bg-gray-500 p-3 rounded-xl border-2 border-black m-3 cursor-pointer"
        onClick={() => navigate("/signup")}
      >
        Signup
      </button>
    </div>
  );
}
