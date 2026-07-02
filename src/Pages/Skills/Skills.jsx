import { skillCategories } from "./SkillsCategories";

const Skills = () => {
  return (
    <div className="max-w-6xl mx-auto my-20 p-4">
      <h1 className="text-5xl font-bold text-center mb-14">Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories?.map((category, index) => (
          <div
            key={index}
            className="card bg-base-200/40 border border-base-content/10 backdrop-blur-md shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300"
          >
            <div className="card-body p-6">
              <h3 className="card-title text-lg font-semibold text-base-content mb-4 border-b border-base-content/5 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="badge badge-lg py-5 gap-2 bg-base-100 hover:bg-base-300 border-base-content/10 hover:border-primary/40 transition-all duration-200 cursor-default font-medium text-sm text-base-content"
                  >
                    <span className="text-xl flex items-center justify-center">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
