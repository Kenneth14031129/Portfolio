import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      setScrollProgress(scrollPercent * 100);

      // Get all sections
      const sections = navItems
        .map((item) => ({
          id: item.href.substring(1),
          element: document.querySelector(item.href),
        }))
        .filter((section) => section.element);

      // Find the section that is currently in view - improved algorithm
      const viewportHeight = window.innerHeight;
      let currentSection = null;

      // First check for sections that are fully in viewport
      sections.forEach((section) => {
        const rect = section.element.getBoundingClientRect();
        // Check if the section is mostly visible in the viewport
        const visiblePercentage =
          Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);

        if (
          visiblePercentage > viewportHeight * 0.3 &&
          (!currentSection || visiblePercentage > currentSection.visibleArea)
        ) {
          currentSection = {
            id: section.id,
            visibleArea: visiblePercentage,
          };
        }
      });

      // If no section is sufficiently visible, fall back to the closest one to the top
      if (!currentSection) {
        sections.forEach((section) => {
          const rect = section.element.getBoundingClientRect();
          if (
            rect.top <= 100 &&
            (currentSection === null || rect.top > currentSection.top)
          ) {
            currentSection = { id: section.id, top: rect.top };
          }
        });
      }

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check for active section
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add effect to set up smooth scrolling
  useEffect(() => {
    // Apply smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Clean up when component unmounts
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-gray-900/95 backdrop-blur-lg shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
    >
      {/* Skip to main content link - for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-purple-500 focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      {/* Scroll progress indicator */}
      <div
        className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="#home" className="relative group">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                JKG
              </h1>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full group-focus-within:w-full" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="flex space-x-8">
              {navItems.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none
                    ${
                      activeSection === href.substring(1)
                        ? "text-purple-400"
                        : "text-gray-300 hover:text-purple-400 focus:text-purple-400"
                    }`}
                >
                  {label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 transform origin-left transition-transform duration-300
                      ${
                        activeSection === href.substring(1)
                          ? "scale-x-100"
                          : "scale-x-0 hover:scale-x-100 focus:scale-x-100"
                      }`}
                  />
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 focus:bg-gray-800/70 text-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
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

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-2 space-y-1">
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 text-sm rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50
                  ${
                    activeSection === href.substring(1)
                      ? "bg-purple-500/10 text-purple-400"
                      : "text-gray-300 hover:bg-gray-800/50 focus:bg-gray-800/50 hover:text-purple-400 focus:text-purple-400"
                  }`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
