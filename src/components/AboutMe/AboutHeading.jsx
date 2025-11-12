import { contextTheme } from "../Store";
import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";

export default function AboutHeading() {
  const { themeToggle } = useContext(contextTheme);
  const myRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });
    if (myRef.current) observer.observe(myRef.current);
    return () => observer.disconnect();
  }, [myRef]);

  return (
    <>
      {/* SEO for About Section */}
      <Helmet>
        <title>About Me | Sohan Anuragi Portfolio</title>
        <meta
          name="description"
          content="Learn about Sohan Anuragi, a passionate Frontend Developer skilled in HTML, CSS, and JavaScript."
        />
      </Helmet>

      <div
        className={`mt-[4rem] mb-[2rem] transition-all duration-1000 ease-out transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-[10rem] opacity-0"
        }`}
        ref={myRef}
      >
        <div className={`${themeToggle ? "text-white" : "text-black"} flex justify-center text-4xl font-bold`}>
          About Me
        </div>
        <div className={`${themeToggle ? "text-white" : "text-black"} flex justify-center`}>
          <span className="w-[5rem] h-[3px] bg-gradient-to-r from-[#b40404] to-[#610202] mt-[1rem]"></span>
        </div>
      </div>
    </>
  );
}
