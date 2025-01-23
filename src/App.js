import logo from './logo.svg';
import './App.css';
import Track from './components/Track';
import response from './components/ResponseDummy';

function App() {

  const returnRandomTrack = (response) => {
    const index = Math.floor(Math.random() * response.tracks.items.length);
    const item = response.tracks.items[index];
    console.log(item);
    return {
      songName: item.name,
      artist: item.artists[0].name,
      album: item.album.name,
      albumCover: item.album.images[2].url
    }
  }

  const song = returnRandomTrack(response);

  return (
    <div className="App">
      <header className="App-header">
        <Track songName={song.songName} artist={song.artist} album={song.album} albumCover={song.albumCover}/>
      </header>
    </div>
  );
}

export default App;
