import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";

export default function Home() {
   return (
    <Layout title={"İbrahim Taşkın"} description={"portfolio"} backToHome={false}>
      <div className="flex items-center flex-col justify-center">

      <Link href={'/about'}>
        About
      </Link>
      <Link href={'/projects'}>
        Projects
      </Link>
      <Link href={'/blog'}>
        Blog
      </Link>
      </div>
    </Layout>
  );
}
