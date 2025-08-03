import { MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Project Coordinator & Full-Stack Developer",
      company: "Binary SUST.",
      location: "Shahjalal University of Science and Technology, Sylhet",
      duration: "202 - Present",
      description: "Led the development of modern web and Android applications using technologies like React, Node.js, Firebase, and OpenCV. Oversaw technical workshops, mentored students, and coordinated collaborative software projects for university-wide initiatives.",
      achievements: [
        "Developed the official Binary SUST website",
    "Implemented secure systems",
  "Developed real-time app using Python and Firebase"
      ]
    },
    {
      title: "Cybersecurity Mentor & Ethical Hacker",
      company: " Islamic Cyber Security",
      location: "Bangladesh", 
      duration: "2020 - Present",
      description: "Provided hands-on mentorship in ethical hacking, penetration testing, and system hardening. Worked with national-level teams to test website vulnerabilities, train junior security analysts, and promote digital safety awareness.",
      achievements: [
        "Mentored cybersecurity interns in using tools like Burp Suite, Nmap, and Metasploit",
        "Conducted ethical hacking workshops for 200+ participants"
        
      ]
    },
    {
      title: "Android App Developer",
      company: "Personal Projects",
      location: "Local",
      duration: "2020 - Present", 
      description: "Designed and developed a wide range of Android applications, focusing on utility tools, educational apps, and daily-use software. Emphasized lightweight performance, user-friendly interfaces, and offline accessibility. Experienced in Java, Android Studio, and following modern architecture patterns like MVVM.",
      achievements: [
        "Built utility apps",
        "Clean UI, offline, ad-free",
        "40+ Projects in Github"
      ]
    },
    {
      title: "Website Developer",
      company: "Binary Sust",
      location: "Sylhet, Bangladesh",
      duration: "2020 - Present",
      description: "ed the design and development of the official Binary SUST website using WordPress. Focused on creating a visually engaging, responsive, and content-rich platform that highlights the organization’s mission, events, and team.",
      achievements: [
        "Developed Binary SUST website using WordPress",
        "Customized themes and templates",
        "Ensured responsiveness, performance"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Experience
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              My professional journey and the amazing teams I've worked with
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-primary transform md:-translate-x-1/2"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative slide-up flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 shadow-glow z-10"></div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'
                  } md:w-1/2`}>
                    <div className="bg-gradient-card p-6 rounded-2xl shadow-soft hover-lift">
                      <div className="flex items-start justify-between mb-4">
                        <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {exp.title}
                          </h3>
                          <h4 className="text-lg text-primary font-medium mb-2">
                            {exp.company}
                          </h4>
                        </div>
                      </div>
                      
                      <div className={`flex flex-wrap gap-4 mb-4 ${
                        index % 2 === 0 ? 'md:justify-end' : ''
                      }`}>
                        <div className="flex items-center text-sm text-foreground/70">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                        <div className="flex items-center text-sm text-foreground/70">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.duration}
                        </div>
                      </div>

                      <p className="text-foreground/80 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-2">
                        <h5 className="font-medium text-foreground">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start text-sm text-foreground/80">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;