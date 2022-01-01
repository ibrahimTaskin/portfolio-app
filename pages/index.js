import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import { mainlinks } from "../components/links/links";

export default function Home() {
  return (
    <Layout
      title={"İbrahim Taşkın"}
      description={"portfolio"}
      backToHome={false}
    >
      <section className="h-full max-w-5xl pt-4 mx-auto mb-16 md:pt-16 ">
        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
          {mainlinks.map((link) => (
            <Link href={link.url}>
              <div className="w-full h-full bg-white rounded-lg cursor-pointer">
                <div className="flex flex-col items-center space-y-4">
                  <img
                    src={link.image}
                    alt={link.name}
                    className="object-cover w-full rounded-lg md:h-screen max-h-64 "
                  />
                  <h2 className="text-2xl font-semibold uppercase text-gray-900 dark:text-gray-900">
                    {link.name}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
