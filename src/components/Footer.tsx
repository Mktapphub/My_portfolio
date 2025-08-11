import { Github, Linkedin, Mail, Twitter, Heart,MonitorIcon } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Mktapphub",
      label: "GitHub"
    },
    {
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/minhajul-khan-09130933b/",
      label: "LinkedIn"
    },
    {
      icon: Twitter,
      href: "https://x.com/Minhajul80", 
      label: "Twitter"
    },
    {
      icon: Mail,
      href: "mailto:mkt9319@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer id="contact" className="py-16 md:py-20 bg-muted/30 scroll-mt-24 md:scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Let's Work Together
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's connect and create something amazing together!
            </p>
            
            <a 
              href="mailto:mkt9319@gmail.com"
              className="inline-block px-8 py-4 bg-gradient-primary text-primary-foreground rounded-full font-medium hover-lift shadow-medium transition-all duration-300 mb-12"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 scale-in">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="w-12 h-12 bg-gradient-card rounded-full flex items-center justify-center hover-lift shadow-soft transition-all duration-300"
              >
                <link.icon className="w-5 h-5 text-foreground/70 hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-foreground/60 text-sm">
                © 2025 Minhajul khan. All rights reserved.
              </p>
              <div className="flex items-center text-foreground/60 text-sm">
                <span>Built with</span>
                <MonitorIcon className="inline w-4 h-4 mx-1 text-foreground" />
                <span>by Minhajul khan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;