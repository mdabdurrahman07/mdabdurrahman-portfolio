/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { techIcons } from "../tech/technology";

const ProjectCard = ({ project, setSelectedProject }) => {
  const {
    title,
    category,
    status,
    image,
    shortDescription,
    technologies,
    github,
    live,
  } = project;

  return (
    <div
      onClick={() => {
        setSelectedProject(project);
      }}
      data-aos="zoom-in-up"
      className="group flex flex-col overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
    >
      {/* Image */}
      <figure className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </figure>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Badges */}
        <div className="mb-4 flex justify-between">
          <span className="badge badge-primary">{category}</span>

          <span className="badge badge-success">{status}</span>
        </div>

        {/* Title */}
        <h2 className="mb-3 text-2xl font-bold">{title}</h2>

        {/* Description */}
        <p className="flex-1 text-sm leading-7 text-base-content/80">
          {shortDescription}
        </p>

        {/* Technologies */}
        <div className="my-6 flex flex-wrap justify-center gap-4">
          {technologies.map((tech) => {
            const Icon = techIcons[tech];

            return (
              <span key={tech} title={tech}>
                <Icon className="text-xl" />
              </span>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="mt-auto flex gap-3">
          <Link
            to={github}
            target="_blank"
            className="btn btn-outline btn-primary flex-1"
          >
            GitHub
          </Link>

          <Link to={live} target="_blank" className="btn btn-primary flex-1">
            Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
