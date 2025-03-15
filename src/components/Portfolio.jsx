import { useState, useEffect } from "react";
import {
  FileText,
  Code,
  Mail,
  Github,
  Linkedin,
  MonitorIcon,
  SmartphoneIcon,
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import profileImage from "../assets/Profile.jfif";
import { Fade, Slide, Zoom, Bounce } from "react-awesome-reveal";
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

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState("home");

  const projects = [
    {
      id: 1,
      title: "LIFEEC: Web Application",
      description:
        "An advanced web platform designed for owners and administrators of HomeMedix.",
      tags: ["React.js", "Node.js", "MongoDB", "REST API"],
      Icon: MonitorIcon,
      iconColor: "text-violet-400",
      stats: {
        users: "Owner & Admin",
        type: "Capstone Project",
        platform: "Web",
      },
    },
    {
      id: 2,
      title: "LIFEEC: Mobile Application",
      description:
        "Multi-role mobile platform serving nurses, relatives, and nutritionists at HomeMedix.",
      tags: ["Flutter", "Dart", "MongoDB", "REST API", "Real-time Updates"],
      isAndroidApp: true,
      Icon: SmartphoneIcon,
      iconColor: "text-green-400",
      stats: {
        users: "Nurse, Relative, Nutritionist",
        type: "Capstone Project",
        platform: "Android",
      },
    },
  ];

  useEffect(() => {
    if (isVisible.projects) {
      setActiveTab("projects");
    }
  }, [isVisible.projects]);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        setIsVisible((prev) => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting,
        }));
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "50px",
    });

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 font-[Poppins]">
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-[100dvh] bg-gradient-to-r from-black via-gray-900 to-black text-white overflow-hidden flex items-center"
        >
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

              {/* Scroll Indicator - hidden on smaller screens */}
              <Bounce delay={2100}>
                <div className="absolute sm:bottom-15 left-1/2 -translate-x-1/2 hidden sm:block">
                  <div className="w-6 h-10 rounded-full border-2 border-purple-400 flex justify-center p-1">
                    <div className="w-1 h-2 rounded-full bg-purple-400 animate-scroll"></div>
                  </div>
                </div>
              </Bounce>
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

        {/* About Section with Animations */}
        <section
          id="about"
          className={`py-24 scroll-mt-24 bg-gradient-to-br from-black to-gray-900 transition-all duration-1000 relative ${
            isVisible.about
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Animated Background Orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-purple-900/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          {/* Section Header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-12">
            <Fade duration={1000}>
              <div className="text-center">
                <h2 className="text-4xl font-bold bg-clip-text text-white bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
                  About Me
                </h2>
                <div className="h-1 w-20 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
              </div>
            </Fade>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="bg-gray-800/30 rounded-2xl border border-gray-700/50 backdrop-blur-sm relative overflow-hidden">
              {/* Main Content Grid - Restructured for Width */}
              <div className="grid grid-cols-12 gap-4 sm:gap-6 p-4 sm:p-6 md:p-8">
                {/* Left Column - Profile */}
                <div className="col-span-12 lg:col-span-3">
                  <Slide direction="left" duration={1000} triggerOnce>
                    <div className="flex flex-col items-center lg:sticky lg:top-24">
                      {/* Profile Picture */}
                      <div className="relative w-24 h-24 sm:w-32 sm:h-32 group perspective mb-4 sm:mb-6">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 animate-tilt"></div>
                        <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full border-3 sm:border-4 border-gray-800 overflow-hidden backdrop-blur-sm transform-gpu transition-transform duration-700 group-hover:scale-105">
                          <img
                            src={profileImage}
                            alt="Profile"
                            className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
                          />
                        </div>
                      </div>

                      {/* Name and Title */}
                      <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 text-center">
                        Kenneth P. Gaviola
                      </h2>
                      <p className="mt-2 text-purple-400 text-lg">
                        Software Developer
                      </p>
                      <p className="text-gray-400">Quezon City, Metro Manila</p>

                      {/* Social Links */}
                      <div className="flex justify-center gap-4 mt-4">
                        <a
                          href="mailto:justken2000@gmail.com"
                          className="group p-2 bg-gray-800/50 rounded-lg text-gray-300 hover:bg-purple-900/20 hover:text-purple-400 transition-all duration-300"
                        >
                          <Mail className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" />
                        </a>
                        <a
                          href="https://github.com"
                          className="group p-2 bg-gray-800/50 rounded-lg text-gray-300 hover:bg-purple-900/20 hover:text-purple-400 transition-all duration-300"
                        >
                          <Github className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" />
                        </a>
                        <a
                          href="https://linkedin.com"
                          className="group p-2 bg-gray-800/50 rounded-lg text-gray-300 hover:bg-purple-900/20 hover:text-purple-400 transition-all duration-300"
                        >
                          <Linkedin className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" />
                        </a>
                      </div>

                      {/* Education Section */}
                      <div className="mt-6 w-full">
                        <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                          <h4 className="font-medium text-white flex items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 text-purple-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M12 14l9-5-9-5-9 5 9 5z" />
                              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z" />
                            </svg>
                            BS Information Technology
                          </h4>
                          <p className="text-sm text-purple-400">
                            Mobile & Web Application
                          </p>
                          <p className="text-sm text-gray-400 mt-1">
                            2023 - Present
                          </p>
                        </div>
                      </div>
                    </div>
                  </Slide>
                </div>

                {/* Middle Column - Professional Summary & Current Focus */}
                <div className="col-span-12 lg:col-span-4">
                  <Fade delay={400} duration={1000} triggerOnce>
                    {/* Professional Summary */}
                    <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 mb-4 sm:mb-6">
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                        <div className="p-2 bg-purple-500/10 rounded-lg">
                          <FileText className="w-5 h-5 text-purple-400" />
                        </div>
                        Professional Summary
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        Currently pursuing my degree with a focus on creating
                        user-centric applications. I&apos;m passionate about
                        learning new technologies and applying them to solve
                        real-world problems through my academic projects.
                        Seeking opportunities to contribute to innovative
                        projects and expand my technical expertise.
                      </p>
                    </div>
                  </Fade>

                  <Fade delay={600} duration={1000} triggerOnce>
                    {/* Current Focus */}
                    <div className="space-y-3">
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                        <div className="p-2 bg-purple-500/10 rounded-lg">
                          <Code className="w-5 h-5 text-purple-400" />
                        </div>
                        Current Focus
                      </h3>
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
                        <Zoom
                          delay={700 + index * 100}
                          duration={800}
                          key={item.text}
                          triggerOnce
                        >
                          <div className="group flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                              {item.icon}
                            </span>
                            <div>
                              <span className="text-gray-300 font-medium">
                                {item.text}
                              </span>
                              <p className="text-xs text-gray-400">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </Zoom>
                      ))}
                    </div>
                  </Fade>
                </div>

                {/* Right Column - Tech Stack */}
                <div className="col-span-12 lg:col-span-5">
                  <Slide direction="right" duration={1000} triggerOnce>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                      <div className="p-2 bg-purple-500/10 rounded-lg">
                        <Code className="w-5 h-5 text-purple-400" />
                      </div>
                      Tech Stack
                    </h3>

                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 p-6 relative overflow-hidden group">
                      {/* Interactive background effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                      <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100"></div>
                      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200"></div>

                      {/* Tech Stack Categories */}
                      <div className="relative">
                        {/* Programming Languages Section */}
                        <div className="mb-8">
                          <h4 className="text-lg font-medium text-purple-400 mb-4 pb-2 border-b border-gray-700/30 relative">
                            <span className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-500 after:to-blue-500 after:w-0 after:group-hover:w-full after:transition-all after:duration-1000">
                              Programming Languages
                            </span>
                          </h4>
                          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                            {[
                              { image: javascriptImage },
                              { image: cImage },
                              { image: cPlusPlusImage },
                              { image: javaImage },
                              { image: kotlinImage },
                            ].map((tech, index) => (
                              <Zoom
                                key={index}
                                delay={100 * index}
                                duration={800}
                                triggerOnce
                              >
                                <div className="group/icon relative transform perspective-1000 transition-all duration-300 hover:z-10">
                                  <div className="aspect-square bg-gray-800/50 rounded-lg overflow-hidden flex items-center justify-center p-3 border border-gray-700/30 hover:border-purple-500/50 shadow-lg shadow-transparent hover:shadow-purple-500/10 transition-all duration-500 group-hover/icon:scale-110 group-hover/icon:rotate-3 transform-gpu">
                                    <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative w-full h-full">
                                      <img
                                        src={tech.image}
                                        alt=""
                                        className="w-full h-full object-contain transition-all duration-500 group-hover/icon:scale-110 group-hover/icon:filter group-hover/icon:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                                      />
                                    </div>
                                  </div>
                                  {/* Pulsing glow effect on hover */}
                                  <div className="absolute inset-0 -z-10 rounded-lg bg-purple-500/0 group-hover/icon:bg-purple-500/20 blur-xl transition-all duration-500 opacity-0 group-hover/icon:opacity-100 animate-pulse-slow"></div>
                                </div>
                              </Zoom>
                            ))}
                          </div>
                        </div>

                        {/* Web Development Section */}
                        <div className="mb-8">
                          <h4 className="text-lg font-medium text-purple-400 mb-4 pb-2 border-b border-gray-700/30 relative">
                            <span className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-500 after:to-blue-500 after:w-0 after:group-hover:w-full after:transition-all after:duration-1000 after:delay-100">
                              Web Development
                            </span>
                          </h4>
                          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                            {[
                              { image: htmlImage },
                              { image: cssImage },
                              { image: reactImage },
                              { image: nodejsImage },
                            ].map((tech, index) => (
                              <Zoom
                                key={index}
                                delay={200 * index}
                                duration={800}
                                triggerOnce
                              >
                                <div className="group/icon relative transform perspective-1000 transition-all duration-300 hover:z-10">
                                  <div className="aspect-square bg-gray-800/50 rounded-lg overflow-hidden flex items-center justify-center p-3 border border-gray-700/30 hover:border-purple-500/50 shadow-lg shadow-transparent hover:shadow-purple-500/10 transition-all duration-500 group-hover/icon:scale-110 group-hover/icon:rotate-3 transform-gpu">
                                    <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative w-full h-full">
                                      <img
                                        src={tech.image}
                                        alt=""
                                        className="w-full h-full object-contain transition-all duration-500 group-hover/icon:scale-110 group-hover/icon:filter group-hover/icon:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                                      />
                                    </div>
                                  </div>
                                  {/* Pulsing glow effect on hover */}
                                  <div className="absolute inset-0 -z-10 rounded-lg bg-purple-500/0 group-hover/icon:bg-purple-500/20 blur-xl transition-all duration-500 opacity-0 group-hover/icon:opacity-100 animate-pulse-slow"></div>
                                </div>
                              </Zoom>
                            ))}
                          </div>
                        </div>

                        {/* Mobile Development Section */}
                        <div className="mb-8">
                          <h4 className="text-lg font-medium text-purple-400 mb-4 pb-2 border-b border-gray-700/30 relative">
                            <span className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-500 after:to-blue-500 after:w-0 after:group-hover:w-full after:transition-all after:duration-1000 after:delay-200">
                              Mobile Development
                            </span>
                          </h4>
                          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                            {[
                              { image: flutterImage },
                              { image: androidStudioImage },
                            ].map((tech, index) => (
                              <Zoom
                                key={index}
                                delay={300 * index}
                                duration={800}
                                triggerOnce
                              >
                                <div className="group/icon relative transform perspective-1000 transition-all duration-300 hover:z-10">
                                  <div className="aspect-square bg-gray-800/50 rounded-lg overflow-hidden flex items-center justify-center p-3 border border-gray-700/30 hover:border-purple-500/50 shadow-lg shadow-transparent hover:shadow-purple-500/10 transition-all duration-500 group-hover/icon:scale-110 group-hover/icon:rotate-3 transform-gpu">
                                    <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative w-full h-full">
                                      <img
                                        src={tech.image}
                                        alt=""
                                        className="w-full h-full object-contain transition-all duration-500 group-hover/icon:scale-110 group-hover/icon:filter group-hover/icon:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                                      />
                                    </div>
                                  </div>
                                  {/* Pulsing glow effect on hover */}
                                  <div className="absolute inset-0 -z-10 rounded-lg bg-purple-500/0 group-hover/icon:bg-purple-500/20 blur-xl transition-all duration-500 opacity-0 group-hover/icon:opacity-100 animate-pulse-slow"></div>
                                </div>
                              </Zoom>
                            ))}
                          </div>
                        </div>

                        {/* Tools & Databases Section */}
                        <div>
                          <h4 className="text-lg font-medium text-purple-400 mb-4 pb-2 border-b border-gray-700/30 relative">
                            <span className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-500 after:to-blue-500 after:w-0 after:group-hover:w-full after:transition-all after:duration-1000 after:delay-300">
                              Tools & Databases
                            </span>
                          </h4>
                          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                            {[
                              { image: mongodbImage },
                              { image: mysqlImage },
                              { image: gitImage },
                              { image: githubImage },
                              { image: vsCodeImage },
                            ].map((tech, index) => (
                              <Zoom
                                key={index}
                                delay={400 * index}
                                duration={800}
                                triggerOnce
                              >
                                <div className="group/icon relative transform perspective-1000 transition-all duration-300 hover:z-10">
                                  <div className="aspect-square bg-gray-800/50 rounded-lg overflow-hidden flex items-center justify-center p-3 border border-gray-700/30 hover:border-purple-500/50 shadow-lg shadow-transparent hover:shadow-purple-500/10 transition-all duration-500 group-hover/icon:scale-110 group-hover/icon:rotate-3 transform-gpu">
                                    <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative w-full h-full">
                                      <img
                                        src={tech.image}
                                        alt=""
                                        className="w-full h-full object-contain transition-all duration-500 group-hover/icon:scale-110 group-hover/icon:filter group-hover/icon:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                                      />
                                    </div>
                                  </div>
                                  {/* Pulsing glow effect on hover */}
                                  <div className="absolute inset-0 -z-10 rounded-lg bg-purple-500/0 group-hover/icon:bg-purple-500/20 blur-xl transition-all duration-500 opacity-0 group-hover/icon:opacity-100 animate-pulse-slow"></div>
                                </div>
                              </Zoom>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden bg-gradient-to-b from-transparent to-gray-900 backdrop-blur-sm">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute h-1 w-1 rounded-full bg-purple-500 top-1/4 left-1/4"></div>
              <div className="absolute h-2 w-2 rounded-full bg-blue-500 top-1/3 left-1/2"></div>
              <div className="absolute h-1 w-1 rounded-full bg-purple-500 top-1/2 left-3/4"></div>
              {/* Add more dots with varied positions and sizes */}
            </div>
          </div>
        </section>

        {/* Portfolio Showcase Section */}
        <section
          id="projects"
          className={`py-24 scroll-mt-24 bg-gradient-to-br from-gray-900 to-black transition-all duration-1000 relative ${
            isVisible.projects
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Animated Background Orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-purple-900/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Section Header */}
            <Fade duration={1000}>
              <div className="text-center mb-8 sm:mb-16 relative">
                <div className="inline-block">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
                    Portfolio Showcase
                  </h2>
                  <div className="h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                </div>
                <p className="mt-4 sm:mt-6 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                  Exploring my journey through innovative projects and
                  achievements
                </p>
              </div>
            </Fade>

            {/* Enhanced Tab Buttons */}
            <Zoom duration={800} delay={300}>
              <div className="flex justify-center gap-2 sm:gap-6 mb-8 sm:mb-16">
                <button
                  onClick={() => setActiveTab("projects")}
                  className={`group relative px-4 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 overflow-hidden ${
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
                  <div className="relative flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    <span>Projects</span>
                  </div>
                  {activeTab === "projects" && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></div>
                  )}
                </button>

                <button
                  onClick={() => setActiveTab("certificates")}
                  className={`group relative px-4 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 overflow-hidden ${
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
                  <div className="relative flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    <span>Certificates</span>
                  </div>
                  {activeTab === "certificates" && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></div>
                  )}
                </button>
              </div>
            </Zoom>

            {/* Projects Content */}
            {activeTab === "projects" && (
              <div className="grid gap-8 md:grid-cols-2">
                {projects.map((project, index) => (
                  <Fade
                    key={project.id}
                    direction={index % 2 === 0 ? "left" : "right"}
                    triggerOnce
                    duration={1000}
                    delay={index * 200}
                  >
                    <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500">
                      {/* Enhanced Hover Backdrop */}
                      <div className="absolute inset-0 bg-gradient-to-b from-purple-600/0 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative aspect-w-16 aspect-h-9 bg-gray-900/50 flex items-center justify-center p-12">
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <project.Icon
                            className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 ${project.iconColor} transition-transform duration-500 group-hover:scale-110`}
                          />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>

                        {/* Project Type Badge */}
                        <div className="absolute top-4 right-4">
                          <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-300 text-sm border border-purple-500/20 font-medium">
                            {project.stats.type}
                          </span>
                        </div>
                      </div>

                      <div className="relative p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
                        {/* Enhanced Title and Description */}
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="mt-2 sm:mt-3 text-gray-300 text-base sm:text-lg leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* Enhanced Tech Stack */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <Fade
                              key={tag}
                              delay={500 + tagIndex * 100}
                              cascade
                            >
                              <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-700/50 text-gray-300 rounded-lg text-xs sm:text-sm border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300 font-medium">
                                {tag}
                              </span>
                            </Fade>
                          ))}
                        </div>

                        {/* Enhanced Project Stats */}
                        <div className="grid grid-cols-3 gap-2 sm:gap-6 py-4 sm:py-6 border-t border-gray-700/50">
                          {Object.entries(project.stats).map(
                            ([key, value], statIndex) => (
                              <Fade
                                key={key}
                                delay={700 + statIndex * 100}
                                cascade
                              >
                                <div className="text-center">
                                  <div className="text-purple-400 font-semibold text-sm sm:text-base">
                                    {value}
                                  </div>
                                  <div className="text-xs sm:text-sm text-gray-400 capitalize mt-0.5 sm:mt-1">
                                    {key}
                                  </div>
                                </div>
                              </Fade>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </Fade>
                ))}
              </div>
            )}

            {/* Certificates Content */}
            {activeTab === "certificates" && (
              <Zoom duration={1000} delay={300}>
                <div className="max-w-2xl mx-auto text-center">
                  <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-5 sm:p-8 hover:border-purple-500/50 transition-all duration-500">
                    {/* Coming Soon Icon */}
                    <Bounce delay={600}>
                      <div className="flex justify-center mb-4 sm:mb-6">
                        <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400" />
                      </div>
                    </Bounce>

                    {/* Message */}
                    <Fade cascade delay={800}>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                        Certificates Coming Soon
                      </h3>
                      <p className="text-gray-400 text-base sm:text-lg mb-4 sm:mb-6">
                        Currently working on gaining certifications in various
                        technology areas. Check back later for updates!
                      </p>
                    </Fade>

                    {/* Progress Indicator */}
                    <Fade delay={1200}>
                      <div className="inline-flex items-center gap-2 text-purple-400">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <span>In Progress</span>
                      </div>
                    </Fade>
                  </div>
                </div>
              </Zoom>
            )}
          </div>

          <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden bg-gradient-to-b from-transparent to-gray-900 backdrop-blur-sm">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute h-1 w-1 rounded-full bg-purple-500 top-1/4 left-1/4"></div>
              <div className="absolute h-2 w-2 rounded-full bg-blue-500 top-1/3 left-1/2"></div>
              <div className="absolute h-1 w-1 rounded-full bg-purple-500 top-1/2 left-3/4"></div>
              {/* Add more dots with varied positions and sizes */}
            </div>
          </div>
        </section>

        {/* Contact Section with Animations */}
        <section
          id="contact"
          className={`py-24 scroll-mt-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 transition-all duration-1000 relative ${
            isVisible.contact
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Enhanced Background Decorations */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Top-left orb */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>

            {/* Bottom-right orb */}
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

            {/* Center orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-purple-900/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

            {/* Additional decorative orbs */}
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-2xl animate-pulse delay-500"></div>
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-600/5 rounded-full blur-2xl animate-pulse delay-300"></div>

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Section Header with Animation */}
            <Fade duration={1000} triggerOnce>
              <div className="text-center max-w-2xl mx-auto mb-16 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 blur-3xl"></div>
                <h2 className="text-4xl font-bold bg-clip-text text-white bg-gradient-to-r from-purple-400 to-blue-400 relative">
                  Let&apos;s Connect
                </h2>
                <div className="h-1 w-20 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-4"></div>
                <p className="mt-6 text-lg text-gray-400 relative">
                  Looking for opportunities and excited to collaborate on new
                  projects
                </p>
              </div>
            </Fade>

            {/* Contact Cards - Centered Layout with Animation */}
            <Zoom duration={800} delay={300} triggerOnce>
              <div className="max-w-2xl mx-auto">
                <div className="bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm p-8 hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden group">
                  {/* Card background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Contact Links with Staggered Animation */}
                  <div className="space-y-4 relative">
                    <Slide direction="left" delay={500} triggerOnce>
                      <a
                        href="mailto:justken2000@gmail.com"
                        className="group flex items-center p-4 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                      >
                        <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors duration-300">
                          <Mail className="w-5 h-5 text-purple-400" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm text-gray-400">Email</p>
                          <p className="text-white group-hover:text-purple-400 transition-colors duration-300">
                            justken2000@gmail.com
                          </p>
                        </div>
                      </a>
                    </Slide>

                    <Slide direction="right" delay={700} triggerOnce>
                      <a
                        href="https://linkedin.com"
                        className="group flex items-center p-4 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                      >
                        <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors duration-300">
                          <Linkedin className="w-5 h-5 text-purple-400" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm text-gray-400">LinkedIn</p>
                          <p className="text-white group-hover:text-purple-400 transition-colors duration-300">
                            Justine Kenneth Gaviola
                          </p>
                        </div>
                      </a>
                    </Slide>

                    <Slide direction="left" delay={900} triggerOnce>
                      <a
                        href="https://github.com"
                        className="group flex items-center p-4 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                      >
                        <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors duration-300">
                          <Github className="w-5 h-5 text-purple-400" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm text-gray-400">GitHub</p>
                          <p className="text-white group-hover:text-purple-400 transition-colors duration-300">
                            Kenneth14031129
                          </p>
                        </div>
                      </a>
                    </Slide>

                    {/* Location Info with Animation */}
                    <Fade delay={1100} triggerOnce>
                      <div className="relative pt-4 mt-6 border-t border-gray-700/50">
                        <div className="flex items-center justify-center gap-2 text-gray-300">
                          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                          <span>
                            Available for remote & on-site opportunities
                          </span>
                        </div>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden bg-gradient-to-b from-transparent to-gray-900 backdrop-blur-sm">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute h-1 w-1 rounded-full bg-purple-500 top-1/4 left-1/4"></div>
              <div className="absolute h-2 w-2 rounded-full bg-blue-500 top-1/3 left-1/2"></div>
              <div className="absolute h-1 w-1 rounded-full bg-purple-500 top-1/2 left-3/4"></div>
              {/* Add more dots with varied positions and sizes */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
