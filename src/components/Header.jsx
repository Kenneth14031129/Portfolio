import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add resize listener
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      setScrollProgress(scrollPercent * 100);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-gray-900/95 backdrop-blur-lg shadow-lg shadow-black/10"
            : isMobile
            ? "bg-black/20 backdrop-blur-sm"
            : "bg-transparent"
        }`}
    >
      {/* Scroll progress indicator - thinner on mobile */}
      <div
        className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo - smaller on mobile */}
          <div className="flex items-center">
            <Link to="/" className="relative group">
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                JKG
              </h1>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full group-focus-within:w-full" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="flex space-x-6 lg:space-x-8">
              {navItems.map(({ label, href }) => (
                <Link
                  key={label}
                  to={href}
                  className={`relative px-3 lg:px-4 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none
                    ${
                      location.pathname === href
                        ? "text-purple-400"
                        : "text-gray-300 hover:text-purple-400 focus:text-purple-400"
                    }`}
                >
                  {label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 transform origin-left transition-transform duration-300
                      ${
                        location.pathname === href
                          ? "scale-x-100"
                          : "scale-x-0 hover:scale-x-100 focus:scale-x-100"
                      }`}
                  />
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button - Larger touch area */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 focus:bg-gray-800/70 text-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 touch-manipulation"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <XIcon className="w-5 h-5" />
            ) : (
              <MenuIcon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Improved touch targets and transitions */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-200 ease-in-out ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-1 space-y-1">
            {navItems.map(({ label, href }) => (
              <Link
                key={label}
                to={href}
                className={`block px-4 py-2.5 text-sm rounded-lg transition-all duration-200 touch-manipulation focus:outline-none focus:ring-2 focus:ring-purple-500/50
                  ${
                    location.pathname === href
                      ? "bg-purple-500/10 text-purple-400"
                      : "text-gray-300 hover:bg-gray-800/50 focus:bg-gray-800/50 hover:text-purple-400 focus:text-purple-400"
                  }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Extra padding at the bottom of mobile menu for better UX */}
          <div className="h-1"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
