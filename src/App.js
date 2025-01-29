import React, { useState } from 'react';
import './App.css';
import Tracklist from './components/Tracklist';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import response from './components/ResponseDummy';
import getAccessToken from './private/getAccessToken';

function App() {

  const [tracklistTracks, setTracklistTracks] = useState(response.tracks.items);
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addToPlaylist = (uri) => {
    const track = tracklistTracks.find((track) => track.uri === uri);
    if (!playlistTracks.includes(track)) {
      setPlaylistTracks([track, ...playlistTracks]);
    }
  }

  const removeFromPlaylist = (uri) => {
    const track = tracklistTracks.find((track) => track.uri === uri);
    setPlaylistTracks(playlistTracks.filter((track) => track.uri != uri));
  }

  const submitPlaylist = (name) => {
    const uris = [];
    playlistTracks.forEach(track => {
      uris.push(track.uri);
    });
    setPlaylistTracks([]);
  }

  return (
    <div className="main">
      <SearchBar />
      <div className="TrackAndPlaylistContainer">
        <Tracklist tracks={tracklistTracks} addToPlaylist={addToPlaylist}/>
        <div>

        </div>
        <Playlist tracks={playlistTracks} removeFromPlaylist={removeFromPlaylist} submitPlaylist={submitPlaylist}/>
      </div>
    </div>
  );
}

export default App;
