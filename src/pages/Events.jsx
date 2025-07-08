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
import { IoClose } from "react-icons/io5";

function Events() {
  const [activeModal, setActiveModal] = useState(null);
  const whatIsRef = useRef(null);

  const [activeTab, setActiveTab] = useState(0);
  const schedule = [
    // Day 1
  [
    { from: "09:30 AM", to: "10:00 AM", activity: "Assembly" },
    { from: "10:00 AM", to: "10:30 AM", activity: "Inauguration" },
    { from: "10:30 AM", to: "12:30 PM", activity: "Round 1: Srishti" },
    { from: "12:30 PM", to: "01:00 PM", activity: "Round 1 Review" },
    { from: "01:00 PM", to: "02:00 PM", activity: "Lunch" },
    { from: "02:00 PM", to: "04:00 PM", activity: "Round 2: Sankalp" },
    { from: "04:00 PM", to: "04:15 PM", activity: "Break" },
    { from: "04:15 PM", to: "07:30 PM", activity: "Round 2 (Continued)" },
    { from: "07:30 PM", to: "08:30 PM", activity: "Dinner" },
    { from: "08:30 PM", to: "09:00 PM", activity: "Round 2 Review" },
    { from: "09:00 PM", to: "12:00 AM", activity: "Round 3: Samarth" },
  ],

  // Day 2
  [
    { from: "12:00 AM", to: "02:00 AM", activity: "Activities + Refreshments" },
    { from: "02:00 AM", to: "07:00 AM", activity: "Round 3 (Continued)" },
    { from: "07:00 AM", to: "09:00 AM", activity: "Morning Break" },
    { from: "09:00 AM", to: "09:30 AM", activity: "Round 3 (Continued)" },
    { from: "09:30 AM", to: "11:15 AM", activity: "Final Review & Announcement of winners" },
    { from: "11:15 AM", to: "11:30 AM", activity: "Closing Ceremony & Vote of Thanks" },
    { from: "11:30 AM", to: "12:00 PM", activity: "Assemble for Drishti" },
    { from: "12:00 PM", to: "03:00 PM", activity: "Participants pitch their ideas" },
    { from: "03:00 PM", to: "03:30 PM", activity: "Announcement of winners & Vote of Thanks" }
  ]
   
  ];

  const eventDate = new Date("2025-07-29T09:00:00");

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
    <div className="relative flex w-full items-center justify-center bg-black overflow-x-hidden">
      <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-20 w-full text-white">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6">

        {/* Floating Icons - Responsive positioning */}
        <div className="absolute z-0 inset-0 pointer-events-none hidden lg:block">
          <HiOutlineComputerDesktop className="text-green-600/80 bg-green-700/10 backdrop-blur-md rounded-xl p-3 lg:p-4 text-4xl lg:text-6xl animate-float-left absolute top-[9%] left-[8%]" />
          <HiOutlineUsers className="text-purple-200/80 bg-purple-400/10 backdrop-blur-md rounded-xl p-3 lg:p-4 text-4xl lg:text-6xl animate-float-right absolute top-[2%] left-[75%]" />
          <HiOutlinePresentationChartBar className="text-orange-200/80 bg-orange-400/10 backdrop-blur-md rounded-xl p-3 lg:p-4 text-4xl lg:text-6xl animate-float-down absolute top-[10%] left-[64%]" />
          <HiOutlineGlobeAlt className="text-blue-300/80 bg-blue-500/10 backdrop-blur-md rounded-xl p-3 lg:p-4 text-4xl lg:text-6xl animate-float-up absolute top-[3%] left-[18%]" />
        </div>



{/* Hero Section - Matching image layout with responsive positioning */}
<section className="min-h-screen mt-12 sm:mt-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-8 sm:py-12">
  {/* Title Container with overlapping positioning */}
  <div className="relative w-full max-w-full">
    <div className="absolute -top-14 sm:-top-20 left-1/2 -translate-x-1/2 whitespace-nowrap bg-blue-200/10 text-blue-300 backdrop-blur-sm px-5 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold">
      Upcoming Event
    </div>
    
    {/* Desktop Layout - Hidden on mobile */}
    <div className="hidden sm:block relative">
      <span className="relative left-[-15%] bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 pb-6 text-[8vw] leading-[1.2] font-[Revamped] text-transparent">
        TechSurge
      </span>
      <span className="tracking-tighter flicker absolute top-[45%] -translate-y-1/2 left-[75%] text-[11vw] text-[#4cdef5d7] px-11 font-[CyberBrush]">
        2k25
      </span>
    </div>
    
    {/* Mobile Layout - Visible only on mobile */}
    <div className="block sm:hidden relative">
      <div className="flex flex-col items-center">
        <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-6 pb-1 text-[11vw] leading-[1.1] font-[Revamped] text-transparent">
          TechSurge
        </span>
        <span className="tracking-tighter flicker text-[12vw] text-[#4cdef5d7] font-[CyberBrush] -mt-3">
          2k25
        </span>
      </div>
    </div>
  </div>
  
  {/* Countdown Timer */}
  <div className="text-center w-full flex flex-col items-center mt-12 mb-6 sm:mt-16 sm:mb-10 md:mt-20 md:mb-12">
    <p className="text-xs sm:text-sm uppercase tracking-widest text-neutral-400 mb-2 sm:mb-4">
      Starts in
    </p>
    <div className="flex gap-4 sm:gap-6 md:gap-8 text-center font-mono text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-[#4cdef5]">
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
          <span className="text-xs sm:text-sm text-neutral-400 tracking-tight">
            {unit.split(/(?<=\D)(?=\d)|(?<=\d)(?=\D)/)[1]}
          </span>
        </motion.div>
      ))}
    </div>
  </div>
  
  {/* Register Button */}
  <div className="w-full flex justify-center mt-10 sm:mt-14 md:mt-20">
    <BorderedButton onClick={() => whatIsRef.current?.scrollIntoView({ behavior: "smooth" })}>
      Register Now!
    </BorderedButton>
  </div>
</section>

        {/* About Section - Responsive */}
        <section ref={whatIsRef} className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 py-8 sm:py-12">
          <HeadingNText title="All about this years TechSurge">
            TechSurge is an annual techfest conducted at BVRIT Narsapur by the
            Department of Computer Science and Engineering, hosted by the CBB
            club. Spanning over two exciting days, the event brings together
            innovation, creativity, and collaboration through a variety of
            technical and cultural activities.
          </HeadingNText>
          
          {/* Badge - Responsive */}
          <div className="mt-8 sm:mt-12 bg-blue-400/20 text-blue-300 px-4 sm:px-6 py-2 rounded-full text-sm sm:text-md font-medium backdrop-blur-sm shadow-md">
            TechSurge consists of 2 main events
          </div>
          
          {/* Event Cards - Responsive grid */}
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-6">
            {[
              { title: "Vyoma", image: "/src/assets/event-posters/Vyoma.PNG", glow: "hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]" },
              { title: "Drishti", image: "/src/assets/event-posters/Drishti.PNG", glow: "hover:shadow-[0_0_15px_rgba(93,188,252,0.4)]" }
            ].map(({ title, image, glow }, i) => (
              <div
                key={i}
                onClick={() => setActiveModal(title)}
                className={`cursor-pointer w-full max-w-[300px] bg-[#0e0e0e] hover:bg-[#1a1a1a] transition-all duration-300 backdrop-blur-md rounded-xl border border-white/10 shadow-lg overflow-hidden ${glow}`}
              >
                <img
                  src={image}
                  alt={`${title} Poster`}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Schedule Table - Already responsive */}
        <ScheduleTable activeTab={activeTab} setActiveTab={setActiveTab} schedule={schedule} />

        {/* Timeline Section - Responsive */}
        <section className="min-h-screen flex items-start justify-center w-full px-4 sm:px-6 py-8 sm:py-12">
          <TimelineDemo />
        </section>

        {/* Modal - Responsive */}
        <AnimatePresence>
          {activeModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setActiveModal(null)}
            >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-zinc-900 rounded-xl border border-white/10 px-4 sm:px-6 py-2 sm:py-3 w-full max-w-full sm:max-w-[98%] md:max-w-6xl lg:max-w-7xl min-h-[60vh] sm:min-h-[70vh] text-white shadow-xl max-h-[95vh] overflow-y-auto flex items-center justify-center"
            >
                <button
                  onClick={() => setActiveModal(null)}
                  className="absolute top-3 right-3 text-white bg-white/10 hover:bg-white/20 rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-200"
                >
                  <IoClose className="text-xl" />
                </button>
                {activeModal === "Vyoma" ? (
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    {/* Title and tagline at top center */}
                    <div className="w-full text-center mb-8 sm:mb-10">
                      <h2 className="text-2xl sm:text-3xl lg:text-5xl p-2 sm:p-3 font-bold tracking-wide bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent text-center leading-tight break-words whitespace-normal">
                        Vyoma – 24-Hour Hackathon
                      </h2>
                      <p className="italic text-blue-400">Theme: Smart Tech, Smarter World</p>
                    </div>
                    {/* Main content: image and text */}
                    <div className="w-full flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-6">
                      {/* Left: Image */}
                      <div className="w-full sm:w-1/3">
                        <img
                          src="/src/assets/event-posters/Vyoma.PNG"
                          alt="Vyoma Hackathon Poster"
                          className="w-full max-w-[220px] sm:max-w-[260px] object-contain rounded-lg mx-auto"
                        />
                      </div>
                      {/* Right: Text */}
                      <div className="w-full sm:w-2/3 flex flex-col items-center justify-center text-center px-2 sm:px-6">
                        <div>
                          <p className="text-neutral-300 text-sm sm:text-base mb-4">
                            Vyoma is the centerpiece of <strong>TechSurge 2K25</strong> – a high-intensity, 24-hour national-level hackathon that challenges participants to push the boundaries of innovation and build tech-driven solutions for a smarter, more connected world.
                          </p>
                          <div className="bg-white/5 border border-white/10 rounded-lg p-4 sm:p-5 mt-4 mb-6">
                            <p className="text-neutral-300 text-sm sm:text-base mb-4">
                              This two-stage competition is designed to identify and empower the most creative minds across the country:
                            </p>
                            <ul className="text-left text-sm text-neutral-300 mb-4 space-y-2">
                              <li><strong>1) Online PPT Submission:</strong> Teams submit a structured idea presentation outlining the problem, solution, tech stack, and impact.</li>
                              <li><strong>2) Offline 24-Hour Hackathon:</strong> Shortlisted teams build prototypes across three progressive rounds:</li>
                              <ul className="pl-4 list-disc">
                                <li><em>Srishti (Creation):</em> Idea clarity, understanding, and innovation</li>
                                <li><em>Sankalp (Commitment):</em> Execution and collaboration</li>
                                <li><em>Samarth (Capability):</em> Functionality and real-world impact</li>
                              </ul>
                            </ul>                          
                          </div>
                          {/* Fee pills inserted here */}
                          <div className="flex flex-wrap gap-2 justify-center mt-4">
                            <div className="inline-block px-4 py-1 rounded-full bg-blue-400/10 border border-blue-300 text-blue-300 text-sm font-medium">
                              ₹100 – Round 1
                            </div>
                            <div className="inline-block px-4 py-1 rounded-full bg-blue-400/10 border border-blue-300 text-blue-300 text-sm font-medium">
                              ₹400 – Round 2
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Buttons at bottom center */}
                    <div className="w-full flex flex-col items-center justify-center gap-4 mt-6 sm:mt-8">
                      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <button
                          onClick={() => window.open("https://docs.google.com/spreadsheets/d/18u1uKEjQNXe3LyQH_j_hK6dC0hw3F2Hr", "_blank")}
                          className="cursor-pointer px-8 h-12 rounded-full text-md font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition duration-200"
                        >
                          View Problem Statements
                        </button>
                        <a href="https://unstop.com/p/vyoma-code-the-change-you-want-to-see-bv-raju-institute-of-technology-narsapur-bvrit-n-1513999" target="_blank" rel="noopener noreferrer">
                          <BorderedButton>
                            Register for Vyoma
                          </BorderedButton>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : activeModal === "Drishti" ? (
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    {/* Title and tagline at top center */}
                    <div className="w-full text-center mb-8 sm:mb-10">
                      <h2 className="text-2xl sm:text-3xl lg:text-5xl p-2 sm:p-3 font-bold tracking-wide bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent text-center leading-tight break-words whitespace-normal">
                        Drishti – Idea Pitching Event
                      </h2>
                      <p className="italic text-blue-400">Pitch. Persuade. Propel.</p>
                    </div>
                    {/* Main content: image and text */}
                    <div className="w-full flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-6">
                      {/* Left: Image */}
                      <div className="w-full sm:w-1/3">
                        <img
                          src="/src/assets/event-posters/Drishti.PNG"
                          alt="Drishti"
                          className="w-full max-w-[220px] sm:max-w-[260px] object-contain rounded-lg mx-auto"
                        />
                      </div>
                      {/* Right: Text */}
                      <div className="w-full sm:w-2/3 flex flex-col items-center justify-center text-center px-2 sm:px-6">
                        <div>
                          <p className="text-neutral-300 text-sm sm:text-base mb-4">
                            Drishti is <strong>TechSurge 2K25’s</strong> signature pitching competition inspired by <em>Shark Tank</em>, where innovators present their game-changing ideas to a panel of industry experts, mentors, and potential investors.
                          </p>
                          <p className="text-neutral-300 text-sm sm:text-base mb-4">
                            Participants focus on innovation, feasibility, and market potential. The expert panel offers feedback, evaluates for collaboration, and supports standout ideas.
                          </p>
                          <div className="bg-white/5 border border-white/10 rounded-lg p-4 sm:p-5 mt-4 mb-6">
                            <p className="text-neutral-300 text-sm sm:text-base mb-4 font-semibold">Why Participate?</p>
                            <ul className="text-left text-sm text-neutral-300 mb-6 space-y-1 list-disc pl-4">
                              <li>Showcase your entrepreneurial vision on a national platform</li>
                              <li>Gain expert insights and validation</li>
                              <li>Network with mentors, founders, and investors</li>
                              <li>Win cash prizes and incubation support</li>
                            </ul>
                          </div>
                          <p className="text-neutral-300 text-sm sm:text-base mb-6 italic">
                            Think big. Pitch smart. Build the future.
                          </p>
                          <div className="flex flex-wrap gap-2 justify-center mt-4">
                            <div className="inline-block px-4 py-1 rounded-full bg-blue-400/10 border border-blue-300 text-blue-300 text-sm font-medium">
                              ₹200 Registration Fee
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Buttons at bottom center */}
                    <div className="w-full flex flex-col items-center justify-center gap-4 mt-6 sm:mt-8">
                      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <a href="https://forms.gle/gLswHWz9p4rqDSUEA" target="_blank" rel="noopener noreferrer">
                          <BorderedButton>
                            Register for Drishti
                          </BorderedButton>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 pr-8">{activeModal}</h3>
                    <p className="text-neutral-300 text-sm sm:text-base">
                      More information about {activeModal} will be available soon.
                      Stay tuned!
                    </p>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
        </div>
      </div>
    </div>
  );
}

export default Events;