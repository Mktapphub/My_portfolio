import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';
import cvFile from "@/assets/Minhajul_cv.pdf";

const handleDownloadCV = () => {
  const link = document.createElement('a');
  link.href = cvFile;
  link.download = 'Minhajul_cv.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-lg shadow-soft' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gradient">
              Minhajul Khan
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Hero background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight">
              Minhajul Khan
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 font-light">
              Full-Stack Web & Android Developer | Cybersecurity Specialist
            </p>
            <div className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
  <p className="mb-6">
    Building smart, scalable applications and leading tech projects with passion and precision.
    Combining coding, coordination, and creativity to deliver seamless digital experiences.
  </p>
  <p className="mb-12">
    Experienced in Web Development, Android App Development, Python Programming, and OpenCV.
    Currently serving as Project Coordinator at Binary SUST, a prominent IT organization at Shahjalal University of Science and Technology, dedicated to fostering technology and innovation.
  </p>
</div>


            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
  onClick={handleDownloadCV}
  className="px-8 py-4 bg-gradient-primary text-primary-foreground rounded-full font-medium hover-lift shadow-medium transition-all duration-300"
>
  Download My CV
</button>

              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-primary text-primary-foreground rounded-full font-medium hover-lift shadow-medium transition-all duration-300"
              >
                View My projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border border-primary/30 text-primary rounded-full font-medium hover-glow transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-primary/60 w-6 h-6" />
        </div>
      </section>
    </>
  );
};

export default Header;