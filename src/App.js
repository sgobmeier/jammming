import React, { useState, useEffect } from 'react';
import './App.css';
import Tracklist from './components/Tracklist';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import { searchSpotifyTrack, createSpotifyPlaylist } from './spotifyCalls';
import getCodeVerifier from './private/getCodeVerifier';
import getToken from './private/getToken';

function App() {

  const [tracklistTracks, setTracklistTracks] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    if (!window.location.search.includes("code=")) {
      getCodeVerifier();
    } else if (window.location.search.includes("code=")) {
      const waitForToken = async () => {
        await getToken();
        setAccessToken(localStorage.getItem('access_token'));
      }
      waitForToken();
    }
  }, [accessToken]);

  const addToTracklist = async(input) => {
    if (input) {
      const data = await searchSpotifyTrack(input, accessToken);
      setTracklistTracks(data.tracks.items);
    } else {
      setTracklistTracks([]);
    }
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
    if (name && playlistTracks) {
      createSpotifyPlaylist(name, playlistTracks, accessToken);
      setPlaylistTracks([]);
    } else {alert("name or tracks missing")}
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
