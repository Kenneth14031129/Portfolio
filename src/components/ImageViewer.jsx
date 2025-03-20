import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { Fade, Zoom } from "react-awesome-reveal";
import { X, ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react";

const ImageViewer = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Navigation functions with useCallback to use in effect dependencies
  const navigateNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  }, [project.images.length]);

  const navigatePrev = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  }, [project.images.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        navigatePrev();
      } else if (e.key === "ArrowRight") {
        navigateNext();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, navigateNext, navigatePrev, onClose]);

  // Handle fullscreen toggle
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    setShowInfo(false);
    setTimeout(() => setShowInfo(!isFullscreen), 300);
  };

  // Handle swipe gestures
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 30) {
      // Reduced threshold for mobile - swipe left, go next
      navigateNext();
    }
    if (distance < -30) {
      // Reduced threshold for mobile - swipe right, go previous
      navigatePrev();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={(e) => {
        // Close if clicking outside the main content
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <Zoom duration={300}>
        <div
          className={`relative overflow-hidden transition-all duration-300 ${
            isFullscreen
              ? "w-screen h-screen rounded-none bg-black"
              : "w-full md:w-[80vw] lg:w-[70vw] xl:w-[50vw] max-w-full mx-3 md:mx-auto max-h-[90vh] rounded-xl bg-gray-900/95 border border-gray-700 shadow-2xl"
          }`}
        >
          {/* Header - Hidden in fullscreen mode */}
          {!isFullscreen && (
            <Fade duration={200}>
              <div className="p-3 md:p-4 border-b border-gray-800/50 backdrop-blur-sm bg-black/20 flex justify-between items-center">
                <h3 className="text-base md:text-lg font-semibold text-white truncate max-w-[60%]">
                  {project.title}{" "}
                </h3>
                <div className="flex items-center gap-1 md:gap-2">
                  <button
                    onClick={toggleFullscreen}
                    className="p-2 rounded-full bg-gray-800/70 text-gray-300 hover:text-white hover:bg-purple-500/50 transition-all"
                    title="Fullscreen"
                  >
                    <Maximize className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-full bg-gray-800/70 text-gray-300 hover:text-white hover:bg-red-500/50 transition-all"
                    title="Close"
                  >
                    <X className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
            </Fade>
          )}

          {/* Main Image Container */}
          <div
            className={`relative ${isFullscreen ? "h-screen" : "h-[60vh]"}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Image */}
            <div className="absolute inset-0 flex items-center justify-center">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                    currentIndex === index
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className={`max-h-full max-w-full object-contain transition-transform duration-300 ${
                      isFullscreen ? "scale-100" : "scale-90 hover:scale-95"
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Fullscreen controls */}
            {isFullscreen && (
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                <button
                  onClick={toggleFullscreen}
                  className="p-2 md:p-3 rounded-full bg-black/50 text-gray-300 hover:text-white hover:bg-gray-800 transition-all backdrop-blur-sm"
                  title="Exit Fullscreen"
                >
                  <Minimize className="w-5 h-5" />
                </button>
                <button
                  onClick={onClose}
                  className="p-2 md:p-3 rounded-full bg-black/50 text-gray-300 hover:text-white hover:bg-red-500/50 transition-all backdrop-blur-sm"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Navigation Controls - Always visible on mobile, shown on hover for desktop */}
            <div className="absolute inset-0 flex items-center justify-between md:opacity-0 md:hover:opacity-100 transition-opacity group">
              {/* Left Arrow */}
              <button
                onClick={navigatePrev}
                className="h-full px-2 md:px-4 group flex items-center justify-center text-white/70 md:text-white/50 hover:text-white transition-colors focus:outline-none"
                aria-label="Previous image"
              >
                <div className="p-2 md:p-3 rounded-full bg-black/40 backdrop-blur-sm group-hover:bg-black/50 transition-all duration-300 transform group-hover:scale-110">
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </button>

              {/* Right Arrow */}
              <button
                onClick={navigateNext}
                className="h-full px-2 md:px-4 group flex items-center justify-center text-white/70 md:text-white/50 hover:text-white transition-colors focus:outline-none"
                aria-label="Next image"
              >
                <div className="p-2 md:p-3 rounded-full bg-black/40 backdrop-blur-sm group-hover:bg-black/50 transition-all duration-300 transform group-hover:scale-110">
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </button>
            </div>

            {/* Image Info Overlay */}
            {showInfo && (
              <Fade duration={300}>
                <div className="absolute bottom-0 inset-x-0 p-3 md:p-4 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end">
                  {/* Pagination Indicators */}
                  <div className="flex gap-2 justify-center w-full">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                          currentIndex === index
                            ? "bg-purple-500 scale-110"
                            : "bg-gray-500/50 hover:bg-gray-400/70"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </Fade>
            )}
          </div>

          {/* Footer - Hidden in fullscreen mode */}
          {!isFullscreen && (
            <Fade duration={200}>
              <div className="p-3 md:p-4 border-t border-gray-800/50 bg-black/20 backdrop-blur-sm flex justify-between items-center">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex items-center gap-1">
                    <span className="text-xs md:text-sm text-gray-400">
                      Image {currentIndex + 1} / {project.images.length}
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          )}
        </div>
      </Zoom>
    </div>
  );
};

// PropTypes validation
ImageViewer.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageViewer;