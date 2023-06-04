import React from 'react'
import Head from 'next/head';
import Card from '../../youtube-clone/src/componets/Card';
import Navbar from '../../youtube-clone/src/componets/Navbar';
import Sidebar from '../../youtube-clone/src/componets/Sidebar';

const Home = () => {
  return (
    <main>
      <Head>
        <title>YouTube</title>
      </Head>
      <div>
      <Navbar/>
      <Sidebar />
      <section>
      <Card/>
      </section>
      </div>
    </main>
  )
}

export default Home