import React, { useState } from 'react';
import './App.css';
import Tracklist from './components/Tracklist';
import Playlist from './components/Playlist';
import response from './components/ResponseDummy';

function App() {

  const [tracklistTracks, setTracklistTracks] = useState(response.tracks.items);
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addToPlaylist = (id) => {
    const track = tracklistTracks.find((track) => track.id === id);
    if (!playlistTracks.includes(track)) {
      setPlaylistTracks([track, ...playlistTracks]);
    }
  }

  const removeFromPlaylist = (id) => {
    const track = tracklistTracks.find((track) => track.id === id);
    setPlaylistTracks(playlistTracks.filter((track) => track.id != id));
  }

  return (
    <div className="TrackAndPlaylistContainer">
      <Tracklist tracks={tracklistTracks} addToPlaylist={addToPlaylist}/>
      <div>

      </div>
      <Playlist tracks={playlistTracks} removeFromPlaylist={removeFromPlaylist}/>
    </div>
  );
}

export default App;
