import React from "react";
import projectList from "../projectList";
import photo1 from "../img/photo1.JPG";
import photo2 from "../img/photo2.JPG";
import photo3 from "../img/photo3.JPG";
import photo4 from "../img/photo4.JPG";
import photo9 from "../img/photo9.JPG";
import photo10 from "../img/photo10.JPG"
export default function Projects() {
  const IMAGE_MAPS = {
    photo1: photo1,
    photo2: photo2,
    photo3: photo3,
    photo4: photo4,
    photo9: photo9,
    photo10: photo10
  };

  return (
    <main className="relative z-10 min-h-screen mb-[100px] lg:mb-0">
      <section className="container mx-auto">
        <h1 className="text-5xl text-sky-100 flex justify-center cursive mt-9 mb-6">
          My Projects
        </h1>
        <h2 className="text-lg text-sky-100 flex justify-center mb-12">
          Welcome to my projects page!
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((post) => (
            <article className="px-4">
              <span
                className="block h-64 relative shadow leading-snug bg-sky-700 border-l-8 border-sky-500 outline-c rounded"
                key={post.id}
              >
                <img
                  key={post.id}
                  src={IMAGE_MAPS[post.image]}
                  alt={post.alt}
                  className="w-full h-full rounded-r object-cover absolute "
                />

                {/* Hover affect */}
                <div className="opacity-0 hover:opacity-100 z-50 relative h-full flex flex-col justify-center items-center content-div">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {post.title}
                  </span>
                  <div className="pt-8 text-center">
                    <a
                      href={post.GitHub}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-sky-900 m-3"
                    >
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                    <a
                      href={post.deployedLink}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-sky-900"
                    >
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                  </div>
                </div>
              </span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
