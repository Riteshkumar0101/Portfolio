
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-blue/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-blue-light/10 blur-3xl"></div>
      </div>

      <div className="section-container grid md:grid-cols-2 gap-8 items-center">
        <div className="animate-fade-in">
          <p className="text-blue text-lg font-medium mb-2">Hi, I'm</p>
          <h1 className="font-bold text-gray-dark mb-4">
            Ritesh Kumar <span className="inline-block animate-fade-in">👋</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-dark/80 mb-6">
            Software Engineer | DevOps & Testing Enthusiast
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg">
            Passionate B.Tech student with expertise in software development, DevOps, and testing methodologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="btn-lg bg-blue text-white hover:bg-blue-dark" asChild>
              <a href="/resume.pdf" download>
                Download Resume
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </Button>
            <Button onClick={scrollToContact} variant="outline" className="btn-lg border-blue text-blue hover:bg-blue/10">
              Contact Me
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </div>
        </div>

        <div className="hidden md:block animate-fade-in-left">
          <div className="relative w-[320px] h-[400px] mx-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-blue to-blue-light rounded-2xl blur opacity-30"></div>
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl w-full h-full">
              <img 
                src="/my pic.jpg" 
                alt="Developer workspace" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
