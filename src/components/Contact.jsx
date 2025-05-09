import { useEffect, useState } from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { Mail, Github, Linkedin, MapPin, Send, Loader2 } from "lucide-react";

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);

    // Check if mobile on initial load
    checkIfMobile();

    // Add resize listener
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const checkIfMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // You could add success message handling here
    }, 1500);
  };

  return (
    <main id="main-content" className={isMobile ? "pt-16" : ""}>
      <section className="w-full py-12 md:py-40 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
        {/* Optimized Background Decorations - Less intensive for mobile */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-48 md:w-64 h-48 md:h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-48 md:w-64 h-48 md:h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          {/* Only show center decoration on non-mobile */}
          {!isMobile && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-pulse"></div>
          )}
          {/* Simplified grid background for mobile */}
          <div className="absolute inset-0 bg-grid-white/[0.03] md:bg-grid-white/[0.05] bg-[size:15px_15px] md:bg-[size:20px_20px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header with Animation - Mobile optimized */}
          <Fade duration={800} triggerOnce>
            <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8 relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-white bg-gradient-to-r from-purple-400 to-blue-400 relative">
                Let&apos;s Connect
              </h2>
              <div className="h-1 w-12 md:w-16 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2"></div>
              <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-400 relative px-4">
                Looking for opportunities and excited to collaborate on new
                projects
              </p>
            </div>
          </Fade>

          {/* Two-column layout for contact info and form - Stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
            {/* Contact Links Column */}
            <Zoom duration={800} delay={200} triggerOnce>
              <div className="bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm p-4 md:p-6 hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="space-y-2 md:space-y-3 relative">
                  <Slide
                    direction="left"
                    delay={300}
                    cascade={isMobile}
                    triggerOnce
                  >
                    <a
                      href="mailto:justken2000@gmail.com"
                      className="group flex items-center p-2 md:p-3 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                    >
                      <div className="p-1.5 md:p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors duration-300">
                        <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-400" />
                      </div>
                      <div className="ml-2 md:ml-3">
                        <p className="text-xs text-gray-400">Email</p>
                        <p className="text-white text-xs md:text-sm group-hover:text-purple-400 transition-colors duration-300 break-all">
                          justken2000@gmail.com
                        </p>
                      </div>
                    </a>
                  </Slide>

                  <Slide
                    direction="left"
                    delay={isMobile ? 0 : 400}
                    triggerOnce
                  >
                    <a
                      href="https://linkedin.com"
                      className="group flex items-center p-2 md:p-3 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                    >
                      <div className="p-1.5 md:p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors duration-300">
                        <Linkedin className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-400" />
                      </div>
                      <div className="ml-2 md:ml-3">
                        <p className="text-xs text-gray-400">LinkedIn</p>
                        <p className="text-white text-xs md:text-sm group-hover:text-purple-400 transition-colors duration-300">
                          Justine Kenneth Gaviola
                        </p>
                      </div>
                    </a>
                  </Slide>

                  <Slide
                    direction="left"
                    delay={isMobile ? 0 : 500}
                    triggerOnce
                  >
                    <a
                      href="https://github.com"
                      className="group flex items-center p-2 md:p-3 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                    >
                      <div className="p-1.5 md:p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors duration-300">
                        <Github className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-400" />
                      </div>
                      <div className="ml-2 md:ml-3">
                        <p className="text-xs text-gray-400">GitHub</p>
                        <p className="text-white text-xs md:text-sm group-hover:text-purple-400 transition-colors duration-300">
                          Kenneth14031129
                        </p>
                      </div>
                    </a>
                  </Slide>

                  {/* Location Info with Animation */}
                  <Fade delay={isMobile ? 0 : 600} triggerOnce>
                    <div className="relative mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-700/50">
                      <div className="flex items-center justify-center gap-2 text-gray-300">
                        <MapPin className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
                        <span className="text-xs md:text-sm">
                          Available for remote
                        </span>
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
            </Zoom>

            {/* Contact Form Column - Mobile optimized */}
            <Zoom duration={800} delay={isMobile ? 0 : 300} triggerOnce>
              <div className="bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm p-4 md:p-6 hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <Fade delay={isMobile ? 0 : 400} triggerOnce>
                  <h3 className="text-center text-base md:text-lg font-semibold text-white mb-3 md:mb-4">
                    Send a Message
                  </h3>

                  <form
                    className="space-y-2 md:space-y-3"
                    onSubmit={handleSubmit}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                      <div>
                        <label htmlFor="name" className="sr-only">
                          Your Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          className="w-full p-2 text-xs md:text-sm bg-gray-900/50 rounded-lg border border-gray-700 text-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-300 placeholder-gray-500"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="sr-only">
                          Your Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full p-2 text-xs md:text-sm bg-gray-900/50 rounded-lg border border-gray-700 text-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-300 placeholder-gray-500"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="sr-only">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        className="w-full p-2 text-xs md:text-sm bg-gray-900/50 rounded-lg border border-gray-700 text-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-300 placeholder-gray-500"
                        placeholder="Subject"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="sr-only">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={isMobile ? "3" : "4"}
                        className="w-full p-2 text-xs md:text-sm bg-gray-900/50 rounded-lg border border-gray-700 text-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-300 placeholder-gray-500"
                        placeholder="How can I help you?"
                        required
                      ></textarea>
                    </div>

                    <div className="flex justify-center pt-1">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs md:text-sm rounded-lg font-medium hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20 disabled:opacity-70 disabled:hover:translate-y-0 flex items-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-3 h-3 animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3 h-3" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </Fade>
              </div>
            </Zoom>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
