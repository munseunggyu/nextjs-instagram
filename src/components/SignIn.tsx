"use client"

import { ClientSafeProvider, signIn } from 'next-auth/react';
import ColorButton from './ui/ColorBtn';

type IProps = {
  providers: Record<string, ClientSafeProvider>,
  callbackUrl: string
}
export default function SignIn({providers, callbackUrl}: IProps) {
  return (
    <section className='flex justify-center mt-[30%]'>
      {Object.values(providers).map(({name, id}) => (
        <div key={name}>
          <ColorButton 
            key={id} 
            text={`Sigin In width ${name}`} 
            onClick={() => signIn(id, { callbackUrl })} 
            size="big"
          />
        </div>
      ))}
    </section>
  )
}
