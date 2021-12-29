import Head from "next/head";
import React from "react";
import Header from "./Header";

const Layout = ({ title, description,backToHome, children }) => {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content="Portfolio" />
        <meta property="og:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative z-10 px-3 overflow-hidden min-h-screen bg-primary-light antialiased dark:bg-gray-900 text-gray-800 dark:text-white">
        <div className="w-full h-full">
            <Header backToHome={backToHome}/>
            {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
