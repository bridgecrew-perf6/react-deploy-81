import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Header() {
  return (
    <main className="relative z-10 min-h-screen ">
      <section className="flex flex-col justify-center items-center pt-64 px-8">
        <h1 className="text-6xl text-sky-100 cursive leading-none lg:leading-snug home-name">
          Hello. I'm Tirsa,
        </h1>
        <p className="text-3xl font-bold text-sky-300 mt-1">
          <span className="text-3xl font-bold text-sky-300 mt-1">I'm a </span>
          <Typewriter
            loop
            cursorStyle="|"
            cursor
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
            words={[" Frontend Developer.", "Programmer.", "Runner.", "Star Wars Fan."]}
          />
        </p>
      </section>
    </main>
  );
}

