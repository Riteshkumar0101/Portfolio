
import React from 'react';
import { Button } from "@/components/ui/button";

interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubLink?: string;
  demoLink?: string;
}

const projects: ProjectProps[] = [
  {
    title: "Tic-Tac-Toe Game",
    description: "An interactive Tic-Tac-Toe game featuring an AI opponent, real-time validation, and a responsive user interface.",
    techStack: ["C", "Python", "Algorithms"],
    image: "https://images.unsplash.com/photo-1586102901527-644d2f15e5c0?q=80&w=800&auto=format&fit=crop",
    githubLink: "https://github.com/Riteshkumar0101/tic-tac-toe",
  },
  {
    title: "Blood Donation Website",
    description: "A comprehensive platform that connects blood donors with recipients. Features include donor search by location and blood group, appointment scheduling, and donor profiles.",
    techStack: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python"],
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=800&auto=format&fit=crop",
    githubLink: "https://github.com/Riteshkumar0101/blood-donation",
    demoLink: "#",
  },
];

const Project: React.FC<ProjectProps> = ({ title, description, techStack, image, githubLink, demoLink }) => {
  return (
    <div className="project-card">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span 
                key={tech} 
                className="text-xs bg-blue/10 text-blue px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          {githubLink && (
            <Button variant="outline" size="sm" className="text-gray-dark" asChild>
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12C2 16.423 4.865 20.16 8.84 21.49C9.34 21.58 9.52 21.27 9.52 21C9.52 20.77 9.51 20.14 9.51 19.31C7 19.91 6.35 18.97 6.15 18.33C6.037 18.017 5.72 17.06 5.25 16.83C4.86 16.64 4.36 16.04 5.235 16.03C6.05 16.02 6.637 16.82 6.83 17.14C7.83 18.59 9.275 18.36 9.56 18.09C9.65 17.39 9.91 16.92 10.2 16.65C7.97 16.38 5.64 15.56 5.64 11.72C5.64 10.67 6.055 9.79 6.85 9.1C6.75 8.84 6.37 7.84 7 6.38C7 6.38 7.9 6.1 9.525 7.133C10.325 6.893 11.175 6.773 12.025 6.773C12.875 6.773 13.725 6.893 14.525 7.133C16.15 6.093 17.05 6.38 17.05 6.38C17.68 7.84 17.3 8.84 17.2 9.1C18 9.79 18.415 10.67 18.415 11.72C18.415 15.57 16.08 16.38 13.85 16.65C14.2 16.99 14.5 17.65 14.5 18.66C14.5 20.12 14.49 20.68 14.49 21C14.49 21.27 14.67 21.59 15.17 21.49C17.158 20.8185 18.8574 19.5405 20.0798 17.8597C21.3022 16.1789 21.9954 14.1762 22 12.12C22 6.477 17.523 2 12 2Z" fill="currentColor"/>
                </svg>
                Code
              </a>
            </Button>
          )}
          {demoLink && (
            <Button variant="default" size="sm" className="bg-blue text-white" asChild>
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.6396 7.02527H12.0181V5.02527H19.0181V12.0253H17.0181V8.47528L12.9289 12.5645C11.3747 14.1186 8.84388 14.1186 7.28967 12.5645C5.73546 11.0102 5.73546 8.47939 7.28967 6.92517C8.84388 5.37096 11.3747 5.37096 12.9289 6.92517L15.6396 7.02527ZM13.626 8.83755C13.0089 8.22823 12.0134 8.22823 11.3962 8.83755C10.7869 9.44683 10.7869 10.4428 11.3962 11.052C12.0055 11.6613 13.0015 11.6613 13.6108 11.052L13.626 8.83755Z" fill="currentColor"/>
                  <path d="M5.17157 13.7539C3.60947 15.318 3.60947 17.8494 5.17157 19.4113C6.73367 20.9734 9.26511 20.9734 10.8272 19.4113C12.3893 17.8494 12.3893 15.318 10.8272 13.7539L8.11652 15.0229H12.0181V17.0229H5.01814V10.0229H7.01814V13.9223L5.17157 13.7539ZM10.1308 18.7086C9.51844 19.3209 8.52035 19.3209 7.90798 18.7086C7.29622 18.0968 7.29622 17.0987 7.90798 16.487C8.51974 15.8752 9.51783 15.8752 10.1302 16.487L10.1308 18.7086Z" fill="currentColor"/>
                </svg>
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-light/50">
      <div className="section-container">
        <h2 className="text-3xl font-bold text-gray-dark mb-4 text-center">My Projects</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on, showcasing my skills and passion for development.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="animate-fade-in">
              <Project {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
