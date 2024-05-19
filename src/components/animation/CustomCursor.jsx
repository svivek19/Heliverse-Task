import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./CustomCursor.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power3.out",
      });
      setIsVisible(true);
    };

    const handleMouseEnter = () => {
      gsap.to(cursorRef.current, {
        scale: 1.5,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseStop = () => {
      setIsVisible(false); // Set isVisible to false when mouse stops moving
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    let timeout;
    document.addEventListener("mousemove", () => {
      clearTimeout(timeout);
      timeout = setTimeout(handleMouseStop, 500);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isVisible ? "visible" : "hidden"}`}
      ref={cursorRef}
    ></div>
  );
};

export default CustomCursor;
