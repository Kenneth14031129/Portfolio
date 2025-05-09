import { Fade, Zoom } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import HomeLogo from "../assets/Home-Logo.png";
import TypingAnimatedText from "./TypingText";

const Home = () => {
  const navigate = useNavigate();
  const [splineLoading, setSplineLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Track window resize for responsive adjustments
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSplineLoad = () => {
    setSplineLoading(false);
  };

  const goToAbout = () => {
    navigate("/about");
  };

  return (
    <main id="main-content">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] bg-gradient-to-r from-black via-gray-900 to-black text-white overflow-hidden flex items-center">
        {/* Animated Background Elements - Optimized for performance */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated grid with reduced opacity on mobile */}
          <div className="absolute inset-0 bg-grid-white/[0.03] sm:bg-grid-white/[0.05] bg-[size:20px_20px]">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>

          {/* Animated orbs - simplified for mobile */}
          <div className="absolute top-1/4 left-1/4 w-32 xs:w-48 sm:w-64 md:w-80 lg:w-96 h-32 xs:h-48 sm:h-64 md:h-80 lg:h-96 bg-purple-500/5 sm:bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 xs:w-48 sm:w-64 md:w-80 lg:w-96 h-32 xs:h-48 sm:h-64 md:h-80 lg:h-96 bg-blue-500/5 sm:bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

          {/* Center orb - hidden on smallest screens */}
          <div className="hidden xs:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] sm:w-[30rem] md:w-[35rem] lg:w-[40rem] h-[20rem] sm:h-[30rem] md:h-[35rem] lg:h-[40rem] bg-purple-900/10 sm:bg-purple-900/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Content Container with improved spacing for all devices */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 xs:py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 xs:gap-6 sm:gap-8">
            {/* Left side: Text content - now aligned left on larger screens */}
            <div className="w-full lg:w-1/2 space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 text-center lg:text-left">
              {/* Main Heading */}
              <Fade cascade delay={300}>
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl"></div>
                  <h1 className="relative text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                      <TypingAnimatedText />
                    </span>
                    <Fade cascade delay={700}>
                      <div className="mt-2 xs:mt-3 sm:mt-4 text-lg xs:text-xl sm:text-2xl md:text-3xl text-gray-300 font-light">
                        Software Developer
                      </div>
                    </Fade>
                    <Fade cascade delay={900}>
                      <div className="mt-1 xs:mt-1 sm:mt-2 text-base xs:text-lg sm:text-xl text-purple-400">
                        Mobile & Web Application Specialist
                      </div>
                    </Fade>
                  </h1>
                </div>
              </Fade>

              {/* Status Badge */}
              <Zoom delay={1500}>
                <div className="flex lg:justify-start justify-center">
                  <div className="inline-flex items-center px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                    <span className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-green-400 rounded-full mr-1.5 xs:mr-2 animate-pulse"></span>
                    <span className="text-xs xs:text-sm sm:text-base text-gray-300">
                      Available for Contract Work
                    </span>
                  </div>
                </div>
              </Zoom>

              {/* Call to action button */}
              <Fade delay={1800}>
                <div className="mt-6 xs:mt-7 sm:mt-8 flex lg:justify-start justify-center">
                  <button
                    onClick={goToAbout}
                    className="px-6 xs:px-7 sm:px-8 py-2 xs:py-2.5 sm:py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full text-sm xs:text-base font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Learn More About Me
                  </button>
                </div>
              </Fade>
            </div>

            {/* Right Side - Hidden on mobile, visible on larger screens */}
            <div className="hidden md:block w-full lg:w-1/2 h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[600px] relative items-center justify-center mt-6 lg:mt-0">
              {splineLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="flex flex-col items-center"></div>
                </div>
              )}
              <div className="relative">
                <img
                  src={HomeLogo}
                  alt="Programmer Logo"
                  className="max-w-full max-h-full object-contain"
                  onLoad={handleSplineLoad}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Side Elements - reduced or hidden on mobile */}
        <div className="hidden sm:block absolute -left-16 md:-left-24 lg:-left-32 top-1/2 -translate-y-1/2 w-32 sm:w-40 md:w-48 lg:w-64 h-32 sm:h-40 md:h-48 lg:h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="hidden sm:block absolute -right-16 md:-right-24 lg:-right-32 top-1/3 w-32 sm:w-40 md:w-48 lg:w-64 h-32 sm:h-40 md:h-48 lg:h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

        {/* Bottom gradient - simplified for better performance */}
        <div className="absolute bottom-0 left-0 w-full h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24 overflow-hidden bg-gradient-to-b from-transparent to-gray-900 backdrop-blur-sm">
          <div className="absolute inset-0 opacity-20 sm:opacity-30">
            {/* Reduced number of decorative dots on mobile */}
            <div className="absolute h-1 w-1 rounded-full bg-purple-500 top-1/4 left-1/4"></div>
            <div className="absolute h-1.5 xs:h-2 w-1.5 xs:w-2 rounded-full bg-blue-500 top-1/3 left-1/2"></div>
            <div className="hidden sm:block absolute h-1 w-1 rounded-full bg-purple-500 top-1/2 left-3/4"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
