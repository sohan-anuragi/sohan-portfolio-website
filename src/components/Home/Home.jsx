import { useContext } from "react";
import { contextTheme } from "../Store";
import SocialLinks from "../Navbar/SocialLinks";
import Intro from "./Intro";
import Dp from "./Dp";
import styles from "./Home.module.css";
import { Helmet } from "react-helmet";

export default function Home() {
  const { themeToggle } = useContext(contextTheme);

  return (
    <>
      {/* SEO for Home Section */}
      <Helmet>
        <title>Home | Sohan Anuragi Portfolio</title>
        <meta
          name="description"
          content="Welcome to Sohan Anuragi's portfolio. Frontend Developer skilled in HTML, CSS, JavaScript, and modern web development."
        />
      </Helmet>

      <div
        id="Home"
        className={`flex min-h-[30rem] pl-[1rem] pr-[1rem] 
        lg:pl-[4rem] lg:pr-[4rem] 
        ${themeToggle ? "bg-[#1d1d1d]" : ""} ${styles["home-container"]}`}
      >
        <SocialLinks />
        <div className={`flex ${styles["sohan"]}`}>
          <Intro />
          <Dp />
        </div>
      </div>
    </>
  );
}
