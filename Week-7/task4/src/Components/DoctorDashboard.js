import React, { useState, useEffect } from 'react';

function DataTable() {
  const [formDataArray, setFormDataArray] = useState([]);
  const [selectedFormData, setSelectedFormData] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState('');

  useEffect(() => {
    const storedData = localStorage.getItem('formDataArray');
    if (storedData) {
      setFormDataArray(JSON.parse(storedData));
    }
  }, []);

  const openModal = (formData) => {
    setSelectedFormData(formData);
  };

  const handleDoctorSelect = (doctorName) => {
    setSelectedDoctor(doctorName);
  };

  const toggleStatus = (index) => {
    const updatedFormDataArray = [...formDataArray];
    updatedFormDataArray[index].done = !updatedFormDataArray[index].done;
    setFormDataArray(updatedFormDataArray);
    localStorage.setItem('formDataArray', JSON.stringify(updatedFormDataArray));
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold my-4">Appointments Table</h2>
      <div className="mb-4">
        <label htmlFor="doctor" className="block text-gray-700 font-bold mb-2">Filter by Doctor:</label>
        <select
          id="doctor"
          name="doctor"
          value={selectedDoctor}
          onChange={(e) => handleDoctorSelect(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">All Doctors</option>
          <option value="Dr. SachSanjay deva">Dr. SachSanjay deva</option>
          <option value="Dr. Ashish Sabharwal">Dr. Ashish Sabharwal</option>
          <option value="Dr. Surbhi Anand">Dr. Surbhi Anand</option>
          {/* Add more options for other doctors */}
        </select>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Appointments</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">View</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {formDataArray
            .filter(formData => !selectedDoctor || formData.service === selectedDoctor)
            .map((formData, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{formData.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{formData.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {formData.done ? <span className="text-green-600">Done</span> : <span className="text-yellow-600">Pending</span>}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick={() => toggleStatus(index)} className="text-blue-600 hover:text-blue-900">
                    {formData.done ? "Mark as Pending" : "Mark as Done"}
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick={() => openModal(formData)} className="text-indigo-600 hover:text-indigo-900">View</button>
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
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <span className="close absolute top-0 right-0 cursor-pointer pt-4 pr-4" onClick={() => setSelectedFormData(null)}>&times;</span>
                <h2 className="text-lg leading-6 font-medium text-gray-900">Appointment Details</h2>
                {Object.entries(selectedFormData).map(([key, value]) => (
                  <p key={key} className="mt-1 max-w-2xl text-sm text-gray-500">
                    {key === "done" ? `Status: ${value ? 'Done' : 'Pending'}` : `${key}: ${value}`}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DataTable;
