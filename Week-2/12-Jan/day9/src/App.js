import './App.css';
import Button from './components/Button';
import Cars from './components/Cars';
import Form from './components/Form';
import './my-sass.scss'
import Color from './components/Color';
import Time from './components/Time';
import Btn from './components/Btn';


function App() {
    const myStyle = {
        color:"white",
        backgroundColor:"DodgerBlue",
        padding:"10px",
        fontFamily:"Sans-Serif"
      }
    return (
    <div>   
        <div>
            <Btn />
        </div>
        <div>
            <Time />
        </div>
        <div>
          <h1 style={{color:"red"}}>React Button Example</h1>
          <Button />
        </div>
        <div>
            <h1 style={{backgroundColor:"lightblue"}}>Welcome to my garage..</h1>
            <Cars />
        </div>
        <div>
            <h2>Hello I am sass css tester!!</h2>
        </div>
        <div>
            <Color />
        </div>
        <div>
            <h1 style={myStyle}>Enter Your Details</h1>
            <Form />
        </div>
    </div>
      );
}

export default App;
