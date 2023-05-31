import Image from 'next/image';
import Head from 'next/head';
import Card from './componets/Card';
import Navbar from './componets/Navbar';
import Sidebar from './componets/Sidebar';

export default function Home() {
  return (
    <main>
      <Head>
        <title>YouTube</title>
      </Head>
      <div>
      <Navbar/>
      <section>
      <Card/>
      </section>
      </div>

      
    </main>
  )
}
