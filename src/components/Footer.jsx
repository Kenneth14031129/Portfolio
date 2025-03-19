import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { Icon: Github, href: "https://github.com", label: "GitHub" },
    { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { Icon: Mail, href: "mailto:justken2000@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-black to-gray-900 pt-8 sm:pt-12 pb-6 sm:pb-8">
      {/* Decorative top border with enhanced gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          {/* About Section - Mobile optimized text sizes */}
          <div className="max-w-2xl mx-auto mb-4 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-2 sm:mb-4">
              About This Portfolio
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              This portfolio showcases my journey and projects as a Software
              Developer. Built with passion and modern technologies.
            </p>
          </div>

          {/* Quick Links - Improved wrapping for mobile */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-4 sm:mb-6">
            <Link to="/" className="text-sm sm:text-base text-gray-300 hover:text-purple-400 transition-colors duration-300">Home</Link>
            <Link to="/about" className="text-sm sm:text-base text-gray-300 hover:text-purple-400 transition-colors duration-300">About</Link>
            <Link to="/projects" className="text-sm sm:text-base text-gray-300 hover:text-purple-400 transition-colors duration-300">Projects</Link>
            <Link to="/contact" className="text-sm sm:text-base text-gray-300 hover:text-purple-400 transition-colors duration-300">Contact</Link>
          </div>

          {/* Enhanced Social Links - Mobile optimized sizes */}
          <div className="flex justify-center gap-3 sm:gap-4 mb-4 sm:mb-8">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="group p-2 sm:p-3 bg-gray-800/50 rounded-lg hover:bg-purple-500/20 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-purple-400 transform group-hover:scale-110 transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar with Enhanced Design - Already responsive with flex-col/flex-row */}
        <div className="pt-4 sm:pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            {/* Made with Love Section */}
            <div className="flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base text-gray-300">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 fill-current animate-pulse" />
            </div>

            {/* Copyright - Mobile optimized text */}
            <div className="text-xs sm:text-sm text-gray-400">
              © {new Date().getFullYear()} Justine Kenneth Gaviola. All rights
              reserved.
            </div>

            {/* Enhanced Scroll to Top Button - Slightly smaller on mobile */}
            <button
              onClick={scrollToTop}
              className="group relative p-2 sm:p-3 rounded-lg overflow-hidden transition-all duration-300"
              aria-label="Scroll to top"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-purple-400 transform group-hover:-translate-y-1 transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;