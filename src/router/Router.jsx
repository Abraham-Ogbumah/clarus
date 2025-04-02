// src/router/Router.jsx
import { useState, useEffect } from "react";

const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    // Set up popstate event listener
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // Create a navigate function that your links can use
  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  // Expose the navigate function to the global window object so links can use it
  window.navigateTo = navigate;

  return children(currentPath, navigate);
};

export default Router;
