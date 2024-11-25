import React, { useState, useEffect } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("select");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const roleCredentials = {
    select: { username: "", password: "" },
    admin: { username: "admin", password: "admin123" },
    manager: { username: "manager", password: "manager123" },
    user: { username: "user", password: "user123" },
  };

  useEffect(() => {
    setUsername(roleCredentials[role].username);
    setPassword(roleCredentials[role].password);
  }, [role]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="h-full overflow-x-hidden my-4 border-x-2">
      <div className="flex flex-col md:flex-row items-center justify-center w-full h-auto md:h-1/2 px-4">
        <div className="w-full md:w-1/2 h-full text-left px-12">
          <h1 className="text-xl font-bold text-center">Welcome to RBAC</h1>
          <p className="text-center text:xs text-gray-500">
            VRV RBAC is a web application that allows you to manage your
            authorizations and roles.
          </p>
          <br />
          <form onSubmit={handleSubmit}>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full h-12 rounded-md bg-gray-200 p-2 mb-4 outline-none"
            >
              <option value="select">Select Role</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="user">User</option>
            </select>
            <label htmlFor="username" className="block mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={username}
              className="w-full h-12 rounded-md bg-gray-200 p-2 text-left outline-none mb-4"
              readOnly
            />
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                value={password}
                className="w-full h-12 rounded-md bg-gray-200 p-2 text-left outline-none"
                readOnly
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                {passwordVisible ? (
                  <HiEyeOff size={24} className="text-gray-400" />
                ) : (
                  <HiEye size={24} className="text-gray-400" />
                )}
              </span>
            </div>
            <button
              type="submit"
              className="w-full h-12 rounded-md bg-blue-500 text-white font-bold p-2 text-center my-4"
            >
              Login
            </button>
          </form>
        </div>
        <div className="w-full hidden md:block md:w-1/2 mt-8 md:mt-0">
          <img
            src="/src/assets/hero.png"
            alt="rbac"
            height={100}
            width={100}
            className="w-11/12"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
