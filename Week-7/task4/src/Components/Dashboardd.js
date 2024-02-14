import React, { useState } from "react";

const Dashboard = () => {
  const [selectedFormData, setSelectedFormData] = useState(null);
  const data = JSON.parse(localStorage.getItem("formDataArray"));
  const [option, setOption] = useState([]);
  const [status, setStatus] = useState("Pending");

  const [isToggled, setIsToggled] = useState(false);
  const handlestatus = () => {
    setIsToggled(!isToggled);
    if (isToggled === false) {
      setStatus("Done");
    } else {
      setStatus("Pending");
    }
  };

  const openModal = (formData) => {
    setSelectedFormData(formData);
  };

  return (
    <div>
      <h1>Appoinments</h1>
      <select onChange={(event) => setOption(event.target.value)}>
        <option value="">All doctors</option>
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
      <div>
        <table>
          <thead>
            <tr>
              <th>Name </th>
              <th>Date </th>
              <th>Time </th>
              <th>Status</th>
              <th>Update Status</th>
              <th>View </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((formDataArray, index) => {
                if (formDataArray.service === option || !option) {
                  return (
                    <tr key={index}>
                      <td>{formDataArray.name}</td>
                      <td>{formDataArray.date}</td>
                      <td>{formDataArray.time}</td>
                      <td>{status}</td>
                      <td>
                        <button onClick={handlestatus}>
                          {isToggled ? " Not Completed" : "Completed"}
                        </button>
                      </td>
                      <td>
                        <button onClick={() => openModal(data)}>view</button>
                      </td>
                    </tr>
                  );
                }
                // eslint-disable-next-line
                {
                  /* else if (option === "alldoc") {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.date}</td>
                      <td>{item.time}</td>
                      <td>{status}</td>
                      <td>
                        <button onClick={handlestatus}>
                          {isToggled ? " Not Completed" : "Completed"}
                        </button>
                      </td>
                      <td>
                        <button onClick={() => openModal(data)}>view</button>
                      </td>
                    </tr>
                  );
                } */
                }
              })}
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
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <span
                    className="close absolute top-0 right-0 cursor-pointer pt-4 pr-4"
                    onClick={() => setSelectedFormData(null)}
                  >
                    &times;
                  </span>
                  <h2 className="text-lg leading-6 font-medium text-gray-900">
                    Appointment Details
                  </h2>
                  {data &&
                    data.map((formDataArray, index) => {
                      if (formDataArray.service === option) {
                        return (
                          <ul>
                            <li>Patient name: {formDataArray.name}</li>
                            <li>Email: {formDataArray.email}</li>
                            <li>Date: {formDataArray.date}</li>
                            <li>Time: {formDataArray.time}</li>
                            <li>Phone: {formDataArray.phone}</li>
                            <li>Doctor's name: {formDataArray.service}</li>
                            <li>Purpose of visit: {formDataArray.msg}</li>
                            <li>Status:{status} </li>
                          </ul>
                        );
                      }
                    })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
