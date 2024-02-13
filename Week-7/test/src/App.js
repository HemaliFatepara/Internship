import "./App.css";
import { useState , useEffect } from "react";

function App() {
  
  const [errors, setErrors] = useState({});
 
  const [formdata, setFormData] = useState({
    name: "",
    
  });
  const [item, setItem] = useState(() => {
    const savedState = localStorage.getItem("data"); 
    const item = JSON.parse(savedState); 
    return item || [];
  });
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };
  const updateItem = (event) => {
    event.preventDefault();
    const newItem = [...item, { name: formdata.name }]; 
    setItem(newItem);
    localStorage.setItem("data", JSON.stringify(newItem)); 
  };
  
 
useEffect(() => {
  const savedFormData = localStorage.getItem("formData");
  if (savedFormData) {
    setFormData(JSON.parse(savedFormData));
  }
}, []);

  
  function handleSubmit(e) {
    
  
    const isValid = validate();
    if (isValid) {
      updateItem();
      console.log(formdata.name);
    }
  }
  
  
  
  
  <button
    className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
    type="submit"
  >
    Book Appointment
  </button>
  
  

  const validateField = (fieldName, value) => {
    const name_regx = /^[a-zA-Z.\-_]{1,30}$/;
    let error = "";

    if (fieldName === "name") {
      if (!value.trim()) error = "Name cannot be empty";
      else if (!name_regx.test(value))
        error = "Only alphabets, dots, hyphens, and underscores are allowed";
    } 
    return error;
  };

  const validate = () => {
    let isValid = true;
    for (const key in formdata) {
      const fieldError = validateField(key, formdata[key]);
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
              value={formdata.name}
            />
            {errors.name && (
              <p className="text-sm text-red-800">{errors.name}</p>
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
    </div>
  );
}

export default App;
