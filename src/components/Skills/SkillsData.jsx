import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaJsSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { SiOpenai } from "react-icons/si";
import { SiGithubcopilot } from "react-icons/si";
import { BsHexagon } from "react-icons/bs";
import { SiCanva } from "react-icons/si";
import { GiMayanPyramid } from "react-icons/gi";
import { GiChameleonGlyph } from "react-icons/gi";
import { FaBootstrap } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { GoWorkflow } from "react-icons/go";
import { FaMobileAlt } from "react-icons/fa";
import { SiFigma } from "react-icons/si";
import { FaPalette } from "react-icons/fa";

export const SkillsData = [
  {
    heading: 'Frontend Development',
    Skills: [
      { icon: <FaHtml5 />, Name: 'HTML5' },
      { icon: <IoLogoCss3 />, Name: 'CSS3' },
      { icon: <FaJsSquare />, Name: 'JavaScript' },
    ],
  },
  {
    heading: 'Modern Skills',
    Skills: [
        { icon: <IoLogoReact />, Name: 'React' },
        { icon: <RiTailwindCssFill />, Name: 'Tailwind CSS' },
        { icon: <FaBootstrap />, Name: 'Bootstrap' }

    ],
  },

  {
    heading: 'AI Coding Tools',
    Skills: [
      { icon: <SiOpenai />, Name: 'ChatGPT' },
      { icon: <SiGithubcopilot />, Name: 'GitHub Copilot' },
      { icon: <BsHexagon />, Name: 'Tabnine' },
    ],
  },

  {
    heading: 'AI Design Tools',
    Skills: [
      { icon: <SiCanva />, Name: 'Canva AI' },
      { icon: <GiMayanPyramid />, Name: 'Midjourney' },
      { icon: <GiChameleonGlyph />, Name: 'Leonardo AI' },
    ],
  },

  {
  heading: 'Version Control',
  Skills: [
    { icon: <FaGithubAlt />, Name: 'Git' },
    { icon: <FaGithub />, Name: 'GitHub' },
    { icon: <GoWorkflow />, Name: 'Git Workflow' }
  ],
 },

 {
  heading: 'UI/UX Design',
  Skills: [
    { icon: <FaMobileAlt />, Name: 'Responsive Design' },
    { icon: <SiFigma />, Name: 'Figma' },
    { icon: <FaPalette />, Name: 'UI/UX Principles' }
  ],
}

]
