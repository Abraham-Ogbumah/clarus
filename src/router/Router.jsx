import { useState, useEffect } from "react";

const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || "/");
    };

    // Set initial path
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return children(currentPath);
};

export default Router;
