import { useRef, useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

// Custom hook for getting element width
function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

// Create a separate component for the span to avoid ref in loop issues
const ScrollSpan = ({ isFirst, className, children, refCallback }) => {
  return (
    <span
      className={`flex-shrink-0 ${className}`}
      ref={isFirst ? refCallback : null}
    >
      {children}
    </span>
  );
};

ScrollSpan.propTypes = {
  isFirst: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  refCallback: PropTypes.func,
};

// VelocityText component
const VelocityText = ({
  children,
  baseVelocity,
  scrollContainerRef,
  className,
  damping,
  stiffness,
  numCopies,
  velocityMapping,
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle,
}) => {
  // All hooks at the top level
  const baseX = useMotionValue(0);
  const copyRef = useRef(null);
  const directionFactor = useRef(1);

  const scrollOptions = scrollContainerRef
    ? { container: scrollContainerRef }
    : {};
  const { scrollY } = useScroll(scrollOptions);
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: damping ?? 50,
    stiffness: stiffness ?? 400,
  });
  const velocityFactor = useTransform(
    smoothVelocity,
    velocityMapping?.input || [0, 1000],
    velocityMapping?.output || [0, 5],
    { clamp: false }
  );

  const copyWidth = useElementWidth(copyRef);

  // Function to wrap values for infinite scrolling
  function wrap(min, max, v) {
    const range = max - min;
    const mod = (((v - min) % range) + range) % range;
    return mod + min;
  }

  // Transform for x position
  const x = useTransform(baseX, (v) => {
    if (copyWidth === 0) return "0px";
    return `${wrap(-copyWidth, 0, v)}px`;
  });

  // Animation frame for scrolling effect
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  // Generate spans array using array methods rather than loops
  const spans = Array.from({ length: numCopies || 1 }, (_, i) => (
    <ScrollSpan
      key={i}
      isFirst={i === 0}
      className={className}
      refCallback={copyRef}
    >
      {children}
    </ScrollSpan>
  ));

  return (
    <div
      className={`${parallaxClassName} relative overflow-hidden`}
      style={parallaxStyle}
    >
      <motion.div
        className={`${scrollerClassName} flex whitespace-nowrap text-center font-sans text-4xl font-bold tracking-[-0.02em] drop-shadow md:text-[5rem] md:leading-[5rem]`}
        style={{ x, ...scrollerStyle }}
      >
        {spans}
      </motion.div>
    </div>
  );
};

// PropTypes for VelocityText
VelocityText.propTypes = {
  children: PropTypes.node.isRequired,
  baseVelocity: PropTypes.number,
  scrollContainerRef: PropTypes.object,
  className: PropTypes.string,
  damping: PropTypes.number,
  stiffness: PropTypes.number,
  numCopies: PropTypes.number,
  velocityMapping: PropTypes.shape({
    input: PropTypes.arrayOf(PropTypes.number),
    output: PropTypes.arrayOf(PropTypes.number),
  }),
  parallaxClassName: PropTypes.string,
  scrollerClassName: PropTypes.string,
  parallaxStyle: PropTypes.object,
  scrollerStyle: PropTypes.object,
};

// Default props for VelocityText
VelocityText.defaultProps = {
  baseVelocity: 100,
  className: "",
  damping: 50,
  stiffness: 400,
  numCopies: 1,
  velocityMapping: { input: [0, 1000], output: [0, 5] },
  parallaxClassName: "",
  scrollerClassName: "",
  parallaxStyle: {},
  scrollerStyle: {},
};

// Main exported ScrollVelocity component
export const ScrollVelocity = ({
  scrollContainerRef,
  texts,
  velocity,
  className,
  damping,
  stiffness,
  numCopies,
  velocityMapping,
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle,
}) => {
  return (
    <section>
      {texts.map((text, index) => (
        <VelocityText
          key={index}
          className={className}
          baseVelocity={index % 2 !== 0 ? -velocity : velocity}
          scrollContainerRef={scrollContainerRef}
          damping={damping}
          stiffness={stiffness}
          numCopies={numCopies}
          velocityMapping={velocityMapping}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
        >
          {text}
        </VelocityText>
      ))}
    </section>
  );
};

// PropTypes for ScrollVelocity
ScrollVelocity.propTypes = {
  scrollContainerRef: PropTypes.object,
  texts: PropTypes.arrayOf(PropTypes.node),
  velocity: PropTypes.number,
  className: PropTypes.string,
  damping: PropTypes.number,
  stiffness: PropTypes.number,
  numCopies: PropTypes.number,
  velocityMapping: PropTypes.shape({
    input: PropTypes.arrayOf(PropTypes.number),
    output: PropTypes.arrayOf(PropTypes.number),
  }),
  parallaxClassName: PropTypes.string,
  scrollerClassName: PropTypes.string,
  parallaxStyle: PropTypes.object,
  scrollerStyle: PropTypes.object,
};

// Default props for ScrollVelocity
ScrollVelocity.defaultProps = {
  texts: [],
  velocity: 100,
  className: "",
  damping: 50,
  stiffness: 400,
  numCopies: 6,
  velocityMapping: { input: [0, 1000], output: [0, 5] },
  parallaxClassName: "",
  scrollerClassName: "",
  parallaxStyle: {},
  scrollerStyle: {},
};

export default ScrollVelocity;
