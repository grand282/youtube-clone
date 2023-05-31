import Image from 'next/image'
import React from 'react'
import youtubeIcon from '../../../public/icons/youtube.png'
import menu from '../../../public/icons/menu.png'
import Link from 'next/link'
import search from '../../../public/icons/search.png'
import video from '../../../public/icons/video-camera.png'
import notification from '../../../public/icons/bell.png'
import user from '../../../public/icons/user.png'
import Sidebar from './Sidebar'
import { useState} from 'react'
import { useRouter } from 'next/router';


function Navbar() {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    router.push({
      pathname: '/search',
      query: { query }
    });
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      router.push({
        pathname: '/search',
        query: { query }
      });
    }
  };
  return (
    <>
    <div className='flex flex-row justify-between items-center px-8 max-h-0.8 bg-white border-b border-gray-300 fixed top-0 w-full z-50'>

{/* Logo */}
<div className='flex items-center'>
  <button className='mr-4'>
    <Image width={25} height={25} src={menu} alt='menu' />
  </button>
  <Link legacyBehavior href='/'>
    <a className='flex items-center'>
      <Image width={50} height={50} src={youtubeIcon} alt='youtube' />
      <span className='hidden sm:block font-bold text-xl text-gray-800 ml-2'>YouTube</span>
    </a>
  </Link>
</div>

{/* Search bar */}
<div className='flex-grow ml-4'>
  <div className='relative'>
    <form onSubmit={handleSubmit}>
    <input
      className='w-full h-10 pl-4 pr-10 rounded-full text-sm focus:outline-none border-gray-300'
      type='text'
      placeholder='Search'
      value={query}
      onChange={e => setQuery(e.target.value)}
      onKeyPress={handleKeyPress}
    />
    <button
      className='absolute right-0 top-0 mt-3 mr-10'
      type='button'
      onClick={handleSubmit}
    >
      <Image width={15} height={15} src={search} alt='search' />
    </button>
    </form>
  </div>
</div>

{/* Right-side icons */}
<div className='flex items-center'>
  <button className='mr-4'>
    <Image width={25} height={25} src={video} alt='video camera' />
  </button>
  <button className='mr-4'>
    <Image width={25} height={25} src={notification} alt='notification' />
  </button>
  <button>
    <Image width={25} height={25} src={user} alt='user' />
  </button>
</div>

</div>

    <Sidebar/>
    </>
  )
}

export default Navbar