import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { getTopTracks } from "@/lib/spotify";

export async function GET(req) {
  const session = await getServerSession(authOptions);


  if (!session || !session.accessToken) {

    return Response.json({ error: "Unauthorized: No access token, Please Re-Login!" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const timeRange = searchParams.get("time_range") || "medium_term";



    const tracks = await getTopTracks(session.accessToken, timeRange);


    return Response.json(tracks);
  } catch (error) {
    console.error("Error fetching top tracks:", error);
    return Response.json({ error: "Failed to fetch tracks" }, { status: 500 });
  }
}