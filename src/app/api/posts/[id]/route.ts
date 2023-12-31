import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import { getPost } from '@/service/post';

type Context = {
  params: {id:string};
}

export async function GET(request: NextResponse, context: Context) {
  const session = await getServerSession(authOptions)
  const user = session?.user
  
  if(!user) return new Response('Authentication Error', { status: 401 }) 

  return getPost(context.params.id)
      .then((data) => {
        return NextResponse.json(data)
      })
}
