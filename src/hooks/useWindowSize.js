import { useState, useEffect } from "react";

export const useWindowSize = (breakpoint = 768) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > breakpoint);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > breakpoint);

    window.addEventListener("resize", handleResize);
    // Städar upp eventet när komponenten försvinner
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isDesktop;
};
