
import './App.css';
import Stopwatch from './Components/Stopwatch';
import TaskApp from './Components/TaskApp';
import VideoPlayer from './Components/VideoPlayer';

function App() {
  return (
    <div>
      <div>
        <TaskApp />
      </div><br /><br /><hr />
      <div>
        <Stopwatch />
      </div><br /><br /><hr />
      <div>
        <VideoPlayer />
      </div>
    </div>
  );
}

export default App;
