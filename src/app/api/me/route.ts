// import { withSessionUser } from '@/util/session';
import { getUserByUsername } from '@/service/user';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

export async function GET() {
  const session = await getServerSession(authOptions)
  const user = session?.user
  
  if(!user) return new Response('Authentication Error', { status: 401 }) 
  // return withSessionUser(async (user) =>
  return getUserByUsername(user.username)
      .then((data) => {
        return NextResponse.json(data)
      })
  // );
}
