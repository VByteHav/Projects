import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import axios from "axios";

// Spotify Token Refresh Function
async function refreshAccessToken(token) {
  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: token.refreshToken,
        client_id: process.env.SPOTIFY_CLIENT_ID,
        client_secret: process.env.SPOTIFY_CLIENT_SECRET,
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    return {
      ...token,
      accessToken: response.data.access_token,
      expiresAt: Date.now() + account.expires_at * 1000,
      // Expires in 1 hour
      refreshToken: response.data.refresh_token ?? token.refreshToken, // Keep old refresh token if none returned
    };
  } catch (error) {
    console.error("Error refreshing Spotify token:", error.response?.data || error.message);
    return { ...token, error: "RefreshTokenError" }; 
  }
}

export const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      authorization: {
        url: "https://accounts.spotify.com/authorize",
        params: {
          scope: [
            "user-read-private",
            "user-read-email",
            "user-top-read",
            "user-read-recently-played",
          ].join(" "),
          show_dialog: true, // Always ask user to pick account
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // If user is logging in, store the token
      if (account) {
        return {
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          expiresAt: Date.now() + account.expires_at * 1000,
        };
      }

      // If token is expired, refresh it
      if (Date.now() > token.expiresAt) {
        return await refreshAccessToken(token);
      }

      return token;
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.error = token.error || null; // Pass any errors to frontend
      return session;
    },

    async redirect({ url, baseUrl }) {
      return "/dashboard"; // Redirect to dashboard after login
    },
  },

  pages: {
    signIn: "/login", // Custom login page
    error: "/auth/error", // Custom error page
  },

  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };