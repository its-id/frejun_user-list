import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
    navigate(0);
  };

  return (
    <nav className="flex items-baseline justify-between flex-wrap p-3 shadow bg-[#F9FAFB]">
      <p className="text-3xl font-semibold">FreJun Task</p>
      <button
        type="button"
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        onClick={handleLogout}
      >
        Log out
      </button>
    </nav>
  );
};

export default Navbar;
