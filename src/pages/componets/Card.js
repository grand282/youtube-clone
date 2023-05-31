import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react'
import Link from 'next/link';
import { getPopularVideos } from '<youtube clone>/lib/videos';
/*export const getServerSideProps = async () => {
  const popularVideos = await getPopularVideos();
  return { props: { popularVideos } };
};*/
const Card = () => {
  
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
    <div className='ml-60 mr-10 mt-20'>
    <div className='mt-2 grid grid-cols-3 gap-4 gap-x-8'>
    {videos.map(video => (
      <div key={video.id.videoId}>
        <Link href=''>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Image
            className='rounded-lg '
            src={video.snippet.thumbnails.medium.url}
            width={350}
            height={250}
            alt={video.snippet.title}
          />
          <h2 className='capitalize break-normal mb-2 text-black decoration-4'>{video.snippet.title}</h2>
          <p>From <span className='text-red-700 mr-3'>{video.snippet.channelTitle}</span> At <span className='text-blue-700 ml-3'>{video.snippet.publishedAt}</span></p>
        </motion.div>
        </Link>
      </div>
    ))}
  </div>
</div>
  )
}

export default Card