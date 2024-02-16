import React, { useState, useEffect } from "react";

function DataTable() {
  const [formDataArray, setFormDataArray] = useState([]);
  const [selectedFormData, setSelectedFormData] = useState(null);
  const currentuser = localStorage.getItem("currentuser");

  useEffect(() => {
    const storedData = localStorage.getItem("formDataArray");
    if (storedData) {
      const parsedData = JSON.parse(storedData).map((formData, index) => ({
        ...formData,
        originalIndex: index,
      }));
      setFormDataArray(parsedData);
    }
  }, []);

  const openModal = (formData) => {
    setSelectedFormData(formData);
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold my-4">Appointments Table</h2>
      <h2 className="text-xl  my-4">User ID: {currentuser}</h2>
      <div className="mb-4"></div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Doctor Name
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Time
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              View
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {formDataArray
            .filter(
              (formData) => !currentuser || formData.Email === currentuser
            )
            .map((formData) => (
              <tr key={formData.originalIndex}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {formData.Doctorname}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{formData.Date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{formData.Time}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {formData.done ? (
                    <span className="text-green-600">Done</span>
                  ) : (
                    <span className="text-yellow-600">Pending</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => openModal(formData)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {selectedFormData && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
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
              <div className="bg-white px-8 pt-6 pb-8 sm:p-10">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Appointment Details
                  </h2>
                  <span
                    className="close text-gray-600 cursor-pointer text-3xl hover:text-gray-800"
                    onClick={() => setSelectedFormData(null)}
                  >
                    &times;
                  </span>
                </div>
                <ul>
                  <li className="text-lg mb-4">
                    <span className="font-bold mr-2">Name:</span>{" "}
                    {selectedFormData.Name}
                  </li>
                  <li className="text-lg mb-4">
                    <span className="font-bold mr-2">Email:</span>{" "}
                    {selectedFormData.Email}
                  </li>
                  <li className="text-lg mb-4">
                    <span className="font-bold mr-2">Date:</span>{" "}
                    {selectedFormData.Date}
                  </li>
                  <li className="text-lg mb-4">
                    <span className="font-bold mr-2">Time:</span>{" "}
                    {selectedFormData.Time}
                  </li>
                  <li className="text-lg mb-4">
                    <span className="font-bold mr-2">Phone:</span>{" "}
                    {selectedFormData.Phone}
                  </li>
                  <li className="text-lg mb-4">
                    <span className="font-bold mr-2">Doctor's Name:</span>{" "}
                    {selectedFormData.Doctorname}
                  </li>
                  <li className="text-lg mb-4">
                    <span className="font-bold mr-2">Purpose of visit:</span>{" "}
                    {selectedFormData.Purpose}
                  </li>
                  <li className="text-lg">
                    <span className="font-bold mr-2">Status:</span>{" "}
                    {selectedFormData.done ? (
                      <span className="text-green-600">Done</span>
                    ) : (
                      <span className="text-red-600">Pending</span>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DataTable;
