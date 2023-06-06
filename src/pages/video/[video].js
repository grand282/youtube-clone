import React from 'react'
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Navbar from '../componets/Navbar';
import Image from 'next/image';

const Video = () => {
  const router = useRouter();
  const { video } = router.query;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
 
  useEffect(() => {
    setLoading(true);
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${video}&type=video&key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [video,apiKey]);
 
  if (isLoading) return <p className='text-red-600 text-center text-2xl font-medium mt-40'>Loading...</p>;
  if (!data) return <p>No profile data</p>;
 console.log({data})
  return (
    <>
    <Navbar/>
    <div className='flex md:flex-row mt-20 ml-10 max-sm: flex-col'>
        <div className='flex-auto w-4/5'>
        <iframe
          width="100%"
          height="560"
          src={`https://www.youtube.com/embed/${video}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
          frameBorder="0"
        ></iframe>
        {data.items ? data.items.map((item) =>(
          <div key={item.id.videoId}>
            <h1 className='text-red-600'>{item.snippet.title}</h1>
            <h2 className='text-red-400'>{item.snippet.channelTitle}</h2>
            <p className='break-all'>{item.snippet.description}</p>
          </div>
        )): <h1>Loading..</h1>
        }
        </div>
        
        <div className='flex-auto ml-10 w-2/5'>{data.items ?
        data.items.map((item)=> {
          // Calculate the time difference in months or years
          const publishedAt = new Date(item.snippet.publishedAt);
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
            <div key={item.id.videoId}>
              <button onClick={()=>{
                router.push({
                  pathname: '/video/[video]',
                  query: { video: item.id.videoId}
                })
              }}>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <div className='flex'>
                  <div className='mt-10'>
                  <Image
                    className='rounded-lg'
                    src={item.snippet.thumbnails.medium.url}
                    width={250}
                    height={200}
                    alt={item.snippet.title}
                  />
                  </div>
                  <div className='text-xs text-cente mt-10 break-all'>
                  <h2 className='capitalize mb-2 text-black decoration-4 break-all'>{item.snippet.title}</h2>
                  <p className='break-words'>
                    From <span className='text-red-700 mr-3 break-words'>{item.snippet.channelTitle}</span> 
                    At <span className='text-blue-700 ml-3 break-words'>{publishedDate}</span>
                  </p>
                  </div>
                  </div>
                </motion.div>
              </button>
            </div>
          );
            })
          : <h1>Loading..</h1>}
          </div>
    </div>
    </>
  )
}

export default Video