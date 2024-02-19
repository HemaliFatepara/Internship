import React, { useState, useEffect } from "react";

function Admin() {
  const [formDataArray, setFormDataArray] = useState([]);
  useEffect(() => {
    const storedData = localStorage.getItem("Empdata");
    if (storedData) {
      const parsedData = JSON.parse(storedData).map((formData, index) => ({
        ...formData,
        originalIndex: index,
      }));
      setFormDataArray(parsedData);
    }
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold my-4">Employees Table</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              First Name
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              last name
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Designation
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {formDataArray.map((formData) => (
            <tr key={formData.originalIndex}>
              <td className="px-6 py-4 whitespace-nowrap">{formData.first_name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{formData.last_name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{formData.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{formData.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap">{formData.designation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
