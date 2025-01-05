import React, { useState, useEffect } from 'react';
import { FileText, Code, Mail, ExternalLink, Github, Linkedin, Download, MonitorIcon, SmartphoneIcon } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import profileImage from '../assets/Profile.jfif';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState('home');


  const projects = [
    {
      id: 1,
      title: "LIFEEC: Web Application",
      description: "An advanced web platform designed for owners and administrators of HomeMedix.",
      tags: ["React.js", "Node.js", "MongoDB", "REST API", "Descriptive Analytics"],
      demoLink: "https://semi-lifeec.onrender.com",
      githubLink: "https://github.com/Kenneth14031129/Semi_LIFEEC",
      Icon: MonitorIcon,
      iconColor: "text-violet-400",
      stats: { 
        users: "Owner & Admin", 
        type: "Capstone Project", 
        platform: "Web" 
      }
    },
    {
      id: 2,
      title: "LIFEEC: Mobile Application",
      description: "Multi-role mobile platform serving nurses, relatives, and nutritionists at HomeMedix.",
      tags: ["Flutter", "Dart", "MongoDB", "REST API", "Real-time Updates"],
      isAndroidApp: true,
      apkLink: "https://drive.google.com/file/d/12ptCqxc3_nQ7tgQDHO6TnZJKnBbh85qc/view?usp=drive_link",
      githubLink: "https://github.com/Kenneth14031129/LIFEEC_Mobile",
      Icon: SmartphoneIcon,
      iconColor: "text-green-400",
      stats: { 
        users: "Nurse, Relative, Nutritionist", 
        type: "Capstone Project", 
        platform: "Android" 
      }
    }
  ];


  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        setIsVisible(prev => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting
        }));
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      
      <main className="pt-16">
{/* Hero Section */}
<section id="home" className="relative min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white overflow-hidden flex items-center">
  {/* Animated Background Elements */}
  <div className="absolute inset-0">
    {/* Animated grid */}
    <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
    </div>
    
    {/* Animated orbs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-purple-900/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    
    {/* Gradient overlay */}
    <div 
      className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm"
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
      }}
    />
  </div>

  {/* Content Container */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
    <div className="text-center space-y-8">
      {/* Main Heading with Gradient */}
      <div className="relative inline-block">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl"></div>
        <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-bold animate-fade-in">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Justine Kenneth P. Gaviola
          </span>
          <div className="mt-4 text-2xl md:text-3xl text-gray-300 font-light">
            Information Technology Student
          </div>
          <div className="mt-2 text-xl text-purple-400">
            Mobile & Web Application Specialist
          </div>
        </h1>
      </div>

      {/* Descriptive Text */}
      <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in">
        Aspiring developer passionate about creating innovative solutions through modern technologies
      </p>

      {/* Status Badge */}
      <div className="flex justify-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
          <span className="text-gray-300">Available for Internship Opportunities</span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
        {/* Primary CTA */}
        <a 
          href="#contact" 
          className="group relative px-8 py-3 overflow-hidden rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <span className="relative flex items-center justify-center gap-2">
            Get in touch
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
        </a>

        {/* Secondary CTA */}
        <a 
          href="#projects" 
          className="group relative px-8 py-3 rounded-lg bg-gray-800 text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <span className="relative">View projects</span>
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-purple-400 flex justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-purple-400 animate-scroll"></div>
        </div>
      </div>
    </div>
  </div>

  {/* Decorative Side Elements */}
  <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
  <div className="absolute -right-32 top-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
</section>

{/* About Section */}
<section 
  id="about" 
  className={`py-24 bg-gradient-to-br from-black to-gray-900 transition-all duration-1000 relative ${
    isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
    <div className="text-center">
      <h2 className="text-4xl font-bold bg-clip-text text-white bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
        About Me
      </h2>
      <div className="h-1 w-20 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
    </div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div className="bg-gray-800/30 rounded-2xl border border-gray-700/50 backdrop-blur-sm relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500"></div>
      
      {/* Main Content Grid - Restructured for Width */}
      <div className="grid grid-cols-12 gap-6 p-8">
        {/* Left Column - Profile */}
        <div className="col-span-12 lg:col-span-3">
          <div className="flex flex-col items-center lg:sticky lg:top-24">
            {/* Profile Picture */}
            <div className="relative w-32 h-32 group perspective mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 animate-tilt"></div>
              <div className="relative w-32 h-32 rounded-full border-4 border-gray-800 overflow-hidden backdrop-blur-sm transform-gpu transition-transform duration-700 group-hover:scale-105">
                <img 
                  src={profileImage}
                  alt="Profile" 
                  className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
                />
              </div>
            </div>

            {/* Name and Title */}
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 text-center">
              Justine Kenneth P. Gaviola
            </h2>
            <p className="mt-2 text-purple-400 text-lg">Information Technology Student</p>
            <p className="text-gray-400">National University, Manila</p>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-4">
              <a href="mailto:justken2000@gmail.com" className="group p-2 bg-gray-800/50 rounded-lg text-gray-300 hover:bg-purple-900/20 hover:text-purple-400 transition-all duration-300">
                <Mail className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a href="https://github.com" className="group p-2 bg-gray-800/50 rounded-lg text-gray-300 hover:bg-purple-900/20 hover:text-purple-400 transition-all duration-300">
                <Github className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a href="https://linkedin.com" className="group p-2 bg-gray-800/50 rounded-lg text-gray-300 hover:bg-purple-900/20 hover:text-purple-400 transition-all duration-300">
                <Linkedin className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>

            {/* Education Section */}
            <div className="mt-6 w-full">
              <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                <h4 className="font-medium text-white flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  BS Information Technology
                </h4>
                <p className="text-sm text-purple-400">Mobile & Web Application</p>
                <p className="text-sm text-gray-400 mt-1">2023 - Present</p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column - Professional Summary & Current Focus */}
        <div className="col-span-12 lg:col-span-4">
          {/* Professional Summary */}
          <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 mb-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <FileText className="w-5 h-5 text-purple-400" />
              </div>
              Professional Summary
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Currently pursuing my degree with a focus on creating user-centric applications. 
              I'm passionate about learning new technologies and applying them to solve real-world 
              problems through my academic projects. Seeking opportunities to contribute to innovative 
              projects and expand my technical expertise.
            </p>
          </div>

          {/* Current Focus */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <Code className="w-5 h-5 text-purple-400" />
              </div>
              Current Focus
            </h3>
            {[
              { icon: "💻", text: "Web Development", description: "Frontend & Backend" },
              { icon: "📱", text: "Mobile Development", description: "Android & iOS" },
              { icon: "🔍", text: "Continuous Learning", description: "New Technologies" },
              { icon: "🤝", text: "Team Collaboration", description: "Project Management" }
            ].map((item) => (
              <div key={item.text} className="group flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                <div>
                  <span className="text-gray-300 font-medium">{item.text}</span>
                  <p className="text-xs text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Technical Skills */}
        <div className="col-span-12 lg:col-span-5">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Code className="w-5 h-5 text-purple-400" />
            </div>
            Technical Skills
          </h3>
          <div className="grid gap-4">
            {[
              {
                title: "Frontend Development",
                skills: ["HTML", "CSS", "JavaScript", "React"],
                icon: "🎨"
              },
              {
                title: "Mobile Development",
                skills: ["Flutter", "Kotlin", "Java", "Android Studio"],
                icon: "📱"
              },
              {
                title: "Backend & Database",
                skills: ["NodeJS", "MySQL", "MongoDB", "C++"],
                icon: "⚙️"
              },
              {
                title: "Development Tools",
                skills: ["Git", "VS Code", "Figma", "Render"],
                icon: "🛠️"
              }
            ].map((category) => (
              <div key={category.title} className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                <h4 className="text-purple-400 font-medium mb-3 flex items-center gap-2">
                  <span className="text-xl">{category.icon}</span>
                  {category.title}
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="px-3 py-2 bg-gray-900/50 rounded-md text-gray-300 text-sm hover:bg-purple-900/20 transition-all duration-300 text-center">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Portfolio Showcase Section */}
<section 
  id="projects" 
  className={`py-24 bg-gradient-to-br from-gray-900 to-black transition-all duration-1000 relative ${
    isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
    <div className="text-center mb-16 relative">
      <div className="inline-block">
        <h2 className="text-4xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
          Portfolio Showcase
        </h2>
        <div className="h-1 w-32 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
      </div>
      <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
        Exploring my journey through innovative projects and achievements
      </p>
    </div>

    {/* Enhanced Tab Buttons */}
    <div className="flex justify-center gap-6 mb-16">
      <button
        onClick={() => setActiveTab('projects')}
        className={`group relative px-8 py-4 rounded-xl font-medium transition-all duration-300 overflow-hidden ${
          activeTab === 'projects' 
            ? 'text-white' 
            : 'text-gray-300 hover:text-white'
        }`}
      >
        <div className={`absolute inset-0 transition-all duration-300 ${
          activeTab === 'projects'
            ? 'opacity-100 bg-gradient-to-r from-purple-500 to-blue-500'
            : 'opacity-0 bg-gray-800 group-hover:opacity-100'
        }`}></div>
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative flex items-center gap-2">
          <Code className="w-5 h-5" />
          <span>Projects</span>
        </div>
        {activeTab === 'projects' && (
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></div>
        )}
      </button>

      <button
        onClick={() => setActiveTab('certificates')}
        className={`group relative px-8 py-4 rounded-xl font-medium transition-all duration-300 overflow-hidden ${
          activeTab === 'certificates' 
            ? 'text-white' 
            : 'text-gray-300 hover:text-white'
        }`}
      >
        <div className={`absolute inset-0 transition-all duration-300 ${
          activeTab === 'certificates'
            ? 'opacity-100 bg-gradient-to-r from-purple-500 to-blue-500'
            : 'opacity-0 bg-gray-800 group-hover:opacity-100'
        }`}></div>
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative flex items-center gap-2">
          <FileText className="w-5 h-5" />
          <span>Certificates</span>
        </div>
        {activeTab === 'certificates' && (
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></div>
        )}
      </button>
    </div>

    {/* Projects Content */}
    {activeTab === 'projects' && (
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500"
          >
            {/* Enhanced Hover Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-600/0 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative aspect-w-16 aspect-h-9 bg-gray-900/50 flex items-center justify-center p-12">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <project.Icon className={`w-24 h-24 ${project.iconColor} transition-transform duration-500 group-hover:scale-110`} />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
              
              {/* Project Type Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-300 text-sm border border-purple-500/20 font-medium">
                  {project.stats.type}
                </span>
              </div>
            </div>

            <div className="relative p-8 space-y-6">
              {/* Enhanced Title and Description */}
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mt-3 text-gray-300 text-lg leading-relaxed">{project.description}</p>
              </div>

              {/* Enhanced Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1.5 bg-gray-700/50 text-gray-300 rounded-lg text-sm border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Enhanced Project Stats */}
              <div className="grid grid-cols-3 gap-6 py-6 border-t border-gray-700/50">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-purple-400 font-semibold text-base">{value}</div>
                    <div className="text-sm text-gray-400 capitalize mt-1">{key}</div>
                  </div>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-4">
                {!project.isAndroidApp ? (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                ) : (
                  <a
                    href={project.apkLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Download className="w-4 h-4" />
                    Download APK
                  </a>
                )}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Github className="w-4 h-4" />
                  GitHub Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}

{/* Certificates Content */}
{activeTab === 'certificates' && (
  <div className="max-w-2xl mx-auto text-center">
    <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-500">
      {/* Coming Soon Icon */}
      <div className="flex justify-center mb-6">
          <FileText className="w-12 h-12 text-purple-400" />
      </div>

      {/* Message */}
      <h3 className="text-2xl font-bold text-white mb-4">
        Certificates Coming Soon
      </h3>
      <p className="text-gray-400 text-lg mb-6">
        Currently working on gaining certifications in various technology areas.
        Check back later for updates!
      </p>

      {/* Progress Indicator */}
      <div className="inline-flex items-center gap-2 text-purple-400">
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <span>In Progress</span>
      </div>
    </div>
  </div>
)}
  </div>
</section>

{/* Contact Section */}
<section 
  id="contact" 
  className={`py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 transition-all duration-1000 relative ${
    isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
    {/* Section Header */}
    <div className="text-center max-w-2xl mx-auto mb-16 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 blur-3xl"></div>
      <h2 className="text-4xl font-bold bg-clip-text text-white bg-gradient-to-r from-purple-400 to-blue-400 relative">
        Let's Connect
      </h2>
      <div className="h-1 w-20 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-4"></div>
      <p className="mt-6 text-lg text-gray-400 relative">
        Looking for internship opportunities and excited to collaborate on new projects
      </p>
    </div>

    {/* Contact Cards - Centered Layout */}
    <div className="max-w-2xl mx-auto">
      <div className="bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm p-8 hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden group">
        {/* Card background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Contact Links */}
        <div className="space-y-4 relative">
          <a 
            href="mailto:justken2000@gmail.com" 
            className="group flex items-center p-4 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors duration-300">
              <Mail className="w-5 h-5 text-purple-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-white group-hover:text-purple-400 transition-colors duration-300">justken2000@gmail.com</p>
            </div>
          </a>

          <a 
            href="https://linkedin.com" 
            className="group flex items-center p-4 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors duration-300">
              <Linkedin className="w-5 h-5 text-purple-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-400">LinkedIn</p>
              <p className="text-white group-hover:text-purple-400 transition-colors duration-300">Justine Kenneth Gaviola</p>
            </div>
          </a>

          <a 
            href="https://github.com" 
            className="group flex items-center p-4 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors duration-300">
              <Github className="w-5 h-5 text-purple-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-400">GitHub</p>
              <p className="text-white group-hover:text-purple-400 transition-colors duration-300">Kenneth14031129</p>
            </div>
          </a>

          {/* Location Info with subtle separator */}
          <div className="relative pt-4 mt-6 border-t border-gray-700/50">
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span>Available for remote work & on-site opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </main>

      <Footer />
      
      {/* Scroll Progress Indicator */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <div className="w-12 h-12 rounded-full border-2 border-purple-500/20"></div>
          <div 
            className="absolute top-0 left-0 w-12 h-12 rounded-full border-2 border-purple-500 border-t-transparent transform -rotate-90"
            style={{
              transform: `rotate(${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 360}deg)`
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;