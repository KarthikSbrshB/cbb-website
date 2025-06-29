import React from "react";

const HeadingNText = ({ title, children }) => {
  return (
    <div className="text-center px-6">
      <h2 className="text-6xl p-2 m-10 font-bold tracking-wide bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="max-w-5xl mx-auto text-neutral-300 text-2xl tracking-tight leading-relaxed">
        {children}
      </p>
    </div>
  );
};

export default HeadingNText;
