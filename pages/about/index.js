import React from "react";
import { socialLinks } from "../../components/icons/Icons";
import Layout from "../../components/Layout";
import Typical from "react-typical";

const About = () => {
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
            "Her zaman mümkün olan en yüksek standarda ulaşmak için çabalıyorum.",
            2000,
            "I always try to learn and develop new things.",
            2000,
            "Her zaman yeni şeyler öğrenmeye ve geliştirmeye çalışıyorum.",
            2000,
          ]}
        />
      );
    },
    (props, prevprops) => true
  );
  return (
    <Layout title={'About me'} description={'about me'} backToHome={true}>
      <main className="w-full h-full">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
          <div className="flex flex-col items-center justify-center md:items-start">
            <h4 className="text-lg">
              <span className="text-xl font-normal">Hello,</span>I'm
            </h4>
            <h1 className="mt-5 text-xl font-extrabold tracking-normal uppercase md:text-4xl md:mt-3 ">
              İbrahim Taşkın
            </h1>
            <div className="mt-5 text-2xl font-normal tracking-normal md:text-4xl md:mt-3">
              <TypingAnimation />
            </div>
            <div className="flex items-center mt-8 space-x-6 md:mt-4">
              <a target={"_blank"} href="https://github.com/ibrahimTaskin">
                {socialLinks.github}
              </a>
              <a
                target={"_blank"}
                href="https://www.linkedin.com/in/ibrahim-ta%C5%9Fk%C4%B1n-4816ba170/"
              >
                {socialLinks.linkedin}
              </a>
              <a
                target={"_blank"}
                href="https://www.hackerrank.com/taskin_ibrahim?hr_r=1"
              >
                {socialLinks.hackkerrank}
              </a>
            </div>
            <div>
              Kullandığım teknolojiler reactjs javascript c# sql asp.net git
              azuredevops angular nextjs nodejs
            </div>
            <div>
              Aldığım eğitimler agile-bülent turhan/scrum-bülent
              turhan/öğrenmeyi öğrenmek-çiğdem durmuş/zaman yönetimi-inanç
              civelekoğlu{" "}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default About
