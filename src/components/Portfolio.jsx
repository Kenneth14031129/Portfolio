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
      tags: ["React", "NodeJS", "MongoDB", "Tailwind CSS"],
      Icon: MonitorIcon,
      iconColor: "text-violet-400",
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

        {/* About Section with Enhanced Animations */}
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
            <div className="hidden sm:block absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-purple-900/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          {/* Section Header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-12">
            <Fade cascade damping={0.1} duration={800}>
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-white bg-gradient-to-r from-purple-400 to-blue-400 mb-2 sm:mb-4">
                  About Me
                </h2>
                <div className="h-1 w-20 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
              </div>
            </Fade>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Main content with glassmorphism effect */}
            <div className="backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl shadow-xl overflow-hidden relative">
              {/* Inner glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5"></div>

              {/* 3-column layout with improved spacing */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-8 p-4 sm:p-8">
                {/* Column 1: Profile & Bio - Centered on all screen sizes */}
                <div className="md:col-span-4 lg:col-span-3 flex flex-col items-center space-y-6">
                  {/* Enhanced profile image with 3D hover effect */}
                  <Zoom delay={300} duration={800}>
                    <div className="group perspective relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                      <div className="relative ring-2 ring-white/10 rounded-full group-hover:scale-105 transition duration-300">
                        <div className="aspect-square w-28 sm:w-36 h-28 sm:h-36 rounded-full overflow-hidden transform transition-all duration-500 shadow-xl">
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
                  <Fade cascade damping={0.2} delay={400} duration={1000}>
                    <div className="text-center space-y-4">
                      <h3 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                        Kenneth P. Gaviola
                      </h3>
                      <p className="text-purple-300 font-medium text-lg tracking-wide">
                        Software Developer
                      </p>
                      <p className="text-gray-400 text-sm">
                        Quezon City, Metro Manila
                      </p>
                    </div>
                  </Fade>

                  {/* Education card with 3D depth - centered */}
                  <Slide direction="up" delay={800} triggerOnce>
                    <div className="w-full max-w-xs">
                      <div className="group relative backdrop-blur-md bg-gray-800/40 rounded-xl p-4 border border-gray-700/50 overflow-hidden transition-all duration-300 hover:border-purple-500/40">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-300"></div>

                        {/* Top education icon */}
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
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
                          </div>
                          <h4 className="font-semibold text-white text-xs sm:text-sm">
                            BS Information Technology
                          </h4>
                        </div>

                        <div className="ml-12">
                          <p className="text-xs sm:text-sm text-purple-400 font-medium">
                            Mobile & Web Application
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                            <p className="text-sm text-gray-400">
                              2023 - Present
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slide>
                </div>

                {/* Column 2: Skills & Focus */}
                <div className="md:col-span-8 lg:col-span-4 space-y-4 sm:space-y-8">
                  {/* Current Focus with alignment matching Key Skills */}
                  <div>
                    <Fade cascade direction="left" damping={0.1} delay={300}>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                          <Code className="w-5 h-5 text-purple-400" />
                        </div>
                        Current Focus
                      </h3>
                    </Fade>

                    <div className="space-y-4">
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
                          direction="left"
                          delay={400 + index * 100}
                          key={item.text}
                          triggerOnce
                        >
                          <div className="group relative backdrop-blur-sm bg-gray-800/40 rounded-lg p-3 sm:p-4 border border-gray-700/50 overflow-hidden hover:border-purple-500/40 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-300"></div>

                            {/* Main content row with improved alignment */}
                            <div className="flex justify-between items-start">
                              <div className="flex items-start gap-3">
                                <div className="text-2xl group-hover:scale-110 transition-transform duration-300 mt-0.5">
                                  {item.icon}
                                </div>
                                <div>
                                  <h4 className="text-gray-200 font-medium">
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

                  {/* Skill bars with animations */}
                  <div>
                    <Fade cascade direction="left" damping={0.1} delay={800}>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-purple-400"
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
                    <div className="space-y-4">
                      {[
                        { name: "Frontend Development", percentage: 75 },
                        { name: "Backend Development", percentage: 60 },
                        { name: "Mobile Development", percentage: 70 },
                      ].map((skill, index) => (
                        <Slide
                          direction="left"
                          delay={900 + index * 150}
                          key={skill.name}
                          triggerOnce
                        >
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm font-medium text-gray-300">
                                {skill.name}
                              </span>
                              <span className="text-sm font-medium text-purple-400">
                                {skill.percentage}%
                              </span>
                            </div>
                            <div className="h-2.5 sm:h-2 w-full bg-gray-700/50 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transform origin-left transition-all duration-1500 ease-out"
                                style={{
                                  width: `${skill.percentage}%`,
                                  animation: `growWidth-${index} 1.5s ease-out forwards`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </Slide>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Column 3: Tech Stack with 3D cards */}
                <div className="md:col-span-12 lg:col-span-5">
                  <Fade cascade direction="right" damping={0.1} delay={500}>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                        <Code className="w-5 h-5 text-purple-400" />
                      </div>
                      Tech Stack
                    </h3>
                  </Fade>

                  {/* Tech stack with glassmorphism cards */}
                  <Fade direction="up" delay={600} duration={1000} triggerOnce>
                    <div className="backdrop-blur-sm bg-gray-800/30 rounded-xl border border-gray-700/50 p-6 hover:border-purple-500/30 transition-all duration-500 relative overflow-hidden">
                      <div className="space-y-6">
                        {/* Languages section with modern 3D cards */}
                        <div className="relative">
                          <h4 className="text-base font-medium text-purple-400 mb-4 flex items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4"
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
                          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4">
                            {[
                              javascriptImage,
                              cImage,
                              cPlusPlusImage,
                              javaImage,
                              kotlinImage,
                            ].map((image, i) => (
                              <Zoom
                                delay={700 + i * 100}
                                key={i}
                                duration={600}
                              >
                                <div className="group relative transform transition-all duration-300 hover:z-10 hover:-translate-y-2 active:translate-y-0 active:scale-95">
                                  <div className="aspect-square bg-gray-800/70 backdrop-blur-md rounded-xl overflow-hidden flex items-center justify-center p-3 border border-gray-700/30 hover:border-purple-500/50 shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
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
                          <h4 className="text-base font-medium text-purple-400 mb-4 flex items-center gap-2">
                            💻 Web Development
                          </h4>
                          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4">
                            {[htmlImage, cssImage, reactImage, nodejsImage].map(
                              (image, i) => (
                                <Zoom
                                  delay={1200 + i * 100}
                                  key={i}
                                  duration={600}
                                >
                                  <div className="group relative transform transition-all duration-300 hover:z-10 hover:-translate-y-2 active:translate-y-0 active:scale-95">
                                    <div className="aspect-square bg-gray-800/70 backdrop-blur-md rounded-xl overflow-hidden flex items-center justify-center p-3 border border-gray-700/30 hover:border-purple-500/50 shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
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
                          <h4 className="text-base font-medium text-purple-400 mb-4 flex items-center gap-2">
                            ⚙️ Databases & Tools
                          </h4>
                          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4">
                            {[
                              mongodbImage,
                              mysqlImage,
                              gitImage,
                              githubImage,
                              vsCodeImage,
                            ].map((image, i) => (
                              <Zoom
                                delay={1600 + i * 100}
                                key={i}
                                duration={600}
                              >
                                <div className="group relative transform transition-all duration-300 hover:z-10 hover:-translate-y-2 active:translate-y-0 active:scale-95">
                                  <div className="aspect-square bg-gray-800/70 backdrop-blur-md rounded-xl overflow-hidden flex items-center justify-center p-3 border border-gray-700/30 hover:border-purple-500/50 shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
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
                          <h4 className="text-base font-medium text-purple-400 mb-4 flex items-center gap-2">
                            📱 Mobile Development
                          </h4>
                          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4">
                            {[androidStudioImage, flutterImage].map(
                              (image, i) => (
                                <Zoom
                                  delay={2000 + i * 100}
                                  key={i}
                                  duration={600}
                                >
                                  <div className="group relative transform transition-all duration-300 hover:z-10 hover:-translate-y-2 active:translate-y-0 active:scale-95">
                                    <div className="aspect-square bg-gray-800/70 backdrop-blur-md rounded-xl overflow-hidden flex items-center justify-center p-3 border border-gray-700/30 hover:border-purple-500/50 shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
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
            <div className="hidden sm:block absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
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
