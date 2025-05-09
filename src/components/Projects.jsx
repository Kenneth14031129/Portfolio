import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  FileText,
  MonitorIcon,
  SmartphoneIcon,
  Eye,
  ChevronRight,
} from "lucide-react";
import ImageViewer from "./ImageViewer";
import dashboardImg from "../assets/Dashboard.png";
import addResidentImg from "../assets/Add-Resident.png";
import addUserImg from "../assets/Add-User.png";
import archiveImg from "../assets/Archive.png";
import loginImg from "../assets/Login.png";
import forgotPasswordImg from "../assets/Forgot-Password.png";
import messagesImg from "../assets/Messages.png";
import myProfileImg from "../assets/My-Profile.png";
import residentListImg from "../assets/Resident-List.png";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [isMobile, setIsMobile] = useState(false);
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [activeProjectId, setActiveProjectId] = useState(null);
  const projectRefs = useRef({});

  // Check if mobile and set up window resize listener
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add resize listener
    window.addEventListener("resize", checkIfMobile);

    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "LIFEEC: Web Application",
      description:
        "An advanced web platform designed for owners and administrators of HomeMedix, providing comprehensive management tools and analytics.",
      detailedDescription:
        "LIFEEC web application enables HomeMedix administrators to efficiently manage residents, staff, and operations through an intuitive interface. The platform includes real-time analytics, automated scheduling, and communication tools that streamline facility management.",
      tags: [
        "React",
        "NodeJS",
        "MongoDB",
        "Tailwind CSS",
        "Javascript",
        "Express.js",
      ],
      Icon: MonitorIcon,
      iconColor: "text-violet-500",
      highlights: [
        "Intuitive Admin Dashboard",
        "Real-time Analytics",
        "Comprehensive User Management",
        "Secure Authentication System",
        "Responsive Design",
      ],
      images: [
        loginImg,
        forgotPasswordImg,
        dashboardImg,
        myProfileImg,
        addUserImg,
        addResidentImg,
        residentListImg,
        archiveImg,
        messagesImg,
      ],
    },
    {
      id: 2,
      title: "LIFEEC: Mobile Application",
      description:
        "Multi-role mobile platform serving nurses, relatives, and nutritionists at HomeMedix, enabling seamless communication and care coordination.",
      detailedDescription:
        "The LIFEEC mobile application serves as a companion to the web platform, allowing healthcare staff to access critical information on the go. Nurses can update patient records in real-time, relatives can stay informed about their loved ones, and nutritionists can manage dietary plans efficiently.",
      tags: ["Flutter", "Dart", "MongoDB", "Javascript"],
      isAndroidApp: true,
      Icon: SmartphoneIcon,
      iconColor: "text-emerald-500",
      highlights: [
        "Cross-platform Compatibility",
        "Real-time Alerts",
        "Intuitive User Interface",
        "Secure Patient Data",
      ],
      images: [],
    },
  ];

  const handleViewImages = (project) => {
    setCurrentProject(project);
    setShowImageViewer(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  const handleCloseViewer = () => {
    setShowImageViewer(false);
    setCurrentProject(null);
    // Re-enable scrolling
    document.body.style.overflow = "auto";
  };

  const handleProjectClick = (id) => {
    setActiveProjectId(activeProjectId === id ? null : id);

    // If we're opening a project, scroll to it after a short delay to allow animation
    if (activeProjectId !== id) {
      setTimeout(() => {
        projectRefs.current[id]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
  };

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const tabVariants = {
    inactive: {
      opacity: 0.7,
      scale: 0.98,
    },
    active: {
      opacity: 1,
      scale: 1,
    },
  };

  // Project detail expansion animation
  const expandVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { height: "auto", opacity: 1 },
  };

  return (
    <main className={`${isMobile ? "pt-16" : ""}`}>
      <section className="min-h-screen py-16 md:py-32 relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-black -z-10">
          <div className="absolute inset-0">
            {/* Dynamic grid pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            ></div>

            {/* Floating orbs/particles */}
            <div className="hidden md:block absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-violet-500/5 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-indigo-500/10 blur-3xl animate-pulse delay-700"></div>
            <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="inline-flex items-center text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400">
              <span>Portfolio</span>
              <span className="mx-3 text-white/80">/</span>
              <span>Projects</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-lg">
              Showcasing the solutions I&apos;ve designed and developed
            </p>
          </motion.div>

          {/* Enhanced Tab Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center gap-4 mb-12 md:mb-16"
          >
            <motion.button
              onClick={() => setActiveTab("projects")}
              variants={tabVariants}
              animate={activeTab === "projects" ? "active" : "inactive"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="relative px-6 md:px-8 py-3 md:py-4 rounded-xl text-sm md:text-base font-medium overflow-hidden group"
            >
              <div className="absolute inset-0 rounded-xl backdrop-blur-md"></div>
              <div
                className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                  activeTab === "projects"
                    ? "opacity-100 bg-gradient-to-r from-purple-500 to-blue-500"
                    : "opacity-0 bg-gray-800 group-hover:opacity-100"
                }`}
              ></div>
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 bg-white/10"></div>
              <div className="relative flex items-center gap-2">
                <Code className="w-4 h-4 md:w-5 md:h-5 text-white" />
                <span className="text-white">Projects</span>
              </div>
              {activeTab === "projects" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                ></motion.div>
              )}
            </motion.button>

            <motion.button
              onClick={() => setActiveTab("certificates")}
              variants={tabVariants}
              animate={activeTab === "certificates" ? "active" : "inactive"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="relative px-6 md:px-8 py-3 md:py-4 rounded-xl text-sm md:text-base font-medium overflow-hidden group"
            >
              <div className="absolute inset-0 rounded-xl backdrop-blur-md"></div>
              <div
                className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                  activeTab === "certificates"
                    ? "opacity-100 bg-gradient-to-r from-purple-500 to-blue-500"
                    : "opacity-0 bg-gray-800 group-hover:opacity-100"
                }`}
              ></div>
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 bg-white/100"></div>
              <div className="relative flex items-center gap-2">
                <FileText className="w-4 h-4 md:w-5 md:h-5 text-white" />
                <span className="text-white">Certificates</span>
              </div>
              {activeTab === "certificates" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                ></motion.div>
              )}
            </motion.button>
          </motion.div>

          {/* Projects Content */}
          {activeTab === "projects" && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8 md:space-y-16"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  ref={(el) => (projectRefs.current[project.id] = el)}
                  variants={itemVariants}
                  className={`group relative bg-black/20 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-800 hover:border-indigo-500/30 transition-all duration-500 ${
                    activeProjectId === project.id
                      ? "ring-2 ring-indigo-500/50"
                      : ""
                  }`}
                >
                  {/* Hover Backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/0 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Project Header with Card-Flip Effect */}
                  <div
                    onClick={() => handleProjectClick(project.id)}
                    className="relative cursor-pointer p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 group"
                  >
                    {/* Project Icon with 3D Effect */}
                    <div className="relative flex-shrink-0">
                      <motion.div
                        whileHover={{ rotateY: 180, scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-16 h-16 md:w-20 md:h-20 bg-gray-800/50 rounded-xl flex items-center justify-center group-hover:shadow-lg"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-700/30 to-gray-900/30 rounded-xl"></div>
                        <project.Icon
                          className={`w-8 h-8 md:w-10 md:h-10 ${project.iconColor} transition-transform duration-500 group-hover:scale-110`}
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300 flex items-center">
                        {project.title}
                        <ChevronRight
                          className={`ml-2 w-5 h-5 transition-transform duration-300 ${
                            activeProjectId === project.id ? "rotate-90" : ""
                          }`}
                        />
                      </h3>
                      <p className="mt-2 text-gray-300 text-sm md:text-base leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-indigo-900/30 text-indigo-300 rounded-lg text-xs font-medium border border-indigo-800/50 hover:border-indigo-400/50 transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Expandable Project Details */}
                  <AnimatePresence>
                    {activeProjectId === project.id && (
                      <motion.div
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                        variants={expandVariants}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 md:p-8 pt-0 md:pt-0 border-t border-gray-800/50">
                          {/* Detailed Description */}
                          <div className="mb-6">
                            <h4 className="text-lg font-semibold text-indigo-300 mb-3">
                              Overview
                            </h4>
                            <p className="text-gray-300">
                              {project.detailedDescription}
                            </p>
                          </div>

                          {/* Key Highlights */}
                          <div className="mb-6">
                            <h4 className="text-lg font-semibold text-indigo-300 mb-3">
                              Key Highlights
                            </h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {project.highlights.map((highlight, index) => (
                                <li key={index} className="flex items-start">
                                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-600/20 flex items-center justify-center mt-0.5 mr-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                                  </div>
                                  <span className="text-gray-300 text-sm">
                                    {highlight}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Project Images Preview */}
                          <div>
                            <h4 className="text-lg font-semibold text-indigo-300 mb-3">
                              Screenshots
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                              {project.images
                                .slice(0, 4)
                                .map((image, index) => (
                                  <div
                                    key={index}
                                    onClick={(e) => {
                                      e.stopPropagation(); // Stop event propagation
                                      handleViewImages(project);
                                    }}
                                    className="relative aspect-video rounded-lg overflow-hidden group/image hover:ring-2 hover:ring-indigo-500/50 transition-all duration-300 cursor-pointer"
                                  >
                                    <img
                                      src={image}
                                      alt={`${project.title} screenshot ${
                                        index + 1
                                      }`}
                                      className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                      <Eye className="w-6 h-6 text-white" />
                                    </div>
                                  </div>
                                ))}
                            </div>

                            {project.images.length > 4 && (
                              <div className="text-center mt-4">
                                <span className="text-sm text-gray-400">
                                  +{project.images.length - 4} more screenshots
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Certificates Content */}
          {activeTab === "certificates" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative bg-black/30 backdrop-blur-md border border-gray-800 rounded-2xl p-8 md:p-12 overflow-hidden group hover:border-indigo-500/30 transition-all duration-500">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/5 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Certificate Icon */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex justify-center mb-8"
                >
                  <div className="relative">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-indigo-900/20 rounded-full flex items-center justify-center">
                      <FileText className="w-10 h-10 md:w-12 md:h-12 text-indigo-400" />
                    </div>
                    <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                  </div>
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-center space-y-4"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Certificates Coming Soon
                  </h3>

                  <p className="text-gray-300 max-w-md mx-auto">
                    I&apos;m currently working on expanding my skill set with
                    professional certifications. Stay tuned for updates!
                  </p>

                  {/* Progress Indicator */}
                  <div className="inline-flex items-center gap-2 text-indigo-400 mt-6">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">In Progress</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Image Viewer */}
      {showImageViewer && currentProject && (
        <ImageViewer project={currentProject} onClose={handleCloseViewer} />
      )}
    </main>
  );
};

export default Projects;
