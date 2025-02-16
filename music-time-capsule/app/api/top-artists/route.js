import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; 

export async function GET(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(JSON.stringify({ error: "Not authenticated" }), { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const time_range = searchParams.get("time_range") || "medium_term";

  try {
    const response = await fetch(
      `https://api.spotify.com/v1/me/top/artists?time_range=${time_range}&limit=10`,
      {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return new Response(JSON.stringify({ error: errorData.error.message }), { status: response.status });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data.items), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch top artists" }), { status: 500 });
  }
}
