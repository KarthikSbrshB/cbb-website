import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from 'react-router-dom';
import { motion } from "framer-motion";

const PillNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;

      const isAtTop = currentScrollY < 10;
      const isAtBottom = currentScrollY >= maxScrollY - 10;

      if (isAtTop) {
        setShowNavbar(true);
      } else if (isAtBottom) {
        setShowNavbar(false);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    let mouseTimer;
    const handleMouseMove = () => {
      setShowNavbar(true);
      clearTimeout(mouseTimer);
      mouseTimer = setTimeout(() => {
        setShowNavbar(false);
      }, 2000);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(mouseTimer);
    };
  }, []);

  return (
    <div
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 rounded-full overflow-hidden ${
        showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      } backdrop-blur`}
    >
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const location = useLocation();
  const pathname = location.pathname;

  const navItems = ["Home", "About", "Team", "Alumni", "Events", "Contact Us"];
  const tabRefs = useRef([]);

  const getLabelFromPath = (path) => {
    if (path === "/") return "Home";
    const match = navItems.find(
      (label) =>
        `/${label.toLowerCase().replace(/\s+/g, "-")}` === path
    );
    return match || null;
  };

  const activeLabel = getLabelFromPath(pathname);

  useEffect(() => {
    const updatePillPosition = () => {
      const activeIndex = navItems.findIndex((label) => label === activeLabel);
      const activeRef = tabRefs.current[activeIndex];
      if (activeRef) {
        const { offsetLeft, offsetWidth } = activeRef;
        setPosition({ left: offsetLeft, width: offsetWidth, opacity: 1 });
      }
    };
    // Use requestAnimationFrame to ensure refs are measured after DOM update.
    requestAnimationFrame(updatePillPosition);
  }, [pathname, navItems, activeLabel]);

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative flex w-fit rounded-full bg-zinc-900/70 backdrop-blur px-2 py-2 space-x-1 text-sm overflow-hidden"
    >
      {navItems.map((label, index) => {
        const path =
          label.toLowerCase() === "home"
            ? "/"
            : `/${label.toLowerCase().replace(/\s+/g, "-")}`;

        return (
          <Tab
            key={label}
            label={label}
            to={path}
            setPosition={setPosition}
            activeLabel={activeLabel}
            tabRef={(el) => (tabRefs.current[index] = el)}
          />
        );
      })}
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ label, to, activeLabel, tabRef }) => {
  const ref = React.useRef(null);
  const isActive = activeLabel === label;

  return (
    <li
      ref={(el) => {
        ref.current = el;
        tabRef(el);
      }}
      className={`relative z-10 cursor-pointer px-5 uppercase font-light flex items-center justify-center h-10 ${
        isActive ? "text-zinc-100 font-medium" : "text-zinc-400"
      }`}
    >
      <Link
        to={to}
        className="w-full h-full flex items-center justify-center"
      >
        {label}
      </Link>
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{ ...position }}
      className="absolute z-0 h-10 rounded-full bg-zinc-600/70"
    />
  );
};

export default PillNavbar;
