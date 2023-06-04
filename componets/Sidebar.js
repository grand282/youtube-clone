import Image from 'next/image';
import React from 'react';
import home from '../public/icons/home.png';
import subscribe from '../public/icons/subscribe.png';
import video from '../public/icons/video.png';
import library from '../public/icons/library.png';
import clock from '../public/icons/clock.png';
import liked from '../public/icons/like.png';
import music from '../public/icons/music.png';
import news from '../public/icons/newspaper.png';
import sports from '../public/icons/running.png';
import gaming from '../public/icons/controller.png';
import Trending from '../public/icons/mode_heat.png';
import live from '../public/icons/stream.png';
import learning from '../public/icons/school.png';
import styler from '../public/icons/styler.png';
import settings from '../public/icons/settings.png';
import child from '../public/icons/child_care.png';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="h-screen fixed top-12 left-0 z-50 overflow-y-auto overflow-visible bg-white shadow-md w-40 hidden sm:block md:block">
      <div class="divide-y divide-solid flex flex-col w-full">
        <div className='w-full mt-5'>
            <Link href='/'>
            <p className='flex mt-4'>
                <span className='ml-4'><Image src={home} width={20} height={20} alt="home" /></span>
            <span className='ml-4'>
                Home
            </span>
            </p>
            </Link>
            <Link href='#'>
            <p className='flex mt-4'>
                <span className='ml-4'><Image src={video} width={20} height={20} alt="shorts" /></span>
            <span className='ml-4'>
                Shorts
            </span>
            </p>
            </Link>
            <Link href='#'>
            <p className='flex mt-4'>
                <span className='ml-4'><Image src={subscribe} width={20} height={20} alt="subscribe" /></span>
            <span className='ml-4'>
                Subscribe
            </span>
            </p>
            </Link>
        </div>
        <div className='mt-8'>
          <Link href='#'>
          <p className='flex mt-4'>
                <span className='ml-4'><Image src={library} width={20} height={20} alt="library" /></span>
            <span className='ml-4'>
                library
            </span>
          </p>
          </Link>
          <Link href='#'>
          <p className='flex mt-4'>
                <span className='ml-4'><Image src={home} width={20} height={20} alt="history" /></span>
            <span className='ml-4'>
                History
            </span>
          </p>
          </Link>
          <Link href='#'>
          <p className='flex mt-4'>
                <span className='ml-4'><Image src={clock} width={20} height={20} alt="watch later" /></span>
            <span className='ml-4'>
                Watch later
            </span>
          </p>
          </Link>
          <Link href='#'>
          <p className='flex mt-4'>
                <span className='ml-4'><Image src={liked} width={20} height={20} alt="liked" /></span>
            <span className='ml-4'>
                Liked videos
            </span>
          </p>
          </Link>
        </div>
        <div className='mt-8'>
            <h4 className='mt-3 ml-4 text-red-700'>Subscriptions</h4>
            <Link href='#'>
            <p className='flex mt-4'>
                <span className='ml-4'><Image src={music} width={20} height={20} alt="music" /></span>
            <span className='ml-4'>
                Music
            </span>
          </p>
          </Link>
          <Link href='#'>
          <p className='flex mt-4'>
                <span className='ml-4'><Image src={sports} width={20} height={20} alt="sports" /></span>
            <span className='ml-4'>
                Sports
            </span>
          </p>
          </Link>
          <Link href='#'>
          <p className='flex mt-4'>
                <span className='ml-4'><Image src={gaming} width={20} height={20} alt="gaming" /></span>
            <span className='ml-4'>
                Gaming
            </span>
          </p>
          </Link>
          <p className='flex mt-4'>
                <span className='ml-4'><Image src={news} width={20} height={20} alt="news" /></span>
            <span className='ml-4'>
                News
            </span>
          </p>
        </div>
        <div className='mt-4'>
          <h4 className='mt-3 ml-4 text-red-700'>Explore</h4>
          <p className='flex mt-4'>
                <span className='ml-4'><Image src={Trending} width={20} height={20} alt="trending" /></span>
            <span className='ml-4'>
                Trending
            </span>
          </p>
          <p className='flex mt-4'>
                <span className='ml-4'><Image src={music} width={20} height={20} alt="music" /></span>
            <span className='ml-4'>
                Music
            </span>
          </p>
          <p className='flex mt-4'>
                <span className='ml-4'><Image src={live} width={20} height={20} alt="streams" /></span>
            <span className='ml-4'>
                Live
            </span>
          </p>
          <p className='flex mt-4'>
                <span className='ml-4'><Image src={gaming} width={20} height={20} alt="gaming" /></span>
            <span className='ml-4'>
                Gaming
            </span>
          </p>
          <p className='flex mt-4'>
                <span className='ml-4'><Image src={news} width={20} height={20} alt="news" /></span>
            <span className='ml-4'>
                News
            </span>
          </p>
          <p className='flex mt-4'>
                <span className='ml-4'><Image src={sports} width={20} height={20} alt="running" /></span>
            <span className='ml-4'>
                Sports
            </span>
          </p>
          <p className='flex mt-4'>
                <span className='ml-4'><Image src={learning} width={20} height={20} alt="school" /></span>
            <span className='ml-4'>
                Learning
            </span>
          </p>
          <p className='flex mt-4'>
                <span className='ml-4'><Image src={styler} width={20} height={20} alt="styler" /></span>
            <span className='ml-4'>
                Fashion & Beauty
            </span>
          </p>
        </div>
        <div className='mt-4'>
          <h4 className='mt-3 ml-4 text-red-700'>More from YouTube</h4>
          <p className='flex mt-4'>
                <span className='ml-4'><Image src={child} width={20} height={20} alt="kids" /></span>
            <span className='ml-4'>
                YouTube kids
            </span>
          </p>
        </div>
         <div className='mt-4'>
          <p className='flex mt-4'>
                <span className='ml-4'><Image src={settings} width={20} height={20} alt="settings" /></span>
            <span className='ml-4'>
                Settings
            </span>
          </p>
          <p className='flex mt-4'>
                <span className='ml-4'><Image src={settings} width={20} height={20} alt="settings" /></span>
            <span className='ml-4'>
                Report history
            </span>
          </p>
          <p className='flex mt-4'>
                <span className='ml-4'><Image src={settings} width={20} height={20} alt="settings" /></span>
            <span className='ml-4'>
                Help
            </span>
          </p>
          <p className='flex mt-4'>
                <span className='ml-4'><Image src={settings} width={20} height={20} alt="settings" /></span>
            <span className='ml-4'>
                Send feedback
            </span>
          </p>
        </div>
      </div>
      <div></div>
      <footer className='mt-4'>
        <p className='ml-2'>About Press Copyright Contact us Creators Advertise Developers
        TermsPrivacyPolicy & SafetyHow YouTube worksTest new 
        </p>
      </footer>
    </div>
  )
}

export default Sidebar