import React from 'react';
import Footer from "../components/Footer";
import CardSwap, { Card } from "../components/CardSwap";
import AboutVideo from "../assets/About-Video.mp4";

function About() {
  return (
    <div className="relative flex w-full items-center justify-center bg-black">
      <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-20 w-full text-white">
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6">
          {/* About Content */}
          <div className="max-w-6xl mx-auto space-y-10 sm:space-y-16">
            {/* Mission Statement - NO BOX */}
            <div className="mb-6 sm:mb-8 mt-16 sm:mt-24 px-2 sm:px-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed">
                CBB is a dynamic student-driven coding club at BVRIT College where passionate minds with diverse technical skills unite to build, learn, and inspire. We're not just another coding club – we're a community of innovators, problem-solvers, and future tech leaders who believe in the power of collaboration and continuous learning.
              </p>
            </div>

            {/* What We Do & Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="border border-white/10 rounded-xl bg-[#0e0e0e] backdrop-blur-md p-4 sm:p-8 h-full">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                  What We Do
                </h3>
                <p className="text-neutral-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  At CBB, we cultivate a culture of peer-to-peer learning, innovation, and collaboration. Our mission is to bridge the gap between academic knowledge and real-world application through hands-on experience and teamwork.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-neutral-300 text-sm sm:text-base">Promote collaborative learning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-neutral-300 text-sm sm:text-base">Foster innovation and creativity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-neutral-300 text-sm sm:text-base">Build practical tech skills</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-neutral-300 text-sm sm:text-base">Prepare for future careers</span>
                  </div>
                </div>
              </div>

              <div className="border border-white/10 rounded-xl bg-[#0e0e0e] backdrop-blur-md p-4 sm:p-8 h-full">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                  Our Values
                </h3>
                <div className="relative">
                  {/* Vertical line connecting dots */}
                  <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-neutral-700 to-transparent"></div>
                  <div className="space-y-8">
                    <div className="relative flex items-start">
                      <div className="absolute left-4 w-4 h-4 rounded-full bg-black border-2 border-blue-500 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      </div>
                      <div className="ml-12">
                        <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Student Leadership</h4>
                        <p className="text-neutral-400 text-xs sm:text-sm">Empowering students to lead initiatives and drive change in the tech community.</p>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="absolute left-4 w-4 h-4 rounded-full bg-black border-2 border-blue-500 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      </div>
                      <div className="ml-12">
                        <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Knowledge Sharing</h4>
                        <p className="text-neutral-400 text-xs sm:text-sm">Creating an open environment where everyone teaches and learns from each other.</p>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="absolute left-4 w-4 h-4 rounded-full bg-black border-2 border-blue-500 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      </div>
                      <div className="ml-12">
                        <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Continuous Growth</h4>
                        <p className="text-neutral-400 text-xs sm:text-sm">Providing a platform for ongoing development and skill enhancement.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div className="border border-white/10 rounded-xl bg-[#0e0e0e] backdrop-blur-md p-4 sm:p-8 md:p-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent text-center">
                Our Journey
              </h3>
              <div className="flex justify-center">
                <video 
                  className="w-full rounded-lg shadow-lg"
                  controls
                  autoPlay
                  muted
                  loop
                >
                  <source src={AboutVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Events Section with CardSwap */}
            <div className="border border-white/10 rounded-xl bg-[#0e0e0e] backdrop-blur-md p-4 sm:p-8 md:p-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent text-center">
                Our Events & Activities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
                {/* Left side - Content */}
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
                    CBB hosts a wide range of events designed to promote innovation, collaboration, and skill development. From hands-on hackathons to expert-led workshops, our activities empower students to grow both technically and professionally.
                  </p>
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="text-lg sm:text-2xl font-semibold text-white mb-2 sm:mb-4">Key Highlights:</h4>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-neutral-300 text-sm sm:text-base">Hands-on coding challenges and projects</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-neutral-300 text-sm sm:text-base">Interactions with industry professionals</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-neutral-300 text-sm sm:text-base">Real-world tech workshops and ideathons</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-neutral-300 text-sm sm:text-base">Peer learning and team-based competitions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-neutral-300 text-sm sm:text-base">Career guidance and skill-building sessions</span>
                    </div>
                  </div>
                </div>
                {/* Right side - CardSwap */}
                <div className="flex justify-center md:justify-start items-center mt-12 sm:mt-24 md:ml-12 overflow-visible">
                  <CardSwap
                    width={320}
                    height={220}
                    cardDistance={40}
                    verticalDistance={50}
                    delay={2500}
                    pauseOnHover={false}
                    easing="power1.inOut"
                  >
                    {/* Hackathons */}
                    <Card className="relative w-full h-full flex flex-col justify-end items-start rounded-xl overflow-hidden">
                      <img src="/src/assets/about-images/Hackathon.jpeg" alt="Hackathons" className="absolute inset-0 w-full h-full object-cover z-0" />
                      <div className="absolute inset-0 bg-black/40 z-10" />
                      <div className="relative z-20 p-4">
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-1">Hackathons</h4>
                        <p className="text-xs sm:text-sm text-neutral-200">Intensive coding marathons where teams build innovative solutions to real-world problems.</p>
                      </div>
                    </Card>
                    {/* Coding Contests */}
                    <Card className="relative w-full h-full flex flex-col justify-end items-start rounded-xl overflow-hidden">
                      <img src="/src/assets/about-images/codingcontest.jpeg" alt="Coding Contests" className="absolute inset-0 w-full h-full object-cover z-0" />
                      <div className="absolute inset-0 bg-black/40 z-10" />
                      <div className="relative z-20 p-4">
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-1">Coding Contests</h4>
                        <p className="text-xs sm:text-sm text-neutral-200">Competitive programming events to sharpen problem-solving skills and algorithmic thinking.</p>
                      </div>
                    </Card>
                    {/* Ideathons */}
                    <Card className="relative w-full h-full flex flex-col justify-end items-start rounded-xl overflow-hidden">
                      <img src="/src/assets/about-images/Ideathon.jpeg" alt="Ideathons" className="absolute inset-0 w-full h-full object-cover z-0" />
                      <div className="absolute inset-0 bg-black/40 z-10" />
                      <div className="relative z-20 p-4">
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-1">Ideathons</h4>
                        <p className="text-xs sm:text-sm text-neutral-200">Brainstorming sessions where creativity meets technology to generate groundbreaking ideas.</p>
                      </div>
                    </Card>
                    {/* Career Development */}
                    <Card className="relative w-full h-full flex flex-col justify-end items-start rounded-xl overflow-hidden">
                      <img src="/src/assets/about-images/careerdevelopment.jpeg" alt="Career Development" className="absolute inset-0 w-full h-full object-cover z-0" />
                      <div className="absolute inset-0 bg-black/40 z-10" />
                      <div className="relative z-20 p-4">
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-1">Career Development</h4>
                        <p className="text-xs sm:text-sm text-neutral-200">Workshops, seminars, and mentorship programs to prepare students for their tech careers.</p>
                      </div>
                    </Card>
                    {/* Tech Awareness */}
                    <Card className="relative w-full h-full flex flex-col justify-end items-start rounded-xl overflow-hidden">
                      <img src="/src/assets/about-images/techawareness.jpeg" alt="Tech Awareness" className="absolute inset-0 w-full h-full object-cover z-0" />
                      <div className="absolute inset-0 bg-black/40 z-10" />
                      <div className="relative z-20 p-4">
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-1">Tech Awareness</h4>
                        <p className="text-xs sm:text-sm text-neutral-200">Events to explore emerging technologies and stay updated with industry trends.</p>
                      </div>
                    </Card>
                    {/* Collaboration */}
                    <Card className="relative w-full h-full flex flex-col justify-end items-start rounded-xl overflow-hidden">
                      <img src="/src/assets/about-images/collabration.jpeg" alt="Collaboration" className="absolute inset-0 w-full h-full object-cover z-0" />
                      <div className="absolute inset-0 bg-black/40 z-10" />
                      <div className="relative z-20 p-4">
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-1">Collaboration</h4>
                        <p className="text-xs sm:text-sm text-neutral-200">Team projects and collaborative initiatives that bring diverse skills together.</p>
                      </div>
                    </Card>
                  </CardSwap>
                </div>
              </div>
            </div>

            {/* About Gallery Section */}
            <div className="mt-10 mb-16">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-10 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent text-center">
                CBB Event Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="relative rounded-xl overflow-hidden shadow-lg group h-64 flex items-end">
                  <img src="/public/images/DL_Workshop/DL-1.jpg" alt="DL Workshop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-0 left-0 w-full bg-black/60 p-4">
                    <h4 className="text-lg font-bold text-white mb-1">DL Workshop</h4>
                    <p className="text-xs text-neutral-200">Hands-on deep learning sessions for all levels.</p>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="relative rounded-xl overflow-hidden shadow-lg group h-64 flex items-end">
                  <img src="/public/images/FutureStack/FutureStack-1.jpg" alt="FutureStack" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-0 left-0 w-full bg-black/60 p-4">
                    <h4 className="text-lg font-bold text-white mb-1">FutureStack</h4>
                    <p className="text-xs text-neutral-200">Exploring the future of technology and innovation.</p>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="relative rounded-xl overflow-hidden shadow-lg group h-64 flex items-end">
                  <img src="/public/images/Nandyala/Nandyala-2.jpeg" alt="Interaction with Young Entrepreneurs" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-0 left-0 w-full bg-black/60 p-4">
                    <h4 className="text-lg font-bold text-white mb-1">Interaction with Young Entrepreneurs</h4>
                    <p className="text-xs text-neutral-200">Inspiring sessions and networking with emerging business leaders.</p>
                  </div>
                </div>
                {/* Card 4 */}
                <div className="relative rounded-xl overflow-hidden shadow-lg group h-64 flex items-end">
                  <img src="/public/images/TechSurge24/TechSurge-1.JPG" alt="TechSurge24" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-0 left-0 w-full bg-black/60 p-4">
                    <h4 className="text-lg font-bold text-white mb-1">TechSurge 24</h4>
                    <p className="text-xs text-neutral-200">Annual flagship event with coding, talks, and more.</p>
                  </div>
                </div>
                {/* Card 5 */}
                <div className="relative rounded-xl overflow-hidden shadow-lg group h-64 flex items-end">
                  <img src="/public/images/TechTussle/TechTussle-1.JPG" alt="TechTussle" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-0 left-0 w-full bg-black/60 p-4">
                    <h4 className="text-lg font-bold text-white mb-1">TechTussle</h4>
                    <p className="text-xs text-neutral-200">Competitive programming and team challenges.</p>
                  </div>
                </div>
                {/* Card 6 */}
                <div className="relative rounded-xl overflow-hidden shadow-lg group h-64 flex items-end">
                  <img src="/public/images/TechTussle2/TechTussle2-1.jpg" alt="TechTussle2" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-0 left-0 w-full bg-black/60 p-4">
                    <h4 className="text-lg font-bold text-white mb-1">TechTussle 2.0</h4>
                    <p className="text-xs text-neutral-200">The next level of tech battles and innovation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default About;