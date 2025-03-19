import { useEffect, useState } from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { Code } from "lucide-react";
import profileImage from "../assets/Profile.jfif";

// Import tech stack images
import htmlImage from "../assets/html.png";
import cssImage from "../assets/CSS3.png";
import javascriptImage from "../assets/JavaScript.png";
import reactImage from "../assets/React.png";
import flutterImage from "../assets/Flutter.png";
import nodejsImage from "../assets/Node.js.png";
import mongodbImage from "../assets/MongoDB.png";
import gitImage from "../assets/Git.png";
import vsCodeImage from "../assets/VSCode.png";
import githubImage from "../assets/GitHub.png";
import cImage from "../assets/C.png";
import cPlusPlusImage from "../assets/C++.png";
import mysqlImage from "../assets/MySQL.png";
import androidStudioImage from "../assets/Android-Studio.png";
import javaImage from "../assets/Java.png";
import kotlinImage from "../assets/Kotlin.png";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile and set up resize listener
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

  return (
    <main id="main-content" className={isMobile ? "pt-16" : ""}> {/* Add padding top to account for header */}
      <section className="py-12 sm:py-24 bg-gradient-to-br from-black to-gray-900 relative">
        {/* Animated Background Orbs - Simplified for mobile */}
        <div className="absolute inset-0 overflow-hidden">
          {!isMobile && <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>}
          <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-[40rem] h-64 sm:h-[40rem] bg-purple-900/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Section Header - Mobile optimized */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-6 sm:mb-12">
          <Fade cascade damping={0.1} duration={isMobile ? 600 : 800}>
            <div className="text-center">
              <h2 className="text-2xl sm:text-4xl font-bold bg-clip-text text-white bg-gradient-to-r from-purple-400 to-blue-400 mb-2 sm:mb-4">
                About Me
              </h2>
              <div className="h-1 w-16 sm:w-20 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            </div>
          </Fade>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Main content with glassmorphism effect */}
          <div className="backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-xl sm:rounded-3xl shadow-xl overflow-hidden relative">
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5"></div>

            {/* 3-column layout with improved mobile spacing */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-8 p-4 sm:p-8">
              {/* Column 1: Profile & Bio - Stacked and centered on mobile */}
              <div className="md:col-span-4 lg:col-span-3 flex flex-col items-center space-y-4 sm:space-y-6">
                {/* Enhanced profile image with 3D hover effect - Smaller on mobile */}
                <Zoom delay={300} duration={isMobile ? 600 : 800}>
                  <div className="group perspective relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <div className="relative ring-2 ring-white/10 rounded-full group-hover:scale-105 transition duration-300">
                      <div className="aspect-square w-24 sm:w-36 h-24 sm:h-36 rounded-full overflow-hidden transform transition-all duration-500 shadow-xl">
                        <img
                          src={profileImage}
                          alt="Kenneth Gaviola"
                          className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-all duration-700"
                        />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </Zoom>

                {/* Bio with modern typography - centered */}
                <Fade cascade damping={0.2} delay={isMobile ? 300 : 400} duration={isMobile ? 800 : 1000}>
                  <div className="text-center space-y-3 sm:space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                      Kenneth P. Gaviola
                    </h3>
                    <p className="text-purple-300 font-medium text-base sm:text-lg tracking-wide">
                      Software Developer
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Quezon City, Metro Manila
                    </p>
                  </div>
                </Fade>

                {/* Education card with 3D depth - centered and simplified on mobile */}
                <Slide direction="up" delay={isMobile ? 500 : 800} triggerOnce>
                  <div className="w-full max-w-xs">
                    <div className="group relative backdrop-blur-md bg-gray-800/40 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-700/50 overflow-hidden transition-all duration-300 hover:border-purple-500/40">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-300"></div>

                      {/* Top education icon */}
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <div className="p-1.5 sm:p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z" />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-white text-xs sm:text-sm">
                          BS Information Technology
                        </h4>
                      </div>

                      <div className="ml-10 sm:ml-12">
                        <p className="text-xs sm:text-sm text-purple-400 font-medium">
                          Mobile & Web Application
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 animate-pulse"></div>
                          <p className="text-xs sm:text-sm text-gray-400">
                            2023 - Present
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
              </div>

              {/* Column 2: Skills & Focus - Improved spacing for mobile */}
              <div className="md:col-span-8 lg:col-span-4 space-y-4 sm:space-y-8 mt-4 md:mt-0">
                {/* Current Focus with alignment matching Key Skills */}
                <div>
                  <Fade cascade direction={isMobile ? "up" : "left"} damping={0.1} delay={300}>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                      <div className="p-1.5 sm:p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                        <Code className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                      </div>
                      Current Focus
                    </h3>
                  </Fade>

                  <div className="space-y-2 sm:space-y-4">
                    {[
                      {
                        icon: "💻",
                        text: "Web Development",
                        description: "Frontend & Backend",
                      },
                      {
                        icon: "📱",
                        text: "Mobile Development",
                        description: "Android",
                      },
                      {
                        icon: "🔍",
                        text: "Continuous Learning",
                        description: "New Technologies",
                      },
                      {
                        icon: "🤝",
                        text: "Team Collaboration",
                        description: "Project Management",
                      },
                    ].map((item, index) => (
                      <Slide
                        direction={isMobile ? "up" : "left"}
                        delay={isMobile ? 300 + index * 75 : 400 + index * 100}
                        key={item.text}
                        triggerOnce
                      >
                        <div className="group relative backdrop-blur-sm bg-gray-800/40 rounded-lg p-2.5 sm:p-4 border border-gray-700/50 overflow-hidden hover:border-purple-500/40 transition-all duration-300">
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-300"></div>

                          {/* Main content row with improved mobile alignment */}
                          <div className="flex justify-between items-start">
                            <div className="flex items-start gap-2 sm:gap-3">
                              <div className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300 mt-0.5">
                                {item.icon}
                              </div>
                              <div>
                                <h4 className="text-sm sm:text-base text-gray-200 font-medium">
                                  {item.text}
                                </h4>
                                <p className="text-xs text-gray-400 mt-1">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Slide>
                    ))}
                  </div>
                </div>

                {/* Skill bars with animations - Mobile optimized spacing */}
                <div>
                  <Fade cascade direction={isMobile ? "up" : "left"} damping={0.1} delay={isMobile ? 600 : 800}>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                      <div className="p-1.5 sm:p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      Key Skills
                    </h3>
                  </Fade>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { name: "Frontend Development", percentage: 75 },
                      { name: "Backend Development", percentage: 60 },
                      { name: "Mobile Development", percentage: 70 },
                    ].map((skill, index) => (
                      <Slide
                        direction={isMobile ? "up" : "left"}
                        delay={isMobile ? 700 + index * 100 : 900 + index * 150}
                        key={skill.name}
                        triggerOnce
                      >
                        <div className="space-y-1.5 sm:space-y-2">
                          <div className="flex justify-between">
                            <span className="text-xs sm:text-sm font-medium text-gray-300">
                              {skill.name}
                            </span>
                            <span className="text-xs sm:text-sm font-medium text-purple-400">
                              {skill.percentage}%
                            </span>
                          </div>
                          <div className="h-2 w-full bg-gray-700/50 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transform origin-left transition-all duration-1500 ease-out"
                              style={{
                                width: `${skill.percentage}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </Slide>
                    ))}
                  </div>
                </div>
              </div>

              {/* Column 3: Tech Stack - Optimized for mobile with better grid layout */}
              <div className="md:col-span-12 lg:col-span-5 mt-4 md:mt-0">
                <Fade cascade direction={isMobile ? "up" : "right"} damping={0.1} delay={isMobile ? 400 : 500}>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                      <Code className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                    </div>
                    Tech Stack
                  </h3>
                </Fade>

                {/* Tech stack with glassmorphism cards - Improved grid for mobile */}
                <Fade direction="up" delay={isMobile ? 500 : 600} duration={isMobile ? 800 : 1000} triggerOnce>
                  <div className="backdrop-blur-sm bg-gray-800/30 rounded-xl border border-gray-700/50 p-4 sm:p-6 hover:border-purple-500/30 transition-all duration-500 relative overflow-hidden">
                    <div className="space-y-4 sm:space-y-6">
                      {/* Languages section with modern 3D cards */}
                      <div className="relative">
                        <h4 className="text-sm sm:text-base font-medium text-purple-400 mb-3 sm:mb-4 flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                          </svg>
                          Programming Languages
                        </h4>
                        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-4">
                          {[
                            javascriptImage,
                            cImage,
                            cPlusPlusImage,
                            javaImage,
                            kotlinImage,
                          ].map((image, i) => (
                            <Zoom
                              delay={isMobile ? 600 + i * 75 : 700 + i * 100}
                              key={i}
                              duration={isMobile ? 400 : 600}
                            >
                              <div className="group relative transform transition-all duration-300 hover:z-10 hover:-translate-y-1 active:translate-y-0 active:scale-95">
                                <div className="aspect-square bg-gray-800/70 backdrop-blur-md rounded-lg sm:rounded-xl overflow-hidden flex items-center justify-center p-2 sm:p-3 border border-gray-700/30 hover:border-purple-500/50 shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                                  <img
                                    src={image}
                                    alt=""
                                    className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110 filter drop-shadow-[0_0_5px_rgba(139,92,246,0.3)]"
                                  />
                                </div>
                              </div>
                            </Zoom>
                          ))}
                        </div>
                      </div>

                      {/* Web Development */}
                      <div className="relative">
                        <h4 className="text-sm sm:text-base font-medium text-purple-400 mb-3 sm:mb-4 flex items-center gap-2">
                          💻 Web Development
                        </h4>
                        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-4">
                          {[htmlImage, cssImage, reactImage, nodejsImage].map(
                            (image, i) => (
                              <Zoom
                                delay={isMobile ? 1000 + i * 75 : 1200 + i * 100}
                                key={i}
                                duration={isMobile ? 400 : 600}
                              >
                                <div className="group relative transform transition-all duration-300 hover:z-10 hover:-translate-y-1 active:translate-y-0 active:scale-95">
                                  <div className="aspect-square bg-gray-800/70 backdrop-blur-md rounded-lg sm:rounded-xl overflow-hidden flex items-center justify-center p-2 sm:p-3 border border-gray-700/30 hover:border-purple-500/50 shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                                    <img
                                      src={image}
                                      alt=""
                                      className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110 filter drop-shadow-[0_0_5px_rgba(139,92,246,0.3)]"
                                    />
                                  </div>
                                </div>
                              </Zoom>
                            )
                          )}
                        </div>
                      </div>

                      {/* Database & Tools */}
                      <div className="relative">
                        <h4 className="text-sm sm:text-base font-medium text-purple-400 mb-3 sm:mb-4 flex items-center gap-2">
                          ⚙️ Databases & Tools
                        </h4>
                        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-4">
                          {[
                            mongodbImage,
                            mysqlImage,
                            gitImage,
                            githubImage,
                            vsCodeImage,
                          ].map((image, i) => (
                            <Zoom
                              delay={isMobile ? 1400 + i * 75 : 1600 + i * 100}
                              key={i}
                              duration={isMobile ? 400 : 600}
                            >
                              <div className="group relative transform transition-all duration-300 hover:z-10 hover:-translate-y-1 active:translate-y-0 active:scale-95">
                                <div className="aspect-square bg-gray-800/70 backdrop-blur-md rounded-lg sm:rounded-xl overflow-hidden flex items-center justify-center p-2 sm:p-3 border border-gray-700/30 hover:border-purple-500/50 shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                                  <img
                                    src={image}
                                    alt=""
                                    className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110 filter drop-shadow-[0_0_5px_rgba(139,92,246,0.3)]"
                                    />
                                </div>
                              </div>
                            </Zoom>
                          ))}
                        </div>
                      </div>

                      {/* Mobile Development */}
                      <div className="relative">
                        <h4 className="text-sm sm:text-base font-medium text-purple-400 mb-3 sm:mb-4 flex items-center gap-2">
                          📱 Mobile Development
                        </h4>
                        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-4">
                          {[androidStudioImage, flutterImage].map(
                            (image, i) => (
                              <Zoom
                                delay={isMobile ? 1800 + i * 75 : 2000 + i * 100}
                                key={i}
                                duration={isMobile ? 400 : 600}
                              >
                                <div className="group relative transform transition-all duration-300 hover:z-10 hover:-translate-y-1 active:translate-y-0 active:scale-95">
                                  <div className="aspect-square bg-gray-800/70 backdrop-blur-md rounded-lg sm:rounded-xl overflow-hidden flex items-center justify-center p-2 sm:p-3 border border-gray-700/30 hover:border-purple-500/50 shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                                    <img
                                      src={image}
                                      alt=""
                                      className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110 filter drop-shadow-[0_0_5px_rgba(139,92,246,0.3)]"
                                    />
                                  </div>
                                </div>
                              </Zoom>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;