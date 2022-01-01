import React from "react";
import Layout from "../../components/Layout";
import TrainingComponent from "../../components/TrainingComponent";
import { getAllTrainings } from "../../functions/getAllTrainings";

const Training = ({trainings}) => {
    console.log(trainings);
  return (
    <Layout title={"Training"} description={"my training"} backToHome={true}>
      <main className="w-full h-full">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
          <div className="flex flex-col items-center justify-center md:items-start">
            {/* Technologies I use */}
            <div className="grid grid-cols-1 gap-4 pt-5">
              {trainings?.map((training) => (
                <TrainingComponent key={training.id} training={training} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const trainings = await getAllTrainings();
  return {
    props: {
      trainings,
    },
  };
};

export default Training;
