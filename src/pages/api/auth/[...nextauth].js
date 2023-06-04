import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  providers: [
    GoogleProvider({ 
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    }),
    
    // You can add more authentication providers heres
  ],
  secret: process.env.NEXTAUTH_SECRET,
  
});