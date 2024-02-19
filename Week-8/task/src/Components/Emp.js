import React, { useState, useEffect } from "react";

const Emp = () => {
  const [formDataArray, setFormDataArray] = useState([]);
  const [FormData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    designation: "",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("designation");
    if (storedData) {
      const parsedData = JSON.parse(storedData).map((FormData, index) => ({
        ...FormData,
        originalIndex: index,
      }));
      setFormDataArray(parsedData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingFormData = JSON.parse(localStorage.getItem("Empdata")) || [];
    const updatedFormDataArray = [...existingFormData, FormData];

    localStorage.setItem("Empdata", JSON.stringify(updatedFormDataArray));
    setFormData({
      email: "",
      first_name: "",
      last_name: "",
      phone: "",
      designation: "",
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Employee Registration</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-5">
        <div>
          <input
            type="email"
            name="email"
            id="floating_email"
            placeholder="Email address"
            required
            onChange={handleChange}
            value={FormData.email}
            className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="first_name"
              id="floating_first_name"
              placeholder="First name"
              required
              onChange={handleChange}
              value={FormData.first_name}
              className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="text"
              name="last_name"
              id="floating_last_name"
              placeholder="Last name"
              required
              onChange={handleChange}
              value={FormData.last_name}
              className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="tel"    
              name="phone"
              id="floating_phone"
              placeholder="Phone number "
              required
              onChange={handleChange}
              value={FormData.phone}
              className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <select
              name="designation"
              id="designation"
              onChange={handleChange}
              value={FormData.designation}
              className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select a designation</option>
              {formDataArray.map((formData) => (
                <option key={formData.originalIndex} value={formData.designation}>
                  {formData.designation}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="block w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
      </div>
    </div>
  );
};

export default Emp;
