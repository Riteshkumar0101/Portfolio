
import React from 'react';

interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
  score?: string;
  description?: string;
}

const educationItems: EducationItemProps[] = [
  {
    degree: "Bachelor of Technology - Computer Science Engineering",
    institution: "Lovely Professional University",
    period: "Aug 2022 - Jun 2026",
    description: "Currently pursuing a B.Tech in Computer Science with focus on software development and DevOps practices."
  },
  {
    degree: "Intermediate (10+2)",
    institution: "Him Gurukul International School",
    period: "Completed 2022",
    score: "70%"
  },
  {
    degree: "Matriculation",
    institution: "Him Gurukul International School",
    period: "Completed 2020",
    score: "70%"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-light/50">
      <div className="section-container">
        <h2 className="text-3xl font-bold text-gray-dark mb-4 text-center">Education</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          My academic background that has shaped my technical foundation and knowledge.
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue/20 md:left-1/2 md:-ml-0.5"></div>
            
            {educationItems.map((item, index) => (
              <div 
                key={index}
                className={`mb-12 relative animate-fade-in ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className="flex md:items-center ml-12 md:ml-0">
                  {/* Timeline circle indicator */}
                  <div className="absolute left-4 w-4 h-4 rounded-full bg-blue border-4 border-white md:left-1/2 md:-ml-2"></div>
                  
                  {/* Content */}
                  <div className={`bg-white rounded-lg shadow-sm p-6 md:w-[calc(50%-40px)] ${
                    index % 2 !== 0 ? 'md:mr-[50%] md:ml-10' : 'md:ml-[50%] md:ml-10'
                  }`}>
                    <h3 className="text-lg font-semibold text-gray-dark">{item.degree}</h3>
                    <p className="text-blue font-medium">{item.institution}</p>
                    <div className="flex justify-between items-center mt-2 mb-2">
                      <span className="text-sm text-muted-foreground">{item.period}</span>
                      {item.score && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-light/20 text-blue">
                          {item.score}
                        </span>
                      )}
                    </div>
                    {item.description && (
                      <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
