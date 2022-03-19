import React from "react";
import projectList from "../projectList";

export default function Projects() {
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
                  src={post.image}
                  alt={post.alt}
                  className="w-full h-full rounded-r object-cover absolute "
                />
                <span className="relative h-full flex justify-end items-end pr-4 pb-4">
                  <h4 className="text-sky-100 text-md font-bold px-3 py-4 bg-sky-600 rounded bg-opacity-80">
                    {/* <span>{post.title}</span> */}
                    <span>
                      <a
                        href={post.GitHub}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-sky-900 m-3"
                      >
                        GitHub Repo
                      </a>
                    </span>
                    <span>
                      {" "}
                      <a
                        href={post.deployedLink}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-sky-900"
                      >
                        Deployed Website
                      </a>
                    </span>
                  </h4>
                </span>
              </span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
