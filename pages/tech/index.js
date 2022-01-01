import React from "react";
import Layout from "../../components/Layout";
import UsingTech from "../../components/UsingTech";
import { GetAllTechs } from "../../functions/getAllTechs";

const Tech = ({usingTeches}) => {
  return (
    <Layout title={"Tech Stack"} description={"tech stack"} backToHome={true}>
      <main className="w-full h-full">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
          <div className="flex flex-col items-center justify-center md:items-start">
            {/* Technologies I use */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 md:grid-cols-5 pt-5">
              {usingTeches?.map((tech) => (
                <UsingTech key={tech.id} tech={tech} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const usingTeches = await GetAllTechs();
  return {
    props: {
      usingTeches,
    },
  };
};

export default Tech;
