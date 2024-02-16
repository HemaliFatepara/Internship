import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserDoctor } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logindata = localStorage.getItem("isLoggedIn");
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handlelogout = () => {
    localStorage.setItem("isLoggedIn", "unauthorized");
    navigate("/");
  };

  if (logindata === "user") {
    return (
      <nav className="shadow-xl">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FaUserDoctor className="text-2xl items-start" />
              </div>
              <Link to="/userd" className="px-2 text-xl">
                <h3 className="text-xl">AppointCare</h3>
              </Link>
            </div>
            <div className="hidden sm:flex space-x-4 ml-auto">
              <div>
                <Link
                  to="/userd"
                  className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  to="/book"
                  className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Book Appointment
                </Link>
                <Link
                  onClick={handlelogout}
                  to="/"
                  className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Logout
                </Link>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-black"
                aria-controls="mobile-menu"
                aria-expanded={menuOpen ? "true" : "false"}
              >
                {/* Menu icon */}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${menuOpen ? "block" : "hidden"} sm:hidden shadow-lg`}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2 text-center">
            <div>
              <Link
                to="/userd"
                className="text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Dashboard
              </Link>
              <Link
                to="/book"
                className="text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Book Appointment
              </Link>
              <Link
                onClick={handlelogout}
                to="/"
                className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  } else if (logindata === "admin") {
    return (
      <nav className="shadow-xl">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FaUserDoctor className="text-2xl items-start" />
              </div>
              <Link to="/admind" className="px-2 text-xl">
                <h3 className="text-xl">AppointCare</h3>
              </Link>
            </div>
            <div className="hidden sm:flex space-x-4 ml-auto">
              <div>
                <Link
                  to="/admind"
                  className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  onClick={handlelogout}
                  to="/"
                  className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Logout
                </Link>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-black"
                aria-controls="mobile-menu"
                aria-expanded={menuOpen ? "true" : "false"}
              >
                {/* Menu icon */}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${menuOpen ? "block" : "hidden"} sm:hidden shadow-lg`}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2 text-center">
            <div>
              <Link
                to="/admind"
                className="text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Dashboard
              </Link>
              <Link
                onClick={handlelogout}
                to="/"
                className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  } else if (logindata === "unauthorized") {
    return (
      <nav className="shadow-xl">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FaUserDoctor className="text-2xl items-start" />
              </div>
              <Link to="/" className="px-2 text-xl">
                <h3 className="text-xl">AppointCare</h3>
              </Link>
            </div>
            <div className="hidden sm:flex space-x-4 ml-auto">
              <div>
                <Link
                  to="/register"
                  className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Register
                </Link>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-black"
                aria-controls="mobile-menu"
                aria-expanded={menuOpen ? "true" : "false"}
              >
                {/* Menu icon */}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${menuOpen ? "block" : "hidden"} sm:hidden shadow-lg`}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2 text-center">
            <div>
              <Link
                to="/register"
                className="text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
