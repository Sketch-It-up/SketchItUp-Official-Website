import React, { useState } from "react";
import { motion } from "motion/react";

export const WobbleCard = ({
  children,
  containerClassName = "",
  className = "",
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovered
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1.006, 1.006, 1)`
          : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
        transition: "transform 0.15s ease-out",
      }}
      className={`relative rounded-3xl overflow-hidden ${containerClassName}`}
    >
      <div
        className="relative h-full [background-image:radial-gradient(88%_100%_at_top_right,rgba(255,255,255,0.08),rgba(255,255,255,0))] sm:mx-0 rounded-3xl overflow-hidden p-6 sm:p-8"
      >
        <motion.div
          style={{
            transform: isHovered
              ? `translate3d(${-mousePosition.x * 1.2}px, ${-mousePosition.y * 1.2}px, 0) scale3d(1.02, 1.02, 1)`
              : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
            transition: "transform 0.15s ease-out",
          }}
          className={`h-full ${className}`}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};
