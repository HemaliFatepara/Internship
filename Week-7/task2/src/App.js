import "./App.css";
import JSONDATA from "./MOCK_DATA.json";
import { useState } from "react";
function App() {
  const [searchitem, setSearchItem] = useState("");
  return (
    <div>
      <div id="search-bar" className="w-120 bg-white rounded-md shadow-lg z-10">
        <form className="flex items-center justify-center p-2">
          <input
            type="text"
            placeholder="Search here"
            className="w-full rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
            onChange={(event) => {
              setSearchItem(event.target.value);
            }}
          />
          <button
            type="submit"
            className="bg-gray-800 text-white rounded-md px-4 py-1 ml-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
          >
            Search
          </button>
        </form>
        {searchitem?.length > 0 && (
          <div>
            {JSONDATA.filter((val) => {
              if (searchitem === "") {
                return val;
              } else if (
                val.first_name
                  .toLocaleLowerCase()
                  .includes(searchitem.toLocaleLowerCase())
              ) {
                return val;
              }
            }).map((val, key) => {
              return (
                <div key={key}>
                  <p>{val.first_name}</p>
                </div>
              );
            })}
          </div>
        )}
        {
          console.log(searchitem)
        }
          <div className="empty">
            <p>No item found</p>
          </div>
      
      </div>
    </div>
  );
}

export default App;
