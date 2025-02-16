import React from 'react'
import Home from '@/components/Home'
const page = () => {
  return (
    <div>
      <head>
        <meta property="og:title" content="Music Time Capsule - See your Music Journey" />
        <meta property="og:description" content="Music Tiem capsule allows you to see your Last 4 Weeks, Last 6 Months and All Time music experience. It's a personal music tracker that helps you  stay connected with your favorite artists and tracks." />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:url" content="https://music-time-capsule.vercel.app/" />
      </head>
      <Home />
    </div>
  )
}

export default page
export const metadata = {
  title: "Music Time Capsule - See your Music Journey",
  description: "Music Tiem capsule allows you to see your Last 4 Weeks, Last 6 Months and All Time music experience. It's a personal music tracker that helps you  stay connected with your favorite artists and tracks.",

}