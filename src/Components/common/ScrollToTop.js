import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Standard navigation scroll-to-top (only if no hash)
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // If there is a hash on initial load or route change, scroll to it
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, hash]);

  useEffect(() => {
    // Handle same-page hash clicks that might not trigger useLocation
    const handleSamePageHashClick = (e) => {
      const link = e.target.closest('a');
      // If it's a link with a hash and it points to the current pathname
      if (link && link.hash && (link.pathname === pathname || link.pathname === window.location.pathname)) {
        const id = link.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          // Manually trigger smooth scroll even if the hash is already in the URL
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener('click', handleSamePageHashClick);
    return () => window.removeEventListener('click', handleSamePageHashClick);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
