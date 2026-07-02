import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import { projects } from "./ProjectsData";


const Projects = () => {
  return (
    <section
      id="project"
      className="max-w-7xl mx-auto px-4 py-20"
    >
      <h1 className="text-5xl font-bold text-center mb-14">
        Projects
      </h1>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          2xl:grid-cols-4
          gap-8
        "
      >
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;