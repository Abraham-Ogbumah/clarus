import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import Button from "../../common/Button";

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

    // Listen for custom navigation events
    const handleNavigation = () => {
      setCurrentPath(window.location.pathname);
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("popstate", handlePopState);

    // Add event listener for our custom navigation
    window.addEventListener("navigation", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("navigation", handleNavigation);
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
          <div className="flex justify-between h-16">
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
                className="h-10 w-auto"
              />
            </a>

            <DesktopNav currentPath={currentPath} />

            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
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
