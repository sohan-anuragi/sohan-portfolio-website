import { MdOutlineWavingHand } from "react-icons/md";
import { useContext, useEffect, useRef, useState } from "react";
import { contextTheme } from "../Store";
import { FaDownload } from "react-icons/fa6";
import styles from './Home.module.css';

export default function Home() {

  const { themeToggle } = useContext(contextTheme);

  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // 🔹 IntersectionObserver for animation when section comes into view
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setVisible(true);
      }
    });

    if (ref.current) observer.observe(ref.current);

    // 🔹 Cleanup observer on unmount
    return () => observer.disconnect();
  }, []); // 🔹 dependency array added

  return (
    <>
      <div
        className={`${styles['intro']} w-[50%] pb-[2rem] ${
          visible ? styles['animate'] : ''
        }`}
        ref={ref}
      >
        <div
          className={`flex p-1 flex-col justify-center pl-[3rem] ${
            themeToggle ? 'text-[white]' : 'text-[black]'
          }`}
        >
          <div
            className={`text-[1.1rem] font-md ${
              themeToggle ? 'text-[white]' : 'text-[#700202]'
            } mb-[3rem]`}
          >
            Turning Ideas into Interactive Web Experiences!
          </div>

          <span
            className={`flex text-4xl font-[700] ${
              themeToggle ? 'text-[white]' : 'text-[#590101]'
            }`}
          >
            Hellow I'm Sohan
            <span
              className={`text-[#f5c19c] text-4xl ml-[1rem] ${styles['hand']}`}
            >
              <MdOutlineWavingHand />
            </span>
          </span>

          {/* 🔹 Fixed typo: removed unnecessary $ */}
          <span className={`mt-[0.8rem] text-[1.1rem] font-[600]`}>
            _______________ Front End Developer
          </span>

          <span className="mt-[0.6rem] font-[500]">
            I'm 💻 Front End Developer and I'm very Passionate <br /> about clean
            & modern UI.
          </span>

          <div className="flex mt-[1.5rem]">
            {/* 🔹 Added link to Contact section */}
            <a href="#ContactBar">
              <button
                className={` cursor-pointer p-2 rounded-[8px] shadow-lg hover:shadow-[0_0_20px_5px_rgba(255,69,0,0.7)] transition-shadow duration-300 ${
                  themeToggle
                    ? 'text-[white] bg-[red] shadow-lg hover:shadow-[0_0_20px_#0084ff]'
                    : 'text-[white] bg-[red] shadow-lg hover:shadow-[0_0_20px_#ffffff33]'
                }`}
              >
                Contact Info
              </button>
            </a>

            {/* 🔹 Download CV button */}
            <a href="/SohanCV.pdf" download>
              <button
                className={` p-2 ml-[0.3rem] flex justify-center items-center rounded-[8px] shadow-lg hover:shadow-[0_0_20px_5px_rgba(255,69,0,0.7)] transition-shadow duration-300 ${
                  themeToggle
                    ? 'text-[white] bg-[red] shadow-lg hover:shadow-[0_0_20px_#0084ff]'
                    : 'text-[white] bg-[red] shadow-lg hover:shadow-[0_0_20px_#ffffff33]'
                }`}
              >
                Download CV <FaDownload className="ml-[0.4rem]" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
