import { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || "/");
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <a href="#/" className="flex items-center">
            <img
              src="/v5_cl.png"
              alt="Clarus Psychotherapy Logo"
              className="h-8 w-auto"
            />
          </a>

          <DesktopNav currentPath={currentPath} />

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-gray-900 focus:outline-none"
            >
              <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
      </div>

      <MobileNav isOpen={isOpen} currentPath={currentPath} />
    </nav>
  );
};

export default Navigation;
