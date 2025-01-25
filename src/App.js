import React, { useState } from 'react';
import './App.css';
import Tracklist from './components/Tracklist';
import Playlist from './components/Playlist';
import response from './components/ResponseDummy';

function App() {

  const [tracklistTracks, setTracklistTracks] = useState([]);
  const [playlistTracks, setPlaylostTracks] = useState([]);

  return (
    <div className="TrackAndPlaylistContainer">
      <Tracklist tracks={response.tracks.items}/>
      <div>

      </div>
      <Playlist tracks={response.tracks.items}/>
    </div>
  );
}

export default App;
