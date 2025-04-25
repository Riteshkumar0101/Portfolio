import React from 'react';
import { cn } from '../lib/utils';
import {
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
    <section id="skills" className="py-20 bg-white">
      <div className="section-container px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">My Skills</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          I've worked with a variety of programming languages, frameworks, and tools throughout my academic and personal projects.
        </p>

        <div className="space-y-16">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl font-semibold text-blue-600 mb-6">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
                  >
                    <div className="mb-3 flex items-center justify-center w-12 h-12">
                      {skill.isCustomIcon ? (
                        <img
                          src={skill.icon as string}
                          alt={skill.name}
                          className="w-10 h-10 object-contain"
                        />
                      ) : (
                        // @ts-ignore - handles Lucide icons
                        <skill.icon className="w-10 h-10 text-blue-500" />
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-800 text-center">{skill.name}</span>
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
