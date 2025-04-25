
import React from 'react';
import { Badge } from "@/components/ui/badge";

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  credentialLink?: string;
  skills: string[];
}

const certifications: CertificationProps[] = [
  {
    title: "Data Structures and Algorithms",
    issuer: "Coursera",
    date: "August 2023",
    credentialLink: "https://www.coursera.org",
    skills: ["Algorithms", "Data Structures", "Problem Solving"],
  },
  {
    title: "IBM DevOps and Software Engineering",
    issuer: "IBM",
    date: "May 2023",
    credentialLink: "https://www.ibm.com",
    skills: ["DevOps", "CI/CD", "Jenkins", "Git"],
  },
  {
    title: "Python 5-Star Badge",
    issuer: "HackerRank",
    date: "October 2023",
    credentialLink: "https://www.hackerrank.com",
    skills: ["Python", "Problem Solving", "Algorithms"],
  },
  {
    title: "C++ 3-Star Badge",
    issuer: "HackerRank",
    date: "July 2023",
    credentialLink: "https://www.hackerrank.com",
    skills: ["C++", "Problem Solving", "Data Structures"],
  },
];

const achievements = [
  "Completed 30-hour NGO workshop on technology for social good",
  "Participated in university-level hackathon",
  "Technical Club Member at Lovely Professional University",
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="section-container">
        <h2 className="text-3xl font-bold text-gray-dark mb-4 text-center">Certifications & Achievements</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Continuous learning is a key part of my journey as a developer. Here are some of my certifications and achievements.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="certificate-card animate-fade-in"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div>
                <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{cert.issuer} • {cert.date}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-blue/5 text-blue">
                      {skill}
                    </Badge>
                  ))}
                </div>
                {cert.credentialLink && (
                  <a 
                    href={cert.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue hover:underline inline-flex items-center"
                  >
                    View Certificate
                    <svg className="w-3 h-3 ml-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.33301 8.66667V12C3.33301 12.3536 3.47348 12.6928 3.72353 12.9428C3.97358 13.1929 4.31277 13.3333 4.66634 13.3333H11.333C11.6866 13.3333 12.0258 13.1929 12.2758 12.9428C12.5259 12.6928 12.6663 12.3536 12.6663 12V8.66667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.667 4.66667L8.00033 2L5.33366 4.66667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 2V9.33333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-medium">
          <h3 className="text-xl font-semibold mb-4">Other Achievements</h3>
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-blue mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
