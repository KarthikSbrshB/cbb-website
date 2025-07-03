import BorderedButton from "../components/BorderedButton";
import Footer from "../components/Footer";
import { TimelineDemo } from "../components/Timeline";
import ScheduleTable from "../components/ScheduleTable";
import HeadingNText from "../components/HeadingNText";
import {
  HiOutlineComputerDesktop,
  HiOutlineUsers,
  HiOutlinePresentationChartBar,
  HiOutlineGlobeAlt,
} from "react-icons/hi2";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Events() {
  const [activeModal, setActiveModal] = useState(null);
  const whatIsRef = useRef(null);

  const [activeTab, setActiveTab] = useState(0);
  const schedule = [
    [
      { from: "09:30 AM", to: "10:00 AM", activity: "Assembly" },
      { from: "10:00 AM", to: "11:00 AM", activity: "Inauguration" },
      { from: "11:00 AM", to: "12:30 PM", activity: "Round 1: Srishti" },
      { from: "12:30 PM", to: "01:00 PM", activity: "Round 1 Review" },
      { from: "01:00 PM", to: "02:00 PM", activity: "Lunch" },
      { from: "02:00 PM", to: "04:00 PM", activity: "Round 2: Sankalp" },
      { from: "04:00 PM", to: "04:15 PM", activity: "Break" },
      { from: "04:15 PM", to: "07:30 PM", activity: "Round 2 (Continued)" },
      { from: "07:30 PM", to: "08:30 PM", activity: "Dinner" },
      { from: "08:30 PM", to: "09:30 PM", activity: "Musical Night" },
      { from: "09:30 PM", to: "10:00 PM", activity: "Round 2 Review" },
      { from: "10:00 PM", to: "12:00 AM", activity: "Round 3: Samarth" },
    ],
    [
      { from: "12:00 AM", to: "02:00 AM", activity: "Activities + Refreshments" },
      { from: "02:00 AM", to: "07:00 AM", activity: "Round 3 (Continued)" },
      { from: "07:00 AM", to: "09:00 AM", activity: "Morning Break" },
      { from: "09:00 AM", to: "12:00 PM", activity: "Round 3 (Continued)" },
      { from: "12:00 PM", to: "01:00 PM", activity: "Lunch" },
      { from: "01:00 PM", to: "03:00 PM", activity: "Final Review" },
      { from: "03:00 PM", to: "03:30 PM", activity: "Closing Ceremony & Vote of Thanks" },
    ],
    [
      { from: "09:30 AM", to: "10:00 AM", activity: "Assembly" },
      { from: "10:00 AM", to: "12:30 PM", activity: "Drishti - Ideathon" },
      { from: "12:45 PM", to: "03:45 PM", activity: "Chanakya - Coding Contest" },
    ]
  ];

  const eventDate = new Date("2025-07-17T09:00:00");

  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    if (activeModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [activeModal]);

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = eventDate - new Date();
      if (diff <= 0) {
        setTimeLeft("Event Started!");
        clearInterval(interval);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex w-full items-center justify-center bg-black">
      <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-20 w-full text-white">
        <div className="absolute z-0 inset-0 pointer-events-none">
          <HiOutlineComputerDesktop className="text-green-600/80 bg-green-700/10 backdrop-blur-md rounded-xl p-4 text-6xl animate-float-left absolute top-[9%] left-[8%]" />
          <HiOutlineUsers className="text-purple-200/80 bg-purple-400/10 backdrop-blur-md rounded-xl p-4 text-6xl animate-float-right absolute top-[2%] left-[75%]" />
          <HiOutlinePresentationChartBar className="text-orange-200/80 bg-orange-400/10 backdrop-blur-md rounded-xl p-4 text-6xl animate-float-down absolute top-[10%] left-[64%]" />
          <HiOutlineGlobeAlt className="text-blue-300/80 bg-blue-500/10 backdrop-blur-md rounded-xl p-4 text-6xl animate-float-up absolute top-[3%] left-[18%]" />
        </div>

        <section className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-6">
          <div className="relative w-fit">
            <div className="absolute -top-35 left-1/2 -translate-x-1/2 bg-blue-200/10 text-blue-300 backdrop-blur-sm px-6 py-2 rounded-full text-md font-semibold">
              Upcoming Event
            </div>
            <span className="relative left-[-15%] bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 pb-6 text-[8vw] leading-[1.2] font-[Revamped] text-transparent">
              TechSurge
            </span>
            <span className="tracking-tighter flicker absolute top-[45%] -translate-y-1/2 left-[75%] text-[11vw] text-[#4cdef5d7] px-11 font-[CyberBrush]">
              2k25
            </span>
          </div>

          <div className="absolute top-165 text-center w-full flex flex-col items-center">
            <p className="text-sm sm:text-md uppercase tracking-widest text-neutral-400 mb-2">
              Starts in
            </p>
            <div className="flex gap-6 text-center font-mono text-2xl sm:text-5xl text-[#4cdef5]">
              {timeLeft.split(" ").map((unit, i) => (
                <motion.div
                  key={i}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center"
                >
                  <span className="text-shadow-sm">
                    {unit.split(/(?<=\D)(?=\d)|(?<=\d)(?=\D)/)[0]}
                  </span>
                  <span className="text-xs text-neutral-400 tracking-tight">
                    {unit.split(/(?<=\D)(?=\d)|(?<=\d)(?=\D)/)[1]}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="absolute top-210 w-full flex justify-center">
            <BorderedButton onClick={() => whatIsRef.current?.scrollIntoView({ behavior: "smooth" })}>
              Register Now!
            </BorderedButton>
          </div>
        </section>

        <section ref={whatIsRef} className="min-h-screen flex flex-col items-center justify-center text-center px-6">
          <HeadingNText title="All about this years TechSurge">
            TechSurge is an annual techfest conducted at BVRIT Narsapur by the
            Department of Computer Science and Engineering, hosted by the CBB
            club. Spanning over three exciting days, the event brings together
            innovation, creativity, and collaboration through a variety of
            technical and cultural activities.
          </HeadingNText>
          <div className="mt-12 bg-blue-400/20 text-blue-300 px-6 py-2 rounded-full text-md font-medium backdrop-blur-sm shadow-md">
            TechSurge consists of 3 main events
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-12 px-6">
            {["Competitions", "Workshops", "Exhibits"].map((title, i) => (
              <div
                key={i}
                onClick={() => setActiveModal(title)}
                className="cursor-pointer w-72 aspect-[1/1.2] bg-[#0e0e0e] hover:bg-[#1a1a1a] transition-colors duration-300 backdrop-blur-md rounded-xl border border-white/10 p-6 flex items-center justify-center text-2xl font-semibold text-neutral-200 shadow-lg"
              >
                {title}
              </div>
            ))}
          </div>
        </section>

        <ScheduleTable activeTab={activeTab} setActiveTab={setActiveTab} schedule={schedule} />

        <section className="min-h-screen flex items-start justify-center w-full px-4">
          <TimelineDemo />
        </section>

        <AnimatePresence>
          {activeModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center"
              onClick={() => setActiveModal(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-zinc-900 rounded-xl border border-white/10 p-8 w-[95vw] max-w-4xl min-h-[60vh] text-white shadow-xl"
              >
                <button
                  onClick={() => setActiveModal(null)}
                  className="absolute top-3 right-3 text-white text-xl bg-white/10 hover:bg-white/20 rounded-full w-8 h-8 flex items-center justify-center"
                >
                  ×
                </button>
                <h3 className="text-2xl font-bold mb-4">{activeModal}</h3>
                <p className="text-neutral-300">
                  More information about {activeModal} will be available soon.
                  Stay tuned!
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </div>
    </div>
  );
}

export default Events;