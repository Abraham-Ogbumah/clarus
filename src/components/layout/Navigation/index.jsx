import { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import Hero from "../../home/Hero";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 mt-3">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.navigateTo("/");
              }}
              className="flex items-center"
            >
              <img
                src="/v2_cl.png"
                alt="Clarus Psychotherapy Logo"
                className="h-8 w-auto"
              />
            </a>

            <DesktopNav currentPath={currentPath} />

            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="bg-clarus-sage-green text-white-600 hover:text-white-900 focus:outline-none"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
              </button>
            </div>
          </div>
        </div>

        <MobileNav
          isOpen={isOpen}
          currentPath={currentPath}
          setIsOpen={setIsOpen}
        />
      </nav>
      <Hero />
    </>
  );
};

export default Navigation;
