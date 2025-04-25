
import React from 'react';
import { cn } from '../lib/utils';
import { 
  Code2,
  FileCode,
  TestTube,
  Github
} from 'lucide-react';

interface SkillCategory {
  title: string;
  skills: {
    name: string;
    icon: string | React.FC<{ className?: string }>;
    isCustomIcon?: boolean;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { 
        name: "C++", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        isCustomIcon: true 
      },
      { 
        name: "Java", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        isCustomIcon: true
      },
      { 
        name: "Python", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        isCustomIcon: true
      },
      { 
        name: "C", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        isCustomIcon: true 
      },
    ]
  },
  {
    title: "Frameworks",
    skills: [
      { 
        name: "HTML", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        isCustomIcon: true 
      },
      { 
        name: "CSS", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        isCustomIcon: true 
      },
      { 
        name: "JUnit", 
        icon: TestTube
      },
      { 
        name: "JMeter", 
        icon: FileCode
      },
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { 
        name: "Selenium", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
        isCustomIcon: true 
      },
      { 
        name: "Docker", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        isCustomIcon: true
      },
      { 
        name: "Eclipse", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg",
        isCustomIcon: true 
      },
      { 
        name: "AWS", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
        isCustomIcon: true 
      },
      { 
        name: "Maven", 
        icon: "https://maven.apache.org/images/maven-logo-black-on-white.png",
        isCustomIcon: true 
      },
      { 
        name: "TestNG", 
        icon: Github
      },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <h2 className="text-3xl font-bold text-gray-dark mb-4 text-center">My Skills</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          I've worked with a variety of programming languages, frameworks, and tools throughout my academic and personal projects.
        </p>

        <div className="space-y-12">
          {skillCategories.map((category, idx) => (
            <div key={category.title} className={cn(
              "animate-fade-in opacity-0",
              { "animation-delay-200": idx === 1, "animation-delay-400": idx === 2 }
            )}>
              <h3 className="text-xl font-semibold text-blue mb-6">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center">
                    <div className="skill-icon mb-3 flex items-center justify-center">
                      {skill.isCustomIcon ? (
                        <img src={skill.icon as string} alt={skill.name} className="w-8 h-8" />
                      ) : (
                        // @ts-ignore - icon component type
                        <skill.icon className="w-8 h-8" />
                      )}
                    </div>
                    <span className="text-gray-dark text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
