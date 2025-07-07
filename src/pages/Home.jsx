import logo from "../assets/logo.png";
import teamImage from "../assets/img/TEAM-1.jpeg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import CircularGallery from "../components/CircularGallery";
import { Spotlight } from "../components/Spotlight";
import ComputersCanvas from "../components/ComputersCanvas";

function Home() {
  const scrollToTop = () => {
    console.log("Scroll to top function called");
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
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
          <img src={logo} alt="CBB Logo" className="w-72 h-72 mb-8 object-contain" />
          <h2 className="text-7xl font-bold text-center">
            <span className="text-[#4cdef5]">Coding </span>
            <span className="text-[#1b7bb3]">Brigade BVRIT</span>
          </h2>
          <p className="mt-8 text-2xl text-orange-300 animate-pulse font-medium tracking-wide">
            Marching Towards Success
          </p>
        </section>

        {/* About Glimpse */}
        <section className="py-16 flex flex-col items-center justify-center text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
              About Glimpse
            </h3>
            <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed mb-12">
              CBB (Coding Brigade BVRIT) is a student-run coding club that empowers young minds through technology, collaboration, and innovation.
            </p>
            <Link 
              to="/about"
              onClick={scrollToTop}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#4cdef5] to-[#1b7bb3] text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Read More
            </Link>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 flex flex-col items-center justify-center text-center px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
              Upcoming Events
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h4 className="text-2xl font-bold text-white mb-4">TechSurge 2k25</h4>
                <p className="text-neutral-300 mb-4">Our annual techfest featuring hackathons, workshops, and competitions.</p>
                <div className="text-[#4cdef5] font-semibold mb-6">July 17-18, 2025</div>
                <button className="px-6 py-3 bg-gradient-to-r from-[#4cdef5] to-[#1b7bb3] text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300">
                  Register Now
                </button>
              </div>
              <div className="hidden md:block w-full h-[350px] lg:h-[400px] xl:h-[450px]">
                <ComputersCanvas />
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team Glimpse */}
        <section className="py-16 flex flex-col items-center justify-center text-center px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
              Meet the Team
            </h3>
            
            {/* Team Photo with Spinning Border */}
            <div className="flex justify-center mb-8">
              <div className="relative inline-block overflow-hidden rounded-xl p-[2px]">
                <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4cdef5_0%,#1b7bb3_50%,#4cdef5_100%)]" />
                <div className="relative bg-black rounded-xl">
                  <img 
                    src={teamImage} 
                    alt="CBB Team" 
                    className="max-w-full h-auto rounded-xl"
                    style={{ maxHeight: '600px', maxWidth: '800px' }}
                  />
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="flex justify-center">
              <Link 
                to="/team"
                onClick={scrollToTop}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#4cdef5] to-[#1b7bb3] text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                View Full Team
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="py-16 flex flex-col items-center justify-center text-center px-6">
          <div className="max-w-6xl mx-auto w-full">
            <h3 className="text-4xl md:text-5xl font-bold -mb-16 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
              Gallery Preview
            </h3>
            <div style={{ height: '600px', position: 'relative', width: '100%' }}>
              <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
            </div>
            <Link 
              to="/events"
              className="inline-flex items-center px-8 py-4 mt-10 bg-gradient-to-r from-[#4cdef5] to-[#1b7bb3] text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              View All
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 flex flex-col items-center justify-center text-center px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#0e0e0e] backdrop-blur-md border border-white/10 rounded-xl p-12 shadow-lg">
              <div className="text-6xl mb-6">💡</div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                Ready to be part of something big?
              </h3>
              <p className="text-xl text-neutral-300 mb-8">
                Join CBB and start your journey in tech today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact-us"
                  onClick={scrollToTop}
                  className="px-8 py-4 bg-gradient-to-r from-[#4cdef5] to-[#1b7bb3] text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
                >
                  Join Now
                </Link>
                <Link 
                  to="/contact-us"
                  onClick={scrollToTop}
                  className="px-8 py-4 border border-[#4cdef5] text-[#4cdef5] font-semibold rounded-full hover:bg-[#4cdef5] hover:text-black transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default Home;
