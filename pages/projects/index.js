import React from "react";
import Layout from "../../components/Layout";
import ProjectCard from "../../components/projectCard";
import { getAllProjects } from "../../functions/getAllProjects";

const ProjectsPage = ({ projects }) => {
    console.log(projects);
  return (
    <Layout title={"Projects"} description={"my projects"} backToHome={true}>
      <section className="h-full max-w-5xl pt-4 mx-auto mb-16 md:pt-16 ">
        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
          {projects?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;

export const getStaticProps = async () => {
  const projects = await getAllProjects();
  return {
    props: {
      projects,
    },
  };
};
