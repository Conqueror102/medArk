import React from "react";
import img from "../assets/docAssist.jpg";

const PageHead = ({content}) => {
  return (
    <section
      className="relative bg-cover bg-center h-[400px] max-sm:h-50 max-sm:justify-center flex items-center px-4 md:px-20 text-white"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        clipPath: "ellipse(99% 100% at top)",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#029eecaa]"
        style={{
          clipPath: "ellipse(99% 100% at top)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-6">
        <h1 className="text-4xl md:text-8xl text-tertiary font-bold mb-2">
         {content}
        </h1>
      </div>
    </section>
  );
};

export default PageHead;
