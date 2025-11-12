import { useContext } from "react";
import { contextTheme } from "../Store";
import ProjectsHeading from "./ProjectsHeading";
import ProjectsCollection from "./ProjectsCollection";

export default function Projects() {
  const { themeToggle } = useContext(contextTheme);

  return (
    <div>
      <div
        id="Projects"
        className={`${
          themeToggle
            ? "bg-[#171616]"
            : "bg-gradient-to-r from-[#ffffff] to-[#eaeaea]"
        } p-4 shadow-md`}
      >
        <ProjectsHeading />
        <ProjectsCollection />
      </div>
    </div>
  );
}
