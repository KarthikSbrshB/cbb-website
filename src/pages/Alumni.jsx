import React from "react";
import Footer from "../components/Footer";

const Alumni = () => {
  return (
    <div className="relative flex w-full items-center justify-center bg-black">
      <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-20 w-full text-white">
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
          
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Alumni;
