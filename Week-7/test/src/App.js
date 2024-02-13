import React, { useState , useEffect } from "react";

function App() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      const newItem = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      };
      setItems((prevItems) => [...prevItems, newItem]);
      setFormData({ name: "", email: "", phone: "" });
    }
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
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
      if (!value.trim()) error = "Service cannot be empty";
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
    <div>
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
              name="name"
              type="text"
              placeholder="Enter your name"
              onChange={handleChange}
              value={formData.name}
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
              name="email"
              type="email"
              placeholder="Enter your email"
              onChange={handleChange}
              value={formData.email}
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
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              onChange={handleChange}
              value={formData.phone}
            />
            {errors.phone && (
              <p className="text-sm text-red-800">{errors.phone}</p>
            )}
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
      <div>
        <h2>Appointments</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
