import { educationData } from "./EducationData";

const Education = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
         <h1 className="text-5xl font-bold text-center mb-14">Educational Background</h1>

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {educationData.map((item, index) => (
          <li key={item.id}>
            {/* Timeline line/connector */}
            {index !== 0 && <hr className={item.current ? "bg-primary" : ""} />}
            
            {/* Timeline Icon */}
            <div className={`timeline-middle p-2 rounded-full bg-base-200 shadow-sm border ${item.current ? "border-primary" : "border-base-300"}`}>
              {item.icon}
            </div>

            {/* Timeline Content */}
            <div className={`timeline-start md:text-end mb-10 ${index % 2 === 0 ? 'md:timeline-start' : 'md:timeline-end'}`}>
              <div className="card bg-base-200 shadow-xl border border-base-300 hover:border-primary/30 transition-all duration-300">
                <div className="card-body p-6 text-left">
                  {item.current && (
                    <div className="badge badge-primary badge-md mb-2 animate-pulse">
                      In Progress
                    </div>
                  )}
                  <h3 className="card-title text-xl font-bold text-base-content">
                    {item.exam}
                  </h3>
                  <p className="text-lg font-medium text-neutral-content/80 mt-1">
                    {item.institution}
                  </p>
                  
                  <div className="divider my-2"></div>
                  
                  <div className="flex flex-wrap gap-2 justify-between items-center text-sm">
                    <span className="badge badge-outline">Board: {item.board}</span>
                    <span className="font-semibold text-primary">{item.result}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {index !== educationData.length - 1 && <hr className={educationData[index + 1].current ? "bg-primary" : ""} />}
          </li>
        ))}
      </ul>
    </div>
    );
};

export default Education;