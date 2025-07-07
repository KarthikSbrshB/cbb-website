import React from 'react';
import Footer from "../components/Footer";
import CardSwap, { Card } from "../components/CardSwap";
import AboutVideo from "../assets/About-Video.mp4";

// Custom bordered card class matching Contact page colors with spinning border animation
const borderedCard = "relative overflow-hidden rounded-xl p-[1px]";
const cardInner = "bg-[#0e0e0e] backdrop-blur-md rounded-xl w-full h-full relative z-10";
const spinningBorder = "absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4cdef5_0%,#1e3a8a_50%,#4cdef5_100%)]";

function About() {
  return (
    <div className="relative flex w-full items-center justify-center bg-black">
      <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-20 w-full text-white">
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-8 mt-24">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
              About CBB
            </h1>
          </div>

          {/* About Content */}
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Mission Statement */}
            <div className={borderedCard}>
              <span className={spinningBorder}></span>
              <div className={cardInner + " p-8 md:p-12"}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                Our Mission
              </h2>
                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                CBB is a dynamic student-driven coding club at BVRIT College where passionate minds with diverse technical skills unite to build, learn, and inspire. We're not just another coding club – we're a community of innovators, problem-solvers, and future tech leaders who believe in the power of collaboration and continuous learning.
              </p>
              </div>
            </div>

            {/* What We Do & Values */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className={borderedCard}>
                <span className={spinningBorder}></span>
                <div className={cardInner + " p-8 h-full"}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                  What We Do
                </h3>
                  <p className="text-neutral-300 mb-6 leading-relaxed">
                  At CBB, we cultivate a culture of peer-to-peer learning, innovation, and collaboration. Our mission is to bridge the gap between academic knowledge and real-world application through hands-on experience and teamwork.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-neutral-300">Promote collaborative learning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-neutral-300">Foster innovation and creativity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-neutral-300">Build practical tech skills</span>
                  </div>
                  <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-neutral-300">Prepare for future careers</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={borderedCard}>
                <span className={spinningBorder}></span>
                <div className={cardInner + " p-8 h-full"}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
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
                    <h4 className="text-xl font-semibold text-white mb-2">Student Leadership</h4>
                          <p className="text-neutral-400 text-sm">Empowering students to lead initiatives and drive change in the tech community.</p>
                        </div>
                      </div>
                      
                      <div className="relative flex items-start">
                        <div className="absolute left-4 w-4 h-4 rounded-full bg-black border-2 border-blue-500 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                        <div className="ml-12">
                    <h4 className="text-xl font-semibold text-white mb-2">Knowledge Sharing</h4>
                          <p className="text-neutral-400 text-sm">Creating an open environment where everyone teaches and learns from each other.</p>
                        </div>
                      </div>
                      
                      <div className="relative flex items-start">
                        <div className="absolute left-4 w-4 h-4 rounded-full bg-black border-2 border-blue-500 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                        <div className="ml-12">
                    <h4 className="text-xl font-semibold text-white mb-2">Continuous Growth</h4>
                          <p className="text-neutral-400 text-sm">Providing a platform for ongoing development and skill enhancement.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div className={borderedCard}>
              <span className={spinningBorder}></span>
              <div className={cardInner + " p-8 md:p-12"}>
                <h3 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent text-center">
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
            </div>

            {/* Events Section with CardSwap */}
            <div className={borderedCard}>
              <span className={spinningBorder}></span>
              <div className={cardInner + " p-8 md:p-12"}>
                <h3 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent text-center">
                  Our Events & Activities
              </h3>
                
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  {/* Left side - Content */}
                  <div className="space-y-6">
                    <p className="text-neutral-300 text-lg leading-relaxed">
                      CBB hosts a wide range of events designed to promote innovation, collaboration, and skill development. From hands-on hackathons to expert-led workshops, our activities empower students to grow both technically and professionally.
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="text-2xl font-semibold text-white mb-4">Key Highlights:</h4>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-neutral-300">Hands-on coding challenges and projects</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-neutral-300">Interactions with industry professionals</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-neutral-300">Real-world tech workshops and ideathons</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-neutral-300">Peer learning and team-based competitions</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-neutral-300">Career guidance and skill-building sessions</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right side - CardSwap */}
                  <div className="flex justify-start items-center mt-24 ml-12 overflow-visible">
                    <CardSwap
                      width={400}
                      height={300}
                      cardDistance={60}
                      verticalDistance={70}
                      delay={2500}
                      pauseOnHover={false}
                      easing="power1.inOut"
                    >
                      <Card className="p-4 flex flex-col justify-center items-center text-center">
                        <div className="text-3xl mb-3">🚀</div>
                        <h4 className="text-lg font-bold text-white mb-2">Hackathons</h4>
                        <p className="text-neutral-300 text-xs">Intensive coding marathons where teams build innovative solutions to real-world problems.</p>
                      </Card>
                      <Card className="p-4 flex flex-col justify-center items-center text-center">
                        <div className="text-3xl mb-3">⚡</div>
                        <h4 className="text-lg font-bold text-white mb-2">Coding Contests</h4>
                        <p className="text-neutral-300 text-xs">Competitive programming events to sharpen problem-solving skills and algorithmic thinking.</p>
                      </Card>
                      <Card className="p-4 flex flex-col justify-center items-center text-center">
                        <div className="text-3xl mb-3">💡</div>
                        <h4 className="text-lg font-bold text-white mb-2">Ideathons</h4>
                        <p className="text-neutral-300 text-xs">Brainstorming sessions where creativity meets technology to generate groundbreaking ideas.</p>
                      </Card>
                      <Card className="p-4 flex flex-col justify-center items-center text-center">
                        <div className="text-3xl mb-3">🎯</div>
                        <h4 className="text-lg font-bold text-white mb-2">Career Development</h4>
                        <p className="text-neutral-300 text-xs">Workshops, seminars, and mentorship programs to prepare students for their tech careers.</p>
                      </Card>
                      <Card className="p-4 flex flex-col justify-center items-center text-center">
                        <div className="text-3xl mb-3">🌐</div>
                        <h4 className="text-lg font-bold text-white mb-2">Tech Awareness</h4>
                        <p className="text-neutral-300 text-xs">Events to explore emerging technologies and stay updated with industry trends.</p>
                      </Card>
                      <Card className="p-4 flex flex-col justify-center items-center text-center">
                        <div className="text-3xl mb-3">🤝</div>
                        <h4 className="text-lg font-bold text-white mb-2">Collaboration</h4>
                        <p className="text-neutral-300 text-xs">Team projects and collaborative initiatives that bring diverse skills together.</p>
                      </Card>
                    </CardSwap>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className={borderedCard}>
                <span className={spinningBorder}></span>
                <div className={cardInner + " text-center p-6"}>
                  <div className="text-3xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent mb-2">200+</div>
                  <div className="text-neutral-300 text-sm">Active Members</div>
                </div>
              </div>
              <div className={borderedCard}>
                <span className={spinningBorder}></span>
                <div className={cardInner + " text-center p-6"}>
                  <div className="text-3xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent mb-2">50+</div>
                  <div className="text-neutral-300 text-sm">Events Hosted</div>
                </div>
              </div>
              <div className={borderedCard}>
                <span className={spinningBorder}></span>
                <div className={cardInner + " text-center p-6"}>
                  <div className="text-3xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent mb-2">25+</div>
                  <div className="text-neutral-300 text-sm">Projects Built</div>
                </div>
              </div>
              <div className={borderedCard}>
                <span className={spinningBorder}></span>
                <div className={cardInner + " text-center p-6"}>
                  <div className="text-3xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent mb-2">5+</div>
                  <div className="text-neutral-300 text-sm">Years Strong</div>
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