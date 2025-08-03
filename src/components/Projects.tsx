import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import binarySustImage from "@/assets/developer-team.png";
import Code from "@/assets/Advanced code Editor.png";
import book from "@/assets/books.jpg";
import Note from "@/assets/Advanced Notepad.png";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  features: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Binary Sust Website",
      description: "A dynamic, responsive website built for Binary SUST — an IT-based organization at Shahjalal University of Science and Technology.",
      longDescription: "A dynamic, responsive website built for Binary SUST — an IT-based organization at Shahjalal University of Science and Technology. The site showcases events, teams, announcements, and workshop details, offering an engaging and informative platform for students and tech enthusiasts.",
      image: binarySustImage,
      technologies: ["Wordpress", "HTML", "CSS", "PHP", "Javascript"],
      githubUrl: "https://github.com/Mktapphub/Binary-sust-Official-website",
      liveUrl: "https://binarysust.org/",
      features: [
        "User authentication and authorization",
        " Optimized for desktop, tablet, and mobile devices",
        "Real-time updates on organizational activities",
        "Custom WordPress CMS – Easy content updates and dynamic page management",
        "Lightweight, fast-loading design for smooth user experience",
        "Real-time updates on organizational activities"
      ]
    },
    {
      id: 2,
      title: "Advanced Code Editor- Android App",
      description: "A fast, lightweight, and beginner-friendly Android code editor with live HTML preview and website source inspection — right from your phone.",
      longDescription: " A fast, lightweight, and beginner-friendly Android code editor with live HTML preview and website source inspection — right from your phone.",
      image: Code,
      technologies: ["Java", "Android Studio", "Jsoup", " MVVM Pattern","Android WebView"],
      githubUrl: "https://github.com/Mktapphub/Advanced-code-Editor",
      liveUrl: "https://github.com/Mktapphub/Advanced-code-Editor",
      features: [
        "⚡ Super-fast typing experience",
        "🎨 Syntax highlighting for HTML, CSS, and JavaScript",
        "🌐 Inspect and view source code of any website (using Jsoup)",
        "🧪 Live preview and run HTML, CSS, and JS directly",
        "💾 Save code as .txt or .html",
        "📴 Offline support"
      ]
    },
    {
      id: 3,
      title: "📚 Book World-Android App",
      description: "An app where you can read, organize, and download millions of books — completely free.",
      longDescription: "Book World is a lightweight, user-friendly Android app that gives you access to a vast collection of free books. Whether you're a student, a researcher, or simply a passionate reader, Book World offers a seamless reading experience along with the ability to download and manage your personal library. All for free.",
      image: book,
      technologies: [" Java", "Android Studio", "Android"],
      githubUrl: "https://github.com/Mktapphub/Book-World",
      liveUrl: "https://github.com/Mktapphub/Book-World",
      features: [
        "📖 Read books for free",
        "⚡ Lightweight and fast",
        "👤 Learn about the author",
        "📘 Built-in book reader",
        "🌍 Access to a vast free collection of books",
        "📚 Manage your personal library"
      ]
    },
    {
      id: 4,
      title: "Advanced-Notepad App",
      description: "Advanced Notepad® is an android app for note-taking and task management",
      longDescription: "Advanced Notepad® is an android app for note-taking and task management, offering features like to-do lists, a daily planner, and a built-in calendar. Stay organized effortlessly with its user-friendly interface and customizable options",
      image: Note,
      technologies: [" Java", "Android Studio", "Android"],
      githubUrl: "https://github.com/Mktapphub/Advanced-Notepad-App",
      liveUrl: "https://github.com/Mktapphub/Advanced-Notepad-App",
      features: [
        "Manage all your notes.",
        "Add new notes.",
        "Use the Daily Planner section for planning your tasks every day",
        "Organize your to-do list with a calendar.",
        "Backup and restore your notes.",
        "Customize text size and theme."
      ]
    }
  ];

  return (
    <>
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Featured Projects
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                A showcase of my recent work and personal projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.id}
                  className="bg-gradient-card rounded-2xl overflow-hidden shadow-soft hover-lift cursor-pointer scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a 
                        href={project.githubUrl}
                        className="flex items-center text-foreground/70 hover:text-primary transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                      <a 
                        href={project.liveUrl}
                        className="flex items-center text-foreground/70 hover:text-primary transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-lg">
          <div className="bg-gradient-card max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-strong">
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4 text-gradient">
                {selectedProject.title}
              </h3>
              <p className="text-foreground/80 mb-6 leading-relaxed text-lg">
                {selectedProject.longDescription}
              </p>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3 text-foreground">Key Features</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3 text-foreground">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <a 
                  href={selectedProject.githubUrl}
                  className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-full font-medium hover-lift shadow-medium transition-all duration-300 flex items-center"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View Code
                </a>
                <a 
                  href={selectedProject.liveUrl}
                  className="px-6 py-3 border border-primary/30 text-primary rounded-full font-medium hover-glow transition-all duration-300 flex items-center"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;