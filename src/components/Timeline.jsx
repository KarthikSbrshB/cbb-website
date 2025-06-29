import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { div } from "framer-motion/client";




const Timeline = ({ data, heading, description }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans px-4 md:px-6 lg:px-8"
      ref={containerRef}
    >
      <div className="max-w-5xl mx-auto mt-50 px-2 text-center">
        {heading && (
          <h2 className="text-6xl p-2 m-6 font-bold tracking-wide bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
            {heading}
          </h2>
        )}
        {description && (
          <p className="text-neutral-500 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
      {/* <div className="h-40" /> */}
    </div>
  );
};

export function TimelineDemo() {
  const data = [
    {
      title: "April 2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            TechTussle 2.0: 20th & 29th April 2025
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/TechTussle2/TechTussle2-1.jpg"
              alt="event image"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/images/TechTussle2/TechTussle2-2.jpg"
              alt="event image"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/images/TechTussle2/TechTussle2-3.JPG"
              alt="event image"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/images/TechTussle2/TechTussle2-4.JPG"
              alt="event image"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "April 2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Deep Learning workshop: 21st - 26th April 2025
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/DL_Workshop/DL-1.jpg"
              alt="event image"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/images/DL_Workshop/DL-2.jpg"
              alt="event image"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
         
          </div>
        </div>
      ),
    },
    {
      title: "February 2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Future Stack: 13th & 20th February 2025
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/FutureStack/FutureStack-1.jpg"
              alt="event image"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/images/FutureStack/FutureStack-2.jpg"
              alt="event image"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/images/FutureStack/FutureStack-3.JPG"
              alt="event image"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/images/FutureStack/FutureStack-4.jpg"
              alt="event image"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "September 2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Interaction with Young Entrepreneurs: 11th September 2024
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/Nandyala/Nandyala-1.gif"
              alt="event image"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/images/Nandyala/Nandyala-2.jpeg"
              alt="event image"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/images/Nandyala/Nandyala-3.jpeg"
              alt="event image"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/images/Nandyala/Nandyala-4.jpeg"
              alt="event image"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "August 2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            TechTussle – Clash of Coders: 8th & 20th August 2024
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/TechTussle/TechTussle-1.JPG"
              alt="event image"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/images/TechTussle/TechTussle-2.JPG"
              alt="event image"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/images/TechTussle/TechTussle-3.JPG"
              alt="event image"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/images/TechTussle/TechTussle-4.JPG"
              alt="event image"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />

          </div>
        </div>
      ),
    },
    {
      title: "April 2024",
      content: (
        <div>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            TechSurge 2k24: 22nd – 24th April 2024
            </p>
            <div className="grid grid-cols-2 gap-4">
                <img
                src="/images/TechSurge24/TechSurge-1.JPG"
                alt="startup template"
                className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
                />
                <img
                src="/images/TechSurge24/TechSurge-2.JPG"
                alt="startup template"
                className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
                />
                <img
                src="/images/TechSurge24/TechSurge-3.JPG"
                alt="startup template"
                className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
                />
                <img
                src="/images/TechSurge24/TechSurge-4.JPG"
                alt="startup template"
                className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
                />
            </div>
        </div>
      ),
    },
  ];

  return (
    <Timeline
      heading="Previous Events"
      description="A glimpse into the impactful events hosted by CBB over the past year."
      data={data}
    />
  );
}