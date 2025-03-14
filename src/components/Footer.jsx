import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

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
    <footer className="relative w-full bg-gradient-to-b from-black to-gray-900 pt-12 pb-8">
      {/* Decorative top border with enhanced gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center text-center mb-8">
          {/* About Section */}
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
              About This Portfolio
            </h3>
            <p className="text-gray-300">
              This portfolio showcases my journey and projects as an Software
              Developer. Built with passion and modern technologies.
            </p>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="group p-3 bg-gray-800/50 rounded-lg hover:bg-purple-500/20 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Icon className="w-5 h-5 text-gray-300 group-hover:text-purple-400 transform group-hover:scale-110 transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar with Enhanced Design */}
        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Made with Love Section */}
            <div className="flex items-center space-x-2 text-gray-300">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Justine Kenneth Gaviola. All rights
              reserved.
            </div>

            {/* Enhanced Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="group relative p-3 rounded-lg overflow-hidden transition-all duration-300"
              aria-label="Scroll to top"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <ArrowUp className="w-5 h-5 text-gray-300 group-hover:text-purple-400 transform group-hover:-translate-y-1 transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
