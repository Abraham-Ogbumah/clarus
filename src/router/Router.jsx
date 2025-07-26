import { useState, useEffect } from "react";

const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
    window.scrollTo(0, 0);

    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent("navigation"));
  };

  window.navigateTo = navigate;

  return children(currentPath, navigate);
};

export default Router;
