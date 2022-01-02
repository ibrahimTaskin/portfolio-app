import React from "react";
import Layout from "../../components/Layout";
import Typical from "react-typical";
import { getAllTrainings } from "../../functions/getAllTrainings";
import SocialLinks from "../../components/SocialLinks";

const About = ({ trainings }) => {
  console.log(trainings);
  const TypingAnimation = React.memo(
    () => {
      return (
        <Typical
          loop={Infinity}
          wrapper="p"
          steps={[
            "Software Developer 🧑🏻‍💻",
            2000,
            "I always strive to achieve the highest standard possible. ",
            2000,
            "I always try to learn and develop new things.",
            2000,
          ]}
        />
      );
    },
    (props, prevprops) => true
  );
  return (
    <Layout title={"About me"} description={"about me"} backToHome={true}>
      <main className="w-full h-full">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
          <div className="flex flex-col items-center justify-center md:items-start">
            <img src="/Profil.jpg" className="rounded-3xl max-h-64" />
            {/* Social links */}
            <SocialLinks />

            <h4 className="text-lg mt-5">
              <span className="text-xl font-normal">Hello,</span>I'm
            </h4>
            <h1 className="mt-5 text-xl font-extrabold tracking-normal uppercase md:text-4xl md:mt-3 ">
              İbrahim Taşkın
            </h1>
            <div className="mt-5 text-lg font-normal tracking-normal md:text-4xl md:mt-3">
              <TypingAnimation />
            </div>

            <div className="mt-5 flex flex-col items-center justify-center md:items-start ">
              <p>
                In line with my education and experience, I had the opportunity
                to work with different people, to take part in a team and to
                learn how to produce together.
              </p>
              <p className="mt-5">
                I am a planned worker who loves his job and cares about details.
                I care a lot about learning new things and improving my skills,
                and for this purpose, I think it is necessary to benefit from
                the teaching of human relations. That's why it's so important to
                me to exchange information with the people on my team.
              </p>
              <p className="mt-5">
                Being aware of the fact that developing ideas keeps the mind,
                and therefore the body, constantly active, I think it is
                important to be creative both in business and in personal life.
              </p>
              <p className="mt-5">
                I am always working and striving to do more. I always aim for
                the best with the philosophy that the success of a person is as
                much as his effort. Working with a company in this direction and
                with a vision is among my goals.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};
export default About;

export const getStaticProps = async () => {
  const trainings = await getAllTrainings();
  return {
    props: {
      trainings,
    },
  };
};
