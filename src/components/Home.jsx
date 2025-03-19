import { Fade, Zoom } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

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
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/5 sm:bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/5 sm:bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

          {/* Center orb - hidden on smallest screens */}
          <div className="hidden xs:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] sm:w-[40rem] h-[30rem] sm:h-[40rem] bg-purple-900/10 sm:bg-purple-900/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Content Container with improved spacing for all devices */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="text-center space-y-6 sm:space-y-8">
            {/* Main Heading with better size scaling */}
            <Fade cascade delay={300}>
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl"></div>
                <h1 className="relative text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                    Kenneth P. Gaviola
                  </span>
                  <Fade cascade delay={700}>
                    <div className="mt-3 sm:mt-4 text-xl xs:text-2xl sm:text-3xl text-gray-300 font-light">
                      Software Developer
                    </div>
                  </Fade>
                  <Fade cascade delay={900}>
                    <div className="mt-1 sm:mt-2 text-lg xs:text-xl text-purple-400">
                      Mobile & Web Application Specialist
                    </div>
                  </Fade>
                </h1>
              </div>
            </Fade>

            {/* Status Badge with Animation - more compact on mobile */}
            <Zoom delay={1500}>
              <div className="flex justify-center">
                <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  <span className="text-sm sm:text-base text-gray-300">
                    Available for Contract Work
                  </span>
                </div>
              </div>
            </Zoom>

            {/* Call to action button */}
            <Fade delay={1800}>
              <div className="mt-8 flex justify-center">
                <button
                  onClick={goToAbout}
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Learn More About Me
                </button>
              </div>
            </Fade>
          </div>
        </div>

        {/* Decorative Side Elements - reduced or hidden on mobile */}
        <div className="hidden sm:block absolute -left-32 top-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="hidden sm:block absolute -right-32 top-1/3 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

        {/* Bottom gradient - simplified for better performance */}
        <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 overflow-hidden bg-gradient-to-b from-transparent to-gray-900 backdrop-blur-sm">
          <div className="absolute inset-0 opacity-20 sm:opacity-30">
            {/* Reduced number of decorative dots on mobile */}
            <div className="absolute h-1 w-1 rounded-full bg-purple-500 top-1/4 left-1/4"></div>
            <div className="absolute h-2 w-2 rounded-full bg-blue-500 top-1/3 left-1/2"></div>
            <div className="hidden sm:block absolute h-1 w-1 rounded-full bg-purple-500 top-1/2 left-3/4"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
