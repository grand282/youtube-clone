import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'

const Account = () => {
    const {data: session} = useSession()

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Account Details</h1>
      <div className="border border-gray-300 rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">YouTube</h1>
        <Image src={session.user.image} alt={session.user.name} width={100} height={100} />
        <h2 className="text-lg mb-4">You are now login as: <span>{session.user.name}</span> </h2>
        <h2 className="text-lg mb-4">At: <span>{session.user.email}</span> </h2>


        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
        onClick={()=> signOut({ callbackUrl: 'http://localhost:3000/' })}>signOut</button>
    </div>
</div>
  
  )
}

export default Account