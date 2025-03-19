import { useState, useEffect } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { Code, FileText, MonitorIcon, SmartphoneIcon, ExternalLink, GithubIcon } from "lucide-react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile and set up window resize listener
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkIfMobile);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "LIFEEC: Web Application",
      description:
        "An advanced web platform designed for owners and administrators of HomeMedix.",
      tags: ["React", "NodeJS", "MongoDB", "Tailwind CSS"],
      Icon: MonitorIcon,
      iconColor: "text-violet-400",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "LIFEEC: Mobile Application",
      description:
        "Multi-role mobile platform serving nurses, relatives, and nutritionists at HomeMedix.",
      tags: ["Flutter", "Dart", "MongoDB"],
      isAndroidApp: true,
      Icon: SmartphoneIcon,
      iconColor: "text-green-400",
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <main id="main-content" className={isMobile ? "pt-16" : ""}> {/* Mobile-only padding top */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-gray-900 to-black relative">
        {/* Animated Background Orbs - Simplified for mobile */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="hidden sm:block absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-[40rem] h-64 md:h-[40rem] bg-purple-900/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header - Mobile optimized */}
          <Fade duration={1000}>
            <div className="text-center mb-6 md:mb-8 sm:mb-16 relative">
              <div className="inline-block">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-3 md:mb-4">
                  Portfolio Showcase
                </h2>
                <div className="h-1 w-20 sm:w-24 md:w-32 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
              </div>
            </div>
          </Fade>

          {/* Enhanced Tab Buttons - Mobile optimized */}
          <Zoom duration={800} delay={200}>
            <div className="flex justify-center gap-2 sm:gap-6 mb-6 md:mb-8 sm:mb-16">
              <button
                onClick={() => setActiveTab("projects")}
                className={`group relative px-3 sm:px-4 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl text-xs sm:text-sm md:text-base font-medium transition-all duration-300 overflow-hidden ${
                  activeTab === "projects"
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <div
                  className={`absolute inset-0 transition-all duration-300 ${
                    activeTab === "projects"
                      ? "opacity-100 bg-gradient-to-r from-purple-500 to-blue-500"
                      : "opacity-0 bg-gray-800 group-hover:opacity-100"
                  }`}
                ></div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-1 sm:gap-2">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Projects</span>
                </div>
                {activeTab === "projects" && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></div>
                )}
              </button>

              <button
                onClick={() => setActiveTab("certificates")}
                className={`group relative px-3 sm:px-4 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl text-xs sm:text-sm md:text-base font-medium transition-all duration-300 overflow-hidden ${
                  activeTab === "certificates"
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <div
                  className={`absolute inset-0 transition-all duration-300 ${
                    activeTab === "certificates"
                      ? "opacity-100 bg-gradient-to-r from-purple-500 to-blue-500"
                      : "opacity-0 bg-gray-800 group-hover:opacity-100"
                  }`}
                ></div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-1 sm:gap-2">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Certificates</span>
                </div>
                {activeTab === "certificates" && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></div>
                )}
              </button>
            </div>
          </Zoom>

          {/* Projects Content - Mobile optimized */}
          {activeTab === "projects" && (
            <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2">
              {projects.map((project, index) => (
                <Fade
                  key={project.id}
                  direction={index % 2 === 0 ? "left" : "right"}
                  triggerOnce
                  duration={isMobile ? 800 : 1000}
                  delay={isMobile ? index * 100 : index * 200}
                >
                  <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500">
                    {/* Enhanced Hover Backdrop */}
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-600/0 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Project Icon section - smaller on mobile */}
                    <div className="relative aspect-video sm:aspect-w-16 sm:aspect-h-9 bg-gray-900/50 flex items-center justify-center p-6 sm:p-8 md:p-12">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <project.Icon
                          className={`w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 ${project.iconColor} transition-transform duration-500 group-hover:scale-110`}
                        />
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                    </div>

                    {/* Content section - streamlined for mobile */}
                    <div className="relative p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4 md:space-y-6">
                      {/* Title and Description */}
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="mt-1 sm:mt-2 md:mt-3 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed line-clamp-3 sm:line-clamp-none">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack - Mobile friendly wrapping */}
                      <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 md:py-1.5 bg-gray-700/50 text-gray-300 rounded-lg text-xs sm:text-sm border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Mobile Action Links */}
                      <div className="flex gap-3 pt-1">
                        <a
                          href={project.demoUrl}
                          className="flex items-center gap-1 text-xs sm:text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors duration-300"
                        >
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>Live Demo</span>
                        </a>
                        <a
                          href={project.githubUrl}
                          className="flex items-center gap-1 text-xs sm:text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-300"
                        >
                          <GithubIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>Source Code</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          )}

          {/* Certificates Content - Mobile optimized */}
          {activeTab === "certificates" && (
            <Zoom duration={1000} delay={200}>
              <div className="max-w-2xl mx-auto text-center">
                <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-4 sm:p-5 md:p-8 hover:border-purple-500/50 transition-all duration-500">
                  {/* Coming Soon Icon */}
                  <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
                    <FileText className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-purple-400" />
                  </div>

                  {/* Message */}
                  <Fade cascade delay={600}>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                      Certificates Coming Soon
                    </h3>
                  </Fade>

                  {/* Progress Indicator */}
                  <Fade delay={900}>
                    <div className="inline-flex items-center gap-2 text-purple-400">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <span className="text-xs sm:text-sm">In Progress</span>
                    </div>
                  </Fade>
                </div>
              </div>
            </Zoom>
          )}
        </div>

        <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 overflow-hidden bg-gradient-to-b from-transparent to-gray-900 backdrop-blur-sm">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute h-1 w-1 rounded-full bg-purple-500 top-1/4 left-1/4"></div>
            <div className="absolute h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-500 top-1/3 left-1/2"></div>
            <div className="absolute h-1 w-1 rounded-full bg-purple-500 top-1/2 left-3/4"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;