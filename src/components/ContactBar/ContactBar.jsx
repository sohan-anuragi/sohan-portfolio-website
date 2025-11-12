import { useContext } from "react";
import { contextTheme } from "../Store";
import ContactHeading from "./ContactHeading";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";
import { Helmet } from "react-helmet"; // ✅ Helmet import for SEO

export default function ContactBar() {
  const { themeToggle } = useContext(contextTheme);

  return (
    <>
      {/* Optional: global SEO for Contact section */}
      <Helmet>
        <title>Contact Me | Sohan Anuragi Portfolio</title>
        <meta
          name="description"
          content="Get in touch with Sohan Anuragi, Frontend Developer. Contact for projects, collaboration, or inquiries."
        />
      </Helmet>

      <div
        id="ContactBar"
        className={`${
          themeToggle ? "text-white bg-[#1c1c1b]" : "text-black"
        }`}
      >
        <ContactHeading /> {/* Heading with its own Helmet optional */}

        <div className="p-[3rem] flex flex-col justify-center items-center md:flex md:flex-row">
          <ContactLeft />   {/* Left content */}
          <ContactRight />  {/* Right content */}
        </div>
      </div>
    </>
  );
}
