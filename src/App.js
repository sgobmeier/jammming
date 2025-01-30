import React, { useState } from 'react';
import './App.css';
import Tracklist from './components/Tracklist';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import { searchSpotifyTrack, createSpotifyPlaylist } from './spotifyCalls'

function App() {

  const [tracklistTracks, setTracklistTracks] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addToTracklist = async(input) => {
    const data = await searchSpotifyTrack(input);
    setTracklistTracks(data.tracks.items);
  }

  const addToPlaylist = (uri) => {
    const track = tracklistTracks.find((track) => track.uri == uri);
    if (!playlistTracks.includes(track)) {
      setPlaylistTracks([track, ...playlistTracks]);
    }
  }

  const removeFromPlaylist = (uri) => {
    const track = playlistTracks.find((track) => track.uri === uri);
    setPlaylistTracks(playlistTracks.filter((track) => track.uri != uri));
  }

  const submitPlaylist = async(name) => {
    createSpotifyPlaylist(name, playlistTracks);
    setPlaylistTracks([]);
  }

  return (
    <div className="main">
      <SearchBar searchSpotifyTrack={addToTracklist}/>
      <div className="TrackAndPlaylistContainer">
        <Tracklist tracks={tracklistTracks} addToPlaylist={addToPlaylist}/>
        <div>

        </div>
        <Playlist tracks={playlistTracks} removeFromPlaylist={removeFromPlaylist} createSpotifyPlaylist={submitPlaylist}/>
      </div>
    </div>
  );
}

export default App;
