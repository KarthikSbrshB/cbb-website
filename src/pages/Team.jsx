import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";

function Team() {
  const teamMembers = [
    {
      name: "Karthik",
      role: "President",
      image: "/src/assets/img/karthik.png",
      email: "karthik@bvrit.ac.in",
      linkedin: "https://linkedin.com/in/karthik-cbb",
      github: "https://github.com/karthik-cbb",
      twitter: "https://twitter.com/karthik-cbb"
    },
    {
      name: "Sowmya",
      role: "Vice President",
      image: "/src/assets/img/sowmya.png",
      email: "sowmya@bvrit.ac.in",
      linkedin: "https://linkedin.com/in/sowmya-cbb",
      github: "https://github.com/sowmya-cbb",
      twitter: "https://twitter.com/sowmya-cbb"
    },
    {
      name: "Rashmitha Sai",
      role: "Director of Administration",
      image: "/src/assets/img/rashmitha sai.png",
      email: "rashmitha@bvrit.ac.in",
      linkedin: "https://linkedin.com/in/rashmitha-cbb",
      github: "https://github.com/rashmitha-cbb",
      twitter: "https://twitter.com/rashmitha-cbb"
    },
    {
      name: "Eshwari",
      role: "Marketing Executive",
      image: "/src/assets/img/eshwari.png",
      email: "eshwari@bvrit.ac.in",
      linkedin: "https://linkedin.com/in/eshwari-cbb",
      github: "https://github.com/eshwari-cbb",
      twitter: "https://twitter.com/eshwari-cbb"
    },
    {
      name: "Santhosh",
      role: "Social Media Manager",
      image: "/src/assets/img/santhosh.png",
      email: "santhosh@bvrit.ac.in",
      linkedin: "https://linkedin.com/in/santhosh-cbb",
      github: "https://github.com/santhosh-cbb",
      twitter: "https://twitter.com/santhosh-cbb"
    },
    {
      name: "Ajay Kumar",
      role: "Head of Technical Department",
      image: "/src/assets/img/ajay kumar.png",
      email: "ajay@bvrit.ac.in",
      linkedin: "https://linkedin.com/in/ajay-cbb",
      github: "https://github.com/ajay-cbb",
      twitter: "https://twitter.com/ajay-cbb"
    },
    {
      name: "Thrinath",
      role: "Event Manager",
      image: "/src/assets/img/thrinath.png",
      email: "thrinath@bvrit.ac.in",
      linkedin: "https://linkedin.com/in/thrinath-cbb",
      github: "https://github.com/thrinath-cbb",
      twitter: "https://twitter.com/thrinath-cbb"
    },
    {
      name: "Pavan Chandra",
      role: "Event Manager",
      image: "/src/assets/img/pavan chandra.png",
      email: "pavan@bvrit.ac.in",
      linkedin: "https://linkedin.com/in/pavan-cbb",
      github: "https://github.com/pavan-cbb",
      twitter: "https://twitter.com/pavan-cbb"
    },
    {
      name: "Reshmi",
      role: "Hospitality Head",
      image: "/src/assets/img/reshmi.png",
      email: "reshmi@bvrit.ac.in",
      linkedin: "https://linkedin.com/in/reshmi-cbb",
      github: "https://github.com/reshmi-cbb",
      twitter: "https://twitter.com/reshmi-cbb"
    },
    {
      name: "Aniket",
      role: "Digital Head",
      image: "/src/assets/img/aniket.png",
      email: "aniket@bvrit.ac.in",
      linkedin: "https://linkedin.com/in/aniket-cbb",
      github: "https://github.com/aniket-cbb",
      twitter: "https://twitter.com/aniket-cbb"
    },
    {
      name: "Sai Charan",
      role: "Feedback & Review Manager",
      image: "/src/assets/img/sai charan.png",
      email: "saicharan@bvrit.ac.in",
      linkedin: "https://linkedin.com/in/saicharan-cbb",
      github: "https://github.com/saicharan-cbb",
      twitter: "https://twitter.com/saicharan-cbb"
    },
    {
      name: "Sriya",
      role: "Innovation & Outreach Lead",
      image: "/src/assets/img/sriya.png",
      email: "sriya@bvrit.ac.in",
      linkedin: "https://linkedin.com/in/sriya-cbb",
      github: "https://github.com/sriya-cbb",
      twitter: "https://twitter.com/sriya-cbb"
    },
    {
      name: "Vasanth",
      role: "Head of Logistics",
      image: "/src/assets/img/vasanth.png",
      email: "vasanth@bvrit.ac.in",
      linkedin: "https://linkedin.com/in/vasanth-cbb",
      github: "https://github.com/vasanth-cbb",
      twitter: "https://twitter.com/vasanth-cbb"
    },
    {
      name: "Vishal",
      role: "Treasurer",
      image: "/src/assets/img/vishal.png",
      email: "vishal@bvrit.ac.in",
      linkedin: "https://linkedin.com/in/vishal-cbb",
      github: "https://github.com/vishal-cbb",
      twitter: "https://twitter.com/vishal-cbb"
    },
    {
      name: "Abhigna",
      role: "Creative Head",
      image: "/src/assets/img/abhigna.png",
      email: "abhigna@bvrit.ac.in",
      linkedin: "https://linkedin.com/in/abhigna-cbb",
      github: "https://github.com/abhigna-cbb",
      twitter: "https://twitter.com/abhigna-cbb"
    },
    {
      name: "Anjan Kumar",
      role: "Volunteer Program Manager",
      image: "/src/assets/img/anjan kumar.png",
      email: "anjan@bvrit.ac.in",
      linkedin: "https://linkedin.com/in/anjan-cbb",
      github: "https://github.com/anjan-cbb",
      twitter: "https://twitter.com/anjan-cbb"
    }
  ];

  const handleContactClick = (member) => {
    // Open email client with member's email
    window.open(`mailto:${member.email}`, '_blank');
  };

  return (
    <div className="relative flex w-full items-center justify-center bg-black min-h-screen">
      <div className="absolute inset-0 [background-size:40px_40px] sm:[background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-20 w-full text-white">
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 pt-16 sm:pt-20 md:pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#4cdef5] mb-2 sm:mb-4">Team CBB</h2>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl">More Than a Team — A Family.</p>
            </div>

            {/* Team Grid with ProfileCards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex justify-center">
                  <ProfileCard
                    name={member.name}
                    title={member.role}
                    handle={member.name.toLowerCase().replace(/\s+/g, '')}
                    contactText="Contact"
                    avatarUrl={member.image}
                    showUserInfo={true}
                    onContactClick={() => handleContactClick(member)}
                    className={`w-full max-w-[280px] sm:max-w-sm${member.name === 'Eshwari' ? ' avatar-eshwari' : ''}`}
                    linkedin={member.linkedin}
                    github={member.github}
                    phone={member.email}
                    behindGradient={true}
                    innerGradient={true}
                    enableTilt={true}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default Team;