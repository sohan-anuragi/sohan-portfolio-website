import { useContext, useEffect, useState, useRef } from "react";
import { contextTheme } from "../Store";
import { SkillsData } from "./SkillsData";

export default function SkillsCollection() {
  const { themeToggle } = useContext(contextTheme);
  const [visible, setVisible] = useState([]);
  const myRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = myRef.current.indexOf(entry.target);
            setVisible((prevVisible) => {
              const newVisible = [...prevVisible];
              newVisible[index] = true;
              return newVisible;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    myRef.current.forEach((ref) => {
      observer.observe(ref);
    });
  }, []);

  return (
    <>
      <div className="mt-[2rem] p-[2rem] flex flex-wrap justify-center">
        {SkillsData.map((data, index) => (
          <div
            key={data.heading}
            ref={(el) => (myRef.current[index] = el)}
            className={`w-[25rem] md:min-w-[30%] md:max-w-[30%] hover:scale-105 hover:-translate-y-1 p-[2rem] border-[1px] border-[#ff000004] rounded-2xl
              ${
                themeToggle
                  ? "text-white bg-[#321919] transition transform hover:-translate-y-1 hover:scale-101 duration-300 hover:shadow-lg hover:shadow-[red] p-[1rem]"
                  : "text-[#120202] transition transform hover:-translate-y-1 hover:scale-101 duration-300 hover:shadow-lg hover:shadow-[red] shadow-gray-400 hover:bg-[#ff8989] p-4"
              }
              shadow-md m-[0.8rem] inline-block ${
                visible[index]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-[15rem]"
              } transition-all duration-500 ease-in-out`}
          >
            <h1
              className={`text-[1.3rem] font-bold ${
                themeToggle ? "text-white" : "text-[#070202]"
              }`}
            >
              {data.heading}
            </h1>

            {data.Skills.map((skill) => (
              <div
                key={skill.Name}
                className="flex items-center mt-[1rem] h-[2rem]"
              >
                <span
                  className={`text-2xl mr-[0.5rem] ${
                    themeToggle ? "text-white" : "text-[#090202]"
                  }`}
                >
                  {skill.icon}
                </span>
                <p className="text-[1rem] font-[400]">{skill.Name}</p>
                <div
                  className={`w-[8rem] rounded-2xl h-[0.6rem] ml-[1rem] ${
                    themeToggle ? "bg-[#121212]" : "bg-[#e4dcdc]"
                  }`}
                >
                  <div className="w-[80%] rounded-2xl h-[0.6rem] bg-gradient-to-r from-[#720202] to-[#9f0101]"></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
