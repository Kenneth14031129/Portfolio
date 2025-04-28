import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";

function TypingText({
  words = ["Hello!", "I'm Kenneth", "Welcome!", "I Build Apps"],
  typingSpeed = 150,
  deleteSpeed = 100,
  delayBetweenWords = 1000,
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const controls = useAnimationControls();

  // Memoize words to prevent dependency array changes on each render
  const memoizedWords = useMemo(() => words, [words]);

  useEffect(() => {
    const word = memoizedWords[currentWordIndex];

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % memoizedWords.length);
        return;
      }

      const timer = setTimeout(() => {
        setCurrentText(word.substring(0, currentText.length - 1));
      }, deleteSpeed);
      return () => clearTimeout(timer);
    }

    if (currentText === word) {
      const timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenWords);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setCurrentText(word.substring(0, currentText.length + 1));
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [
    currentText,
    currentWordIndex,
    isDeleting,
    memoizedWords,
    typingSpeed,
    deleteSpeed,
    delayBetweenWords,
  ]);

  useEffect(() => {
    controls.start({
      opacity: [0.2, 1],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
      },
    });
  }, [controls]);

  return (
    <div className="inline-block">
      {currentText}
      <motion.span animate={controls}>|</motion.span>
    </div>
  );
}

// Add prop types validation
TypingText.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string),
  typingSpeed: PropTypes.number,
  deleteSpeed: PropTypes.number,
  delayBetweenWords: PropTypes.number,
};

export default function TypingAnimatedText() {
  return <TypingText />;
}
