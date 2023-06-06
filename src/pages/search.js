import React, {useState,useEffect} from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import { useRouter } from 'next/router';
import Navbar from './componets/Navbar';



const SearchResults = () => {
  const [videos, setVideos] = useState([]);
  const router = useRouter();
  const { query } = router.query;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  
  useEffect(() => {
      fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${apiKey}`)
        .then((res) => res.json())
        .then((data) => setVideos(data.items));
  }, [query]);
  console.log({videos})
    return (
      <>
      <div className='mb-20'>
      <Navbar/>
      </div>
      <div className='ml-20 mr-10'>
      <p className='mb-10'>Returned search results for: <span className='text-red-600'>{query}</span></p>

      <div className='mt-2 grid md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-4 gap-x-8'>

      {videos && videos.map((video) => {
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
            <div key={video.id.videoId}>
              <button onClick={()=>{
                router.push({
                  pathname: '/video/[video]',
                  query: { video: video.id.videoId}
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
  </>
    )
  }
export default SearchResults