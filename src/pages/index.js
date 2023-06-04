import Image from 'next/image';
import Head from 'next/head';
import Card from './componets/Card';
import Navbar from './componets/Navbar';
import Sidebar from './componets/Sidebar';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

export default function Home() {
/*
  const [session, loading] = useSession();
  const router = useRouter();

  

  // Check if the user is not authenticated
  if (!session) {
    router.push('/login'); // Redirect to the authentication page
    return null; // Render nothing on this page
  }*/
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
