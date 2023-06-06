import { useSession, signIn } from "next-auth/react"
import Image from "next/image"
import googleImg from '../../public/icons/google.png'

export default function Component() {
  const { data: session } = useSession()
  console.log(session)

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Registration</h1>
      <div className="border border-gray-300 rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">YouTube</h1>
        <h2 className="text-lg mb-4">You are not registered, please sign in: </h2>

      <button onClick={() => signIn("google", { callbackUrl: '/home' })} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
        <p>
        <Image src={googleImg} width={20} height={20} alt="Google Logo" className="mr-2 h-5 w-5" /> <span>Sign in with Google</span>
        </p>
      </button>
    </div>
</div>

  )
}
