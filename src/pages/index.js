import Image from 'next/image';
import Head from 'next/head';
import Card from '../../componets/Card';
import Navbar from '../../componets/Navbar';
import Sidebar from '../../componets/Sidebar';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import Component from './login';

export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession()
  
  return (
    <>
    <Component>
    </Component>
    </>
    
  )
}
