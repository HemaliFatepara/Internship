import React, { useState, useEffect } from "react";

const Designation = () => {
  const [formDataArray, setFormDataArray] = useState([]);
  const [selectedDeg, setSelectedDeg] = useState("");
  const [FormData, setFormData] = useState({
    designation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };

  const handleselect = (e) => {
    const { value } = e.target;
    setSelectedDeg(value);
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem("Empdata");
    const storedDesignationData = localStorage.getItem("designation");

    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData).map(
        (FormData, index) => ({
          ...FormData,
          originalIndex: index,
        })
      );
      setFormDataArray(parsedUserData);
    }

    if (storedDesignationData) {
      const parsedDesignationData = JSON.parse(storedDesignationData).map(
        (FormData, index) => ({
          ...FormData,
          originalIndex: index,
        })
      );
      setFormDataArray(parsedDesignationData);
    }
  }, []);

  const handledelete = (e) => {
    e.preventDefault();
  
    if (selectedDeg) {
    
      const updatedDataArray = formDataArray.filter(
        (formData) => formData.designation !== selectedDeg
      );
  
      setFormDataArray(updatedDataArray);
      localStorage.setItem("designation", JSON.stringify(updatedDataArray));
      
      const storedEmpData = JSON.parse(localStorage.getItem("Empdata")) || [];
  
      const updatedEmpDataArray = storedEmpData.filter(
        (formData) => formData.designation !== selectedDeg
      );
  
      localStorage.setItem("Empdata", JSON.stringify(updatedEmpDataArray));
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingFormData =
      JSON.parse(localStorage.getItem("designation")) || [];
    const updatedFormDataArray = [...existingFormData, FormData];

    localStorage.setItem("designation", JSON.stringify(updatedFormDataArray));
    setFormData({
      designation: "",
    });
    setFormDataArray(updatedFormDataArray);
  };

  return (
    <div className="flex justify-start items-start h-screen pl-10 pt-10">
      <div className="max-w-md mx-auto ">
        <h1 className="text-2xl font-bold mb-4">Add Designation</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-5 ">
          <div>
            <input
              type="text"
              name="designation"
              id="floating_email"
              placeholder="Designation"
              required
              onChange={handleChange}
              value={FormData.designation}
              className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="block w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            ADD
          </button>
        </form>
      </div>
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Remove Designation</h1>
        <form onSubmit={handledelete} className="max-w-md mx-auto space-y-5">
          <div>
            <select
              name="designation"
              id="designation"
              onChange={handleselect}
              className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select a designation</option>
              {formDataArray.map((formData, index) => (
                <option key={index} value={formData.designation}>
                  {formData.designation}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="block w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
          >
            Remove
          </button>
        </form>
      </div>
    </div>
  );
};

export default Designation;
