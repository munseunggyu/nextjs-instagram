import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/route";
import SignIn from "@/components/SignIn";
import { redirect } from "next/navigation";

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

export default async function SignInPage({searchParams: { callbackUrl }}: Props) {
  const session = await getServerSession( authOptions);
  if (session) {
     redirect('/') ;
  }

  const providers = (await getProviders()) ?? {};
  
  return (
    <SignIn providers={providers} callbackUrl={callbackUrl} />
  )
}

