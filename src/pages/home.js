import React from 'react'
import Image from 'next/image';
import Head from 'next/head';
import Card from '../../componets/Card';
import Navbar from '../../componets/Navbar';
import Sidebar from '../../componets/Sidebar';

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