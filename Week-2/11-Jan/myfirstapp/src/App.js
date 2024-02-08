import React from 'react';
// import './App.css';
import ReactDOM from 'react-dom/client';

// function App() {
//   return (
//     <div className="App">
//           <h1>Virat Kohli</h1>
//           <img
//             src="https://kmb.kerala.gov.in/ckeditor/samples/fonts/wp-content/uploads/2023/12/virat-kohli-century-photo_75b40766d.jpg"
//             alt="Virat Kohli"
//           />

//           <p style={{ textAlign: 'justify' }}>
//             Virat Kohli, the dynamic cricketer hailing from Delhi, India, has
//             left an indelible mark on the world of cricket with his aggressive
//             and consistent batting prowess. Born on November 5, 1988, Kohli's
//             remarkable leadership skills have shone as the captain of the
//             Indian national cricket team. His extraordinary achievements include
//             holding records for the fastest milestones in ODI runs,
//             demonstrating his unmatched dedication to the sport. Beyond cricket,
//             Kohli is admired for his philanthropic endeavors and efforts to
//             promote a healthy lifestyle, making him not only a cricketing
//             sensation but also a role model for aspiring athletes around the
//             globe.
//           </p>
//           <br />
//           <button
//             onClick={() =>
//               window.open('https://en.wikipedia.org/wiki/Virat_Kohli', '_blank')
//             }
//           >
//             More Information
//           </button>
//         </div>
 
//   );
// }

function App(){

    return <h2>Hi, I am a Car!</h2>;
  
}

function Garage() {
  return (
    <div>
      <h1>Who lives in my Garage?</h1>
      <App />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

export default App;
