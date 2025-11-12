import { useEffect, useState } from "react";

export default function useSectionObserver(sectionIds) {
  const [activeSection, setActiveSection] = useState("sohan bhai");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionIds.forEach((id) => {
      const sec = document.getElementById(id);
      if (sec instanceof Element) { // ✅ safe check
        observer.observe(sec);
      }
    });

    return () => observer.disconnect(); // cleanup
  }, [sectionIds]);

  return activeSection;
}

