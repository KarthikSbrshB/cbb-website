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
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 mb-0 sm:mb-0">
          <img src={logo} alt="CBB Logo" className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 mb-6 sm:mb-8 object-contain" />
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center">
            <span className="text-[#4cdef5]">Coding </span>
            <span className="text-[#1b7bb3]">Brigade BVRIT</span>
          </h2>
          <p className="mt-6 sm:mt-8 text-lg sm:text-2xl text-orange-300 animate-pulse font-medium tracking-wide">
            Marching Towards Success
          </p>
        </section>

        {/* About Glimpse */}
        <section className="pt-1 pb-10 sm:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <div className="max-w-2xl sm:max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
              About Glimpse
            </h3>
            <p className="text-base sm:text-xl md:text-2xl text-neutral-300 leading-relaxed mb-8 sm:mb-12">
              CBB (Coding Brigade BVRIT) is a student-run coding club that empowers young minds through technology, collaboration, and innovation.
            </p>
            <Link 
              to="/about"
              onClick={scrollToTop}
              className="inline-flex items-center"
            >
              <BorderedButton>Read More</BorderedButton>
            </Link>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-10 sm:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <div className="max-w-6xl mx-auto w-full">
            <h3 className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-4 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
              TechSurge 2K25
            </h3>
            <div className="md:grid md:grid-cols-2 md:items-center md:gap-8 min-h-[400px]">
              {/* Text Column */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left justify-center h-full">
                <div className="text-base sm:text-lg font-semibold mb-1 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">Department of CSE, BVRIT presents</div>
                <div className="text-base sm:text-lg mb-3 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">A national-level techfest with hackathons, ideathons, and a prize pool of <span className='text-[#4cdef5] font-bold'>1 Lakh</span>!</div>
                <div className="text-lg sm:text-xl font-semibold mb-2 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">29th & 30th July, 2025</div>
                <div className="text-base sm:text-lg mb-2 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">Prize Pool: <span className="text-[#4cdef5] font-bold">1 Lakh</span></div>
                <div className="flex flex-col gap-2 items-center md:items-start mb-4 w-full">
                  <div className="text-base sm:text-lg bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                    <span className="font-bold">29th July:</span> <span className="font-bold text-[#4cdef5]">Vyoma</span> Hackathon
                  </div>
                  <div className="text-base sm:text-lg bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                    <span className="font-bold">30th July:</span> <span className="font-bold text-[#4cdef5]">Drishti</span> Ideathon
                  </div>
                </div>
                <div className="text-base sm:text-lg font-semibold mb-4 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">Don't miss out! Open to all students.</div>
                <div className="flex w-full justify-center md:justify-start">
                  <Link to="/events" className="inline-flex items-center mb-4">
                    <BorderedButton>Register</BorderedButton>
                  </Link>
                </div>
              </div>
              {/* Computer Model Column */}
              <div className="hidden md:flex w-full h-[250px] md:h-[350px] lg:h-[400px] xl:h-[450px] items-center justify-center">
                <ComputersCanvas />
              </div>
            </div>
            {/* Mobile Computer Model */}
            <div className="block md:hidden w-full h-[160px] mt-4 bg-black flex items-center justify-center rounded-xl">
              <div className="w-full h-full flex items-center justify-center">
                <ComputersCanvas />
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team Glimpse */}
        <section className="py-10 sm:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6">
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
        <section className="py-10 sm:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6">
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

        {/* Call to Action */}
        <section className="py-10 sm:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <div className="max-w-2xl sm:max-w-4xl mx-auto">
            <div className="bg-[#0e0e0e] backdrop-blur-md border border-white/10 rounded-xl p-6 sm:p-12 shadow-lg flex flex-col items-center text-center">
              <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">💡</div>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                Ready to be part of something big?
              </h3>
              <p className="text-base sm:text-xl text-neutral-300 mb-6 sm:mb-8">
                Join CBB and start your journey in tech today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                <Link 
                  to="/contact-us"
                  onClick={scrollToTop}
                  className="inline-flex items-center"
                >
                  <BorderedButton>Join Now</BorderedButton>
                </Link>
                <Link 
                  to="/contact-us"
                  onClick={scrollToTop}
                  className="inline-flex items-center"
                >
                  <BorderedButton>Contact Us</BorderedButton>
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
