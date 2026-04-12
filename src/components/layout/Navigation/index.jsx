import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);

    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname);
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("popstate", handleRouteChange);
    window.addEventListener("navigation", handleRouteChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handleRouteChange);
      window.removeEventListener("navigation", handleRouteChange);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo — swaps based on scroll */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.navigateTo("/");
              }}
              className="flex items-center flex-shrink-0"
            >
              <img
                src={isScrolled ? "/black_cl.png" : "/white_cl.png"}
                alt="Clarus Psychotherapy"
                className="h-10 w-auto transition-all duration-300"
              />
            </a>

            {/* Desktop nav */}
            <DesktopNav currentPath={currentPath} isScrolled={isScrolled} />

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen((o) => !o)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
                isScrolled
                  ? "text-clarus-dark hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        <MobileNav
          isOpen={isOpen}
          currentPath={currentPath}
          setIsOpen={setIsOpen}
        />
      </nav>
    </>
  );
};

export default Navigation;
