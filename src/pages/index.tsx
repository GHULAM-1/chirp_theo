import { type NextPage } from "next";
import { SignInButton, SignOutButton, UserButton, useUser } from "@clerk/nextjs";
import Head from "next/head";
import { ClerkProvider } from "@clerk/nextjs";




const Home: NextPage = () => {
  
const user = useUser();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!user.isSignedIn && <SignInButton></SignInButton>}
      {!!user.isSignedIn && <SignOutButton></SignOutButton>}
    </>
  );
};

export default Home;
