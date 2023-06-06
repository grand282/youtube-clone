import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

const Card = () => {
  const router = useRouter();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    // Use the YouTube API to search for videos
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        setVideos(data.items);
      })
      .catch(error => {
        console.error(error);
      })
     }, []);
     console.log({videos})
  
  return (
    <div className='sm:ml-60 xs:ml-0 mt-20'>
    <div className='mt-2 grid md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-4 gap-x-8'>
    {videos &&
    videos.map((video) => {
          // Calculate the time difference in months or years
          const publishedAt = new Date(video.snippet.publishedAt);
          const currentDate = new Date();
          const diffInMonths = currentDate.getMonth() - publishedAt.getMonth();
          const diffInYears = currentDate.getFullYear() - publishedAt.getFullYear();

          // Format the published date based on the time difference
          let publishedDate = '';
          if (diffInYears > 0) {
            publishedDate = `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
          } else if (diffInMonths > 0) {
            publishedDate = `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
          } else {
            publishedDate = 'Recently published';
          }

          return (
            <div key={video.id}>
              <button onClick={()=>{
                router.push({
                  pathname: '/video/[video]',
                  query: { video: video.id}
                })
              }}>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Image
                    className='rounded-lg max-sm: w-screen'
                    src={video.snippet.thumbnails.medium.url}
                    width={350}
                    height={250}
                    alt={video.snippet.title}
                  />
                  <h2 className='capitalize break-normal mb-2 text-black decoration-4'>{video.snippet.title}</h2>
                  <p>
                    From <span className='text-red-700 mr-3'>{video.snippet.channelTitle}</span> 
                    At <span className='text-blue-700 ml-3'>{publishedDate}</span>
                  </p>
                </motion.div>
              </button>
            </div>
          );
        })}
  </div>
</div>
  )
}

export default Card