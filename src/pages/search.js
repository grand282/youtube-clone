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
      <div className='ml-60 mr-10'>
      <div className='mt-2 grid grid-cols-3 gap-4 gap-x-8'>
      {videos.map((result) => (
            <div key={result.id.videoId}>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Image
                  className='rounded-lg '
                  src={result.snippet.thumbnails.medium.url}
                  width={350}
                  height={250}
                  alt={result.snippet.title}
                />
                <h2 className='capitalize break-normal'>
                  {result.snippet.title}
                </h2>
              </motion.div>
            </div>
          ))}
    </div>
  </div>
  </>
    )
  }
export default SearchResults