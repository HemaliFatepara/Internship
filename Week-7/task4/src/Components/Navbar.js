import React, { useState } from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Navbar({ isLoggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
            {isLoggedIn ? (
              <>
                <Link
                  to="/dashboard"
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
              </>
            ) : (
              <Link
                to="/login"
                className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Login
              </Link>
            )}
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
          {isLoggedIn ? (
            <>
              <Link
                to="/dashboard"
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
            </>
          ) : (
            <Link
              to="/login"
              className="text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
