const apiKey = process.env.REACT_APP_SECRECT; //Insert your client ID here.
const clientId = apiKey; 
const redirectUri = 'http://localhost:3000'; // Add this to your accepted Spotify redirect URIs in your Spotify API.

let accessToken;

const Spotify = {
  async getAccessToken() {
    try {
      const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
      const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

      if (accessTokenMatch && expiresInMatch) {
        accessToken = accessTokenMatch[1];
        const expiresIn = Number(expiresInMatch[1]);
        const expirationTime = Date.now() + expiresIn * 1000;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('tokenExpiration', expirationTime);
        window.history.pushState('Access Token', null, '/');
      } else {
        const storedToken = localStorage.getItem('accessToken');
        const tokenExpiration = localStorage.getItem('tokenExpiration');

        if (!storedToken || Date.now() > tokenExpiration) {
          const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
          window.location = accessUrl;
        }

        accessToken = storedToken;
      }
    } catch (error) {
      throw new Error('Error while getting access token. Chyba při získávání přístupového tokenu.');
    }

    return accessToken;
  },

  async search(term) {
    try {
      const accessToken = await Spotify.getAccessToken();
      const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const jsonResponse = await response.json();

      if (!jsonResponse.tracks) {
        return [];
      }

      return jsonResponse.tracks.items.map((track) => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri,
      }));
    } catch (error) {
      throw new Error('Error while searching. Chyba při vyhledávání.');
    }
  },

  async savePlaylist(name, trackUris) {
    try {
      if (!name || !trackUris.length) {
        return;
      }

      const accessToken = await Spotify.getAccessToken();
      const headers = { Authorization: `Bearer ${accessToken}` };
      let userId;

      const userResponse = await fetch('https://api.spotify.com/v1/me', { headers });
      const userJsonResponse = await userResponse.json();

      userId = userJsonResponse.id;

      const createPlaylistResponse = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers,
        method: 'POST',
        body: JSON.stringify({ name: name }),
      });

      const createPlaylistJsonResponse = await createPlaylistResponse.json();
      const playlistId = createPlaylistJsonResponse.id;

      await fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
        headers,
        method: 'POST',
        body: JSON.stringify({ uris: trackUris }),
      });
    } catch (error) {
      throw new Error('Error while saving playlist. Chyba při ukládání playlistu.');
    }
  },
};

export default Spotify;