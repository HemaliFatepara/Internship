import './App.css';
import TeaGathering from './Components/TeaGathering';
import Alert from './Components/Alert';
import Toolbar from './Components/Toolbar';
import Gallery from './Components/Gallery';
import From from './Components/From';
import FeedbackForm from './Components/FeedbackForm';
import MovingDot from './Components/MovingDot';

function App() {
  return (
    <div >
      <div>
        <TeaGathering />
      </div>
      <div>
        <Alert />
      </div><br />
      <br />
      <div>
        <Toolbar />
      </div><br />
      <div>
        <Gallery />
      </div><br /><br />
      <div>
        <From />
      </div><br /><br />
      <div>
        <FeedbackForm />
      </div>
      <div>
        <MovingDot />
      </div>
    </div>
  );
}

export default App;
