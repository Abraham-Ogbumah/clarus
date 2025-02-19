import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import ServicesPage from "../pages/Services";
import ContactPage from "../pages/Contact";

export const routes = [
  {
    path: "/",
    component: HomePage,
    label: "Home",
  },
  {
    path: "/about",
    component: AboutPage,
    label: "About",
  },
  {
    path: "/services",
    component: ServicesPage,
    label: "Services",
  },
  {
    path: "/contact",
    component: ContactPage,
    label: "Contact",
  },
];

// Helper function to find the current route
export const findRouteByPath = (path) => {
  return routes.find((route) => route.path === path);
};
