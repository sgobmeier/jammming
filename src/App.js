import React, { useState } from 'react';
import './App.css';
import Tracklist from './components/Tracklist';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import response from './components/ResponseDummy';
import getAccessToken from './private/getAccessToken';

function App() {

  const [tracklistTracks, setTracklistTracks] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);

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

  const submitPlaylist = (name) => {
    const uris = [];
    playlistTracks.forEach(track => {
      uris.push(track.uri);
    });
    setPlaylistTracks([]);
  }

  const searchSpotifyTrack = async (query) => {
    const accessTokenObj = await getAccessToken();
    const accessToken = accessTokenObj.access_token;
    const url = new URL('https://api.spotify.com/v1/search');
    url.search = new URLSearchParams({
        q: query,
        type: 'track'
    });

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        if (response.ok) {
          setTracklistTracks(data.tracks.items)
        } else {
          console.error('Spotify API error:', data);
          return null;
        }
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
  }

  return (
    <div className="main">
      <SearchBar searchSpotifyTrack={searchSpotifyTrack}/>
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
