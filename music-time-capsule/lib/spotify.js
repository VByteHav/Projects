import axios from "axios";

const API_BASE_URL = "https://api.spotify.com/v1";
const USER_TOP_BASE_URL = "https://api.spotify.com/v1/me/top";

/**
 * Generic function to fetch top data from Spotify (tracks or artists)
 * @param {string} type - "tracks" or "artists"
 * @param {string} accessToken - User's Spotify access token
 * @param {string} timeRange - "short_term", "medium_term", "long_term"
 * @returns {Promise<Array>} - Array of top tracks/artists
 */
const getTopData = async (type, accessToken, timeRange = "medium_term") => {
  try {
    const response = await axios.get(
      `${USER_TOP_BASE_URL}/${type}?time_range=${timeRange}&limit=10`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    return response.data.items;
  } catch (error) {
    console.error(`Error fetching top ${type}:`, error.response?.data || error.message);
    return [];
  }
};

export const getTopTracks = (accessToken, timeRange) =>
  getTopData("tracks", accessToken, timeRange);

export const getTopArtists = (accessToken, timeRange) =>
  getTopData("artists", accessToken, timeRange);

