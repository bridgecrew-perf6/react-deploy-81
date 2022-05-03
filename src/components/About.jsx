import React from "react";
import profile from "../img/profile-img1.jpg";
export default function About() {
  return (
    <main className="relative z-10">
      <div className="p-10 lg:p-[200px] lg:pt-[100px] container mx-auto relative">
        <section className="bg-slate-700 rounded-lg shadow-2xl xl:flex p-20 bg-opacity-70">
          <img
            className="rounded sm:w-64 sm:h-full sm:mx-auto lg:w-64 lg:h-full mr-8"
            src={profile}
            alt="profile"
          />
          <div className="text-lg flex flex-col justify-center lg:m-9">
            <h1 className="cursive text-2xl lg:text-6xl text-sky-400 mb-4 mt-5">
              Hey there. I'm <span className="text-sky-100">Tirsa</span>
            </h1>
            <div>
              <p className="text-sky-100">
                A Software Developer who has a life-long dedication to learning
                and is willing to take up challenges and combine creativity and
                complex problems to develop user-friendly applications. Recieved a coding bootcamp certificate
                from the University of Texas at San Antonio.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
