import React from "react";
import { personalDetails, techStackDetails } from "../Details";

const About = () => {
  const { html, css, js, react, bootstrap } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          My Interest
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">
          {personalDetails.interest}
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={bootstrap} title="Bootstrap" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={react} title="React" alt="" />
      </section>
    </main>
  );
};

export default About;
