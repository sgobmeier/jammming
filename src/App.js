import logo from './logo.svg';
import './App.css';
import Tracklist from './components/Tracklist';
import response from './components/ResponseDummy';

function App() {

  return (
    <div>
      <header>
        <Tracklist tracks={response.tracks.items}/>
      </header>
    </div>
  );
}

export default App;
