import React, { useRef } from "react";
import { personalDetails } from "../Details";

const Home = () => {
  const { name, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div>
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi,👋 I'm
          <br />
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {name}
        </h1>
        <br />
        <hr />
        <br />
        <h2
          ref={h13}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          <a href="https://git.io/typing-svg">
            <img
              src="https://readme-typing-svg.herokuapp.com?font=Poppins&size=40&pause=1000&color=FFFFFF&width=480&height=70&lines=Informatics+Student;Front+End+Developer;Mobile+Apps+Developer"
              alt="Typing SVG"
            />
          </a>
        </h2>
      </div>
      <div className="mt-2 md:mt-0">
        <img
          ref={myimageref}
          className="w-1/2 md:ml-auto"
          src={img}
          alt="David"
        />
      </div>
    </main>
  );
};

export default Home;
