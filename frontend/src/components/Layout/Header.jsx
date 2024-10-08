import React from "react";
import { logout } from "../../services/authService";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };
  const { user } = useAuth();
  console.log('user :>> ', user);
  return (
    <div className="flex px-2 h-[12vh] w-full justify-between items-center space-x-3 ">
      <h1 className="text-2xl font-bold ml-4">Welcome {user?.firstName}</h1>
      <div className="wraper flex space-x-3 items-center justify-center ">
        {user && user.role === "admin" && (
          <Link
            to="/admin/users"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
          >
            Open Dashboard
          </Link>
        )}
        <button
          onClick={handleLogout}
          className=" bg-red-500 hover:bg-red-600 text-white px-4 py-1 h-10 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
