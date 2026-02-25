import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.replace("#", "");

    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
      }
      return;
    }

    // Scroll to top on normal route changes
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return null;
}
