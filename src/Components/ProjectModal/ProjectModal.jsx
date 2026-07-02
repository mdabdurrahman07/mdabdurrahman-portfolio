/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { techIcons } from "../tech/technology";

const ProjectModal = ({ project }) => {
  if (!project) return null;

  return (
    <dialog id="project_modal" className="modal">
      <div className="modal-box max-w-4xl">

        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-xl mb-6"
        />

        <div className="flex justify-between flex-wrap gap-2 mb-4">

          <span className="badge badge-primary">
            {project.category}
          </span>

          <span className="badge badge-success">
            {project.status}
          </span>

          <span className="badge badge-outline">
            {project.year}
          </span>

        </div>

        <h2 className="text-3xl font-bold mb-4">
          {project.title}
        </h2>

        <p className="leading-8 text-base-content/80">
          {project.longDescription}
        </p>

        <div className="mt-8">

          <h3 className="font-bold text-xl mb-3">
            Key Highlights
          </h3>

          <ul className="list-disc list-inside space-y-2">

            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}

          </ul>

        </div>

        <div className="mt-8">

          <h3 className="font-bold text-xl mb-3">
            Tech Stack
          </h3>

          <div className="flex flex-wrap gap-4">

            {project.technologies.map((tech) => {
              const Icon = techIcons[tech];

              return (
                <div
                  key={tech}
                  className="tooltip"
                  data-tip={tech}
                >
                  <Icon className="text-2xl" />
                </div>
              );
            })}

          </div>

        </div>

        <div className="flex gap-4 mt-8">

          <Link
            to={project.github}
            target="_blank"
            className="flex-1 cursor-pointer rounded-xl border-2 border-cyan-500 px-3.5 py-2.5 text-center  text-cyan-500 shadow-lg shadow-cyan-500/10 transition-all duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white active:scale-95"
          >
            GitHub
          </Link>

          <Link
            to={project.live}
            target="_blank"
            className="flex-1 cursor-pointer rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-3.5 py-2.5  text-center text-white shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:from-cyan-600 hover:to-blue-600 active:scale-95"
          >
            Live Demo
          </Link>

        </div>

      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default ProjectModal;