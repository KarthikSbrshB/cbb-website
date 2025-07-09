import teamImage from "../assets/img/TEAM-1.jpeg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import CircularGallery from "../components/CircularGallery";
import { Spotlight } from "../components/Spotlight";
import ComputersCanvas from "../components/ComputersCanvas";
import logo from "../assets/logo.png";
import BorderedButton from "../components/BorderedButton";
import img1 from "../assets/home-gallery/IMG-1.JPG";
import img2 from "../assets/home-gallery/IMG-2.JPG";
import img3 from "../assets/home-gallery/IMG-3.jpg";
import img4 from "../assets/home-gallery/IMG-4.JPG";
import img5 from "../assets/home-gallery/IMG-5.jpeg";
import img6 from "../assets/home-gallery/IMG-6.jpeg";
import img7 from "../assets/home-gallery/IMG-7.JPG";
import img8 from "../assets/home-gallery/IMG-8.JPG";
import img9 from "../assets/home-gallery/IMG-9.JPG";

function Home() {
  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  return (
    <div className="relative flex w-full items-center justify-center bg-black overflow-x-hidden">
      <Spotlight />
      <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-20 w-full text-white">
        {/* Hero Section */}
        <section className="min-h-screen py-10 sm:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <img src={logo} alt="CBB Logo" className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mb-8 sm:mb-10 pb-6 object-contain drop-shadow-[0_8px_16px_rgba(76,222,245,0.35)]" />
          <h2 className="text-4xl pb-1 sm:text-5xl md:text-7xl font-extrabold text-center">
            <span className="bg-gradient-to-b from-[#c0f4ff] to-[#4cdef5] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] [text-shadow:_0_2px_4px_rgba(0,0,0,0.4)]">Coding </span>
            <span className="bg-gradient-to-b from-[#c0f4ff] to-[#4cdef5] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] [text-shadow:_0_2px_4px_rgba(0,0,0,0.4)]">Brigade </span>
            <span className="bg-gradient-to-b from-[#81c7f5] to-[#1b7bb3] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] [text-shadow:_0_2px_4px_rgba(0,0,0,0.4)]">BVRIT</span>
          </h2>
          <p className="mt-6 sm:mt-8 text-lg sm:text-2xl text-orange-300 animate-pulse font-medium tracking-wide">
            March Towards Success
          </p>
          <Link 
            to="/about"
            onClick={scrollToTop}
            className="inline-flex items-center mt-10 sm:mt-14"
          >
            <BorderedButton>Know More</BorderedButton>
          </Link>
        </section>
        
        {/* Upcoming Events */}
        <section className="min-h-[80vh] py-4 sm:py-8 flex flex-col items-center justify-center text-center px-2 sm:px-4">
          <div className="max-w-5xl w-full bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-2xl p-10 sm:p-16 border border-[#4cdef5]/20 [box-shadow:_0_0_25px_6px_rgba(76,222,245,0.15)] animate-[glowPulse_2s_ease-in-out_infinite]">
            <div className="mb-6 sm:mb-8 mt-[-8px]">
              <div className="inline-block px-4 py-2 bg-[#4cdef5]/10 text-[#4cdef5] font-semibold rounded-full text-sm tracking-wide shadow-inner">
                CURRENT EVENT
              </div>
            </div>
            <h3 className="text-3xl py-4 sm:text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-[#4cdef5]">
              TechSurge 2K25
            </h3>
            <div className="space-y-3 text-base sm:text-lg text-white/90 font-medium">
              <p className="text-[#4cdef5] font-semibold">Department of CSE, BVRIT presents</p>
              <p>A national-level techfest with hackathons, ideathons, and a prize pool of <span className="text-[#4cdef5] font-bold">1 Lakh</span>!</p>
              <p className="text-[#4cdef5] font-semibold">29th & 30th July, 2025</p>
              <p className="my-8">Prize Pool: <span className="text-[#4cdef5] font-bold">1 Lakh</span></p>
              <p><span className="font-bold text-[#4cdef5]">29th July:</span> Vyoma Hackathon</p>
              <p><span className="font-bold text-[#4cdef5]">30th July:</span> Drishti Ideathon</p>
              <p className="py-4 text-orange-300 font-semibold">Don't miss out! Open to all students.</p>
            </div>
            <div className="mt-2 sm:mt-10">
              <Link to="/events" className="inline-flex items-center">
                <BorderedButton>Participate Now!</BorderedButton>
              </Link>
            </div>
          </div>
        </section>

        {/* Meet the Team Glimpse */}
        <section className="min-h-screen py-10 sm:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <div className="max-w-3xl md:max-w-6xl mx-auto">
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-16 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
              Meet the Team
            </h3>
            {/* Team Photo with Spinning Border */}
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="relative inline-block overflow-hidden rounded-xl p-[2px]">
                <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4cdef5_0%,#1b7bb3_50%,#4cdef5_100%)]" />
                <div className="relative bg-black rounded-xl">
                  <img 
                    src={teamImage} 
                    alt="CBB Team" 
                    className="rounded-xl mx-auto max-w-xs w-[90vw] h-auto md:max-w-full"
                    style={{ maxHeight: '40vh', minHeight: '120px', maxWidth: '100%' , ...(window.innerWidth >= 768 ? { maxHeight: '600px', maxWidth: '800px' } : {}) }}
                  />
                </div>
              </div>
            </div>
            {/* Call to Action */}
            <div className="flex justify-center">
              <Link 
                to="/team"
                onClick={scrollToTop}
                className="inline-flex items-center"
              >
                <BorderedButton>View Full Team</BorderedButton>
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="min-h-screen py-10 sm:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <div className="max-w-3xl md:max-w-6xl mx-auto w-full">
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:-mb-16 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
              Gallery Preview
            </h3>
            <div className="w-full h-[200px] sm:h-[350px] md:h-[600px] relative">
              <CircularGallery
                bend={3}
                textColor="#ffffff"
                borderRadius={0.05}
                scrollEase={0.02}
                items={[
                  { image: img1 },
                  { image: img2 },
                  { image: img3 },
                  { image: img4 },
                  { image: img5 },
                  { image: img6 },
                  { image: img7 },
                  { image: img8 },
                  { image: img9 },
                ]}
              />
            </div>
            <Link 
              to="/events"
              className="inline-flex items-center mt-6 sm:mt-10"
            >
              <BorderedButton>View All</BorderedButton>
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
