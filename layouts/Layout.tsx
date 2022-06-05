import React, {ReactNode} from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";

interface Props {
  children?: ReactNode | ReactNode[];
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <div className="bg-dark-back px-20">
      <Head>
        <title>Seagull</title>
        <meta name="description"
              content="Send custom transactions to Solana"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className="h-screen">
        <Navbar/>
        {children}

        <img
          className="w-3/5 z-0 fixed -bottom-1/2 -left-1/4"
          src="/images/green-blob.png"
        />
        <img
          className="w-1/4 z-0 fixed top-1/5 right-0"
          src="/images/blue-blob.png"
        />
      </main>
    </div>
  );
};

export default Layout;
