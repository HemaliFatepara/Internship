import React, { useState, useEffect } from "react";

const Emp = () => {
  const [formDataArray, setFormDataArray] = useState([]);
  const [errors , setErrors] = useState({})
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
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const validateField = (filedName , value) => {
    const name_regx = /^[a-zA-Z.\-_]{1,30}$/;
    const email_regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phone_regx = /^\d{10}$/;
    let error = "";

    if (filedName === "email") {
      if(!value.trim()) error = "Email cannot be empty";
      else if (!email_regx.test(value))
      error = "Invalid email format"
    } else if (filedName === "first_name") {
      if (!value.trim()) error = "First name cannot be empty";
      else if (!name_regx.test(value))
      error = "Only alphabets, dots, hyphens, and underscores are allowed";
    } else if (filedName === "last_name") {
      if (!value.trim()) error = "Last name cannot be empty";
      else if (!name_regx.test(value))
      error = "Only alphabets, dots, hyphens, and underscores are allowed";
    } else if (filedName === "phone") {
      if(!value.trim()) error = "Phone number cannot be empty"
      else if (!phone_regx.test(value))
      error = "Invalid phone number format";
    } else if (filedName === "designation") {
      if(!value.trim()) error = "Designation cannot be empty"
    }
    return error;
  }


  const validate = () => {
    let isValid = true;
    for (const key in FormData) {
      const fieldError = validateField(key, FormData[key]);
      setErrors((prevErrors) => ({ ...prevErrors, [key]: fieldError }));
      if (fieldError) isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isVaild = validate()

    if (isVaild) {
      const existingFormData = JSON.parse(localStorage.getItem("Empdata")) || [];
      const updatedFormDataArray = [...existingFormData, FormData];
  
      localStorage.setItem("Empdata", JSON.stringify(updatedFormDataArray));
    }

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
            onChange={handleChange}
            value={FormData.email}
            className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
           {errors.email && (
              <p className="text-sm text-red-800">{errors.email}</p>
            )}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="first_name"
              id="floating_first_name"
              placeholder="First name"
              onChange={handleChange}
              value={FormData.first_name}
              className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
             {errors.first_name && (
              <p className="text-sm text-red-800">{errors.first_name}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="last_name"
              id="floating_last_name"
              placeholder="Last name"
              onChange={handleChange}
              value={FormData.last_name}
              className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
             {errors.last_name && (
              <p className="text-sm text-red-800">{errors.last_name}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="tel"    
              name="phone"
              id="floating_phone"
              placeholder="Phone number "
              onChange={handleChange}
              value={FormData.phone}
              className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
             {errors.phone && (
              <p className="text-sm text-red-800">{errors.phone}</p>
            )}
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
            {errors.designation && (
              <p className="text-sm text-red-800">{errors.designation}</p>
            )}
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
