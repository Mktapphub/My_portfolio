import { Code, Coffee, Heart,Terminal } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import pic from "@/assets/Min.jpg";

const About = () => {
  return (
     <section id="about" className="py-16 md:py-20 bg-muted/30 scroll-mt-24 md:scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              About Me
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Dedicated to building digital solutions that drive real impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
            {/* Profile Photo */}
            <div className="flex justify-center md:justify-start scale-in">
              <div className="relative">
                <Avatar className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 border-4 border-primary/20 shadow-elegant">
                  <AvatarImage 
                    src= {pic}
                    alt="Minhajul khan"
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-gradient-primary text-primary-foreground text-4xl font-bold">
                    Av
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-background"></div>
              </div>
            </div>

            {/* Text Content */}
            <div className="slide-up md:col-span-2">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Hello! I’m Minhajul Khan, 
              </h3>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  I’m Minhajul Khan, 
                  
                  a passionate full-stack developer with a strong foundation in
     both frontend and backend technologies. With hands-on experience in building
          dynamic web applications, Android apps, and Python-based tools, I strive to
                                  develop scalable, efficient, and user-centric digital solutions.

         My work is rooted in creativity, problem-solving, and a constant drive to
      explore new technologies that make an impact. I love turning complex ideas
                                              into simple, usable, and meaningful digital experiences.
                </p>
                <p>
                  Beyond development, I actively contribute to the tech community as the Project Coordinator at Binary SUST — an IT-based organization at Shahjalal University of Science and Technology. 
                  Here, I lead project teams, conduct workshops, and help nurture the next generation of developers. 
                  Whether it's teaching Python, mentoring in cybersecurity, or managing complex OpenCV-based systems, I’m deeply committed to technology that empowers and educates.
                </p>
                <p>
                  Here are a few technologies I've been working with recently:
                </p>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {[
                    'Android App Development',
                    'Web Development',
                    'Wordpress',
                    'React.js',
                    'Python Open-CV',
                    'PostgreSQL'
                  ].map((tech, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm font-mono">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="space-y-6 scale-in">
              <div className="bg-gradient-card p-6 rounded-2xl shadow-soft hover-lift">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">5+ Years</h4>
                    <p className="text-foreground/70">Android App Development Experience</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-card p-6 rounded-2xl shadow-soft hover-lift">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Coffee className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">50+ Projects</h4>
                    <p className="text-foreground/70">Successfully Completed</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-card p-6 rounded-2xl shadow-soft hover-lift">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Terminal className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">3+ Years</h4>
                    <p className="text-foreground/70">Web Development Exprience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;