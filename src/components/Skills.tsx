import { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Web Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "PHP", level: 80 },
        { name: "Wordpress", level: 100 }
      ]
    },
    {
      title: "Android App Development", 
      skills: [
        { name: "Java", level: 100 },
        { name: "Python", level: 90 },
        { name: "XML", level: 100 },
        { name: "Firebase", level: 100 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 100 },
        { name: "Android SDK ", level: 60 },
        { name: "Android Studio", level: 100 },
        { name: "Figma", level: 60 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Skills & Technologies
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Tools and technologies I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="bg-gradient-card p-6 rounded-2xl shadow-soft hover-lift scale-in"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="text-xl font-semibold mb-6 text-center text-foreground">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-foreground/70">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Icons */}
          <div className="mt-16 fade-in">
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 
                'Wordpress', 'firebase', 'Git', 'Java', 'XML', 'Vite', 'Tailwind'
              ].map((tech, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 bg-gradient-card rounded-full text-sm font-medium text-foreground/80 hover-lift shadow-soft"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;