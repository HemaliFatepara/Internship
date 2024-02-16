import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserDoctor } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };

  const onSubmit = () => {
    const userData = JSON.parse(localStorage.getItem("logindata"));

    if (formdata.password === "admin" && formdata.email === "admin@gmail.com") {
      localStorage.setItem("isLoggedIn", "admin");
      navigate("/admind");
    } else if (userData) {
      const passwords = userData.map((item) => item.password);
      const enteredPassword = formdata.password;
      if (passwords.includes(enteredPassword)) {
        localStorage.setItem("isLoggedIn", "user");
        localStorage.setItem("currentuser", formdata.email);
        navigate("/userd");
      } else {
        alert("Email or Password is not matching with our record");
        localStorage.setItem("isLoggedIn", "unauthorized");
        navigate("/");
      }
    }
  };

  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex items-center justify-center">
            <FaUserDoctor className="text-3xl" />
            <Link to="/" className="px-2 text-xl">
              <h3 className="text-3xl">AppointCare</h3>
            </Link>
          </div>
          <h2 className="mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={formdata.email}
                  type="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  onChange={handleChange}
                  value={formdata.password}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <Link
              to="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
