import { useState } from "react";
import { Link } from "react-router-dom";

function Form() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Date: "",
    Time: "",
    Doctorname: "",
    Purpose: "",
  });

  const resetForm = () => {
    setFormData({
      Name: "",
      Email: "",
      Phone: "",
      Date: "",
      Time: "",
      Doctorname: "",
      Purpose: "",
    });
    setSubmitted(false);
    setErrors({});
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validate();
    if (isValid) {
      // Retrieve existing form data array from local storage
      const existingFormData =
        JSON.parse(localStorage.getItem("formDataArray")) || [];

      // Append new form data to the existing array
      const updatedFormDataArray = [...existingFormData, formData];

      // Store the updated array back into local storage
      localStorage.setItem(
        "formDataArray",
        JSON.stringify(updatedFormDataArray)
      );

      console.log("Form data array:", updatedFormDataArray);
      setSubmitted(true);
      setShowModal(true);
    }
  };

  const validateField = (fieldName, value) => {
    const name_regx = /^[a-zA-Z.\-_]{1,30}$/;
    const email_regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phone_regx = /^\d{10}$/;
    let error = "";

    if (fieldName === "name") {
      if (!value.trim()) error = "Name cannot be empty";
      else if (!name_regx.test(value))
        error = "Only alphabets, dots, hyphens, and underscores are allowed";
    } else if (fieldName === "email") {
      if (!value.trim()) error = "Email cannot be empty";
      else if (!email_regx.test(value)) error = "Invalid email format";
    } else if (fieldName === "phone") {
      if (!value.trim()) error = "Phone number cannot be empty";
      else if (!phone_regx.test(value)) error = "Invalid phone number format";
    } else if (fieldName === "date") {
      if (!value.trim()) error = "Date cannot be empty";
    } else if (fieldName === "time") {
      if (!value.trim()) error = "Time cannot be empty";
    } else if (fieldName === "service") {
      if (!value.trim()) error = "Doctor name cannot be empty";
    } else if (fieldName === "msg") {
      if (!value.trim()) error = "Message cannot be empty";
    }

    return error;
  };

  const validate = () => {
    let isValid = true;
    for (const key in formData) {
      const fieldError = validateField(key, formData[key]);
      setErrors((prevErrors) => ({ ...prevErrors, [key]: fieldError }));
      if (fieldError) isValid = false;
    }
    return isValid;
  };

  return (
    <div className="container mx-auto px-4">
      {submitted && (
        <div
          className={`fixed z-10 inset-0 overflow-y-auto ${
            showModal ? "block" : "hidden"
          }`}
        >
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      Appointment booked successfully!
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Your appointment has been successfully booked. Would you
                        like to book another appointment?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={resetForm}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Book another appointment
                </button>
                <Link
                  to="/userd"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
          Book an Appointment
        </div>
        <form className="py-4 px-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="Name"
              type="text"
              placeholder="Enter your name"
              onChange={handleChange}
              value={formData.Name}
            />

            {errors.name && (
              <p className="text-sm text-red-800">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="Email"
              type="email"
              placeholder="Enter your email"
              onChange={handleChange}
              value={formData.Email}
            />
            {errors.email && (
              <p className="text-sm text-red-800">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              name="Phone"
              type="tel"
              placeholder="Enter your phone number"
              onChange={handleChange}
              value={formData.Phone}
            />
            {errors.phone && (
              <p className="text-sm text-red-800">{errors.phone}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="date"
            >
              Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              name="Date"
              type="date"
              placeholder="Select a date"
              onChange={handleChange}
              value={formData.Date}
            />
            {errors.date && (
              <p className="text-sm text-red-800">{errors.date}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="time"
            >
              Time
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="time"
              type="time"
              name="Time"
              placeholder="Select a time"
              onChange={handleChange}
              value={formData.Time}
            />
            {errors.time && (
              <p className="text-sm text-red-800">{errors.time}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="service"
            >
              Doctor Name
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="service"
              name="Doctorname"
              onChange={handleChange}
              value={formData.Doctorname}
            >
              <option value="">Select a Doctor </option>
              <option value="Dr. SachSanjay deva">Dr. SachSanjay deva</option>
              <option value="Dr. Ashish Sabharwal">Dr. Ashish Sabharwal</option>
              <option value="Dr. Surbhi Anand">Dr. Surbhi Anand</option>
              <option value="Dr. Gagan Gautam">Dr. Gagan Gautam</option>
              <option value="Dr. Aditya Gupta">Dr. Aditya Gupta</option>
              <option value="Dr. Sandeep Batra">Dr. Sandeep Batra</option>
              <option value="Dr. SKS Marya">Dr. SKS Marya</option>
              <option value="Dr. Gaurav Kharya">Dr. Gaurav Kharya</option>
              <option value="Dr. Ankur Bahl">Dr. Ankur Bahl</option>
              <option value="Dr. Amandeep Singh Dhillon">
                Dr. Amandeep Singh Dhillon
              </option>
            </select>
            {errors.service && (
              <p className="text-sm text-red-800">{errors.service}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="message"
            >
              Purpose of Visit
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="4"
              name="Purpose"
              placeholder="Enter any additional information"
              onChange={handleChange}
              value={formData.Purpose}
            ></textarea>
            {errors.msg && <p className="text-sm text-red-800">{errors.msg}</p>}
          </div>

          <div className="flex items-center justify-center mb-4">
            <button
              className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
