import './App.css';
import { analytics } from './Firebase';
import { logEvent } from 'firebase/analytics';

function App() {
  logEvent(analytics, 'Starting app')
  const onClick = () =>{
    console.log("Hola");
  }

  return (
    <div className="App">
      <button onClick={onClick}>
      Preguntar
      </button>
    </div>
  );
}

export default App;
