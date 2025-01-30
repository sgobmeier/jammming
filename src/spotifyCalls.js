import getAccessToken from './private/getAccessToken';

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
            return data;
        } else {
            console.error('Spotify API error:', data);
            return null;
        }
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
}

const getSpotifyUserProfile = async(accessToken) => {
    try {
        console.log('Access-Token: ' + accessToken);
        const response = await fetch('https://api.spotify.com/v1/me', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json()

        if (response.ok) {
            console.log(data);
            return data;
        } else {
            console.error('Spotify API error:', data);
        }

    } catch (error) {
        console.error('Fetch error:', error);
    }
}

const createSpotifyPlaylist = async (name, playlistTracks) => {
    const accessTokenObj = await getAccessToken();
    const accessToken = accessTokenObj.access_token;
    const userProfile = await getSpotifyUserProfile(accessToken);

    const uris = [];
    playlistTracks.forEach(track => {
        uris.push(track.uri);
    });

    try {
        const response = await fetch(`https://api.spotify.com/v1/users/${userProfile}/playlists`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': name,
                'description': 'New playlist description',
                'public': false
            })
        });

        const data = await response.json();

        if (response.ok) {
            console.log(data);
        } else {
            console.error('Spotify API error:', data);
            return null;
        }

    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
}

export { searchSpotifyTrack, createSpotifyPlaylist };