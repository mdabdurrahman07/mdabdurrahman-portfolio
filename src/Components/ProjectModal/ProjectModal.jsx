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
            className="btn btn-outline flex-1"
          >
            GitHub
          </Link>

          <Link
            to={project.live}
            target="_blank"
            className="btn btn-primary flex-1"
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