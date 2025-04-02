import Router from "./router/Router";
import Layout from "./components/layout/Layout";
import { findRouteByPath } from "./router/routes";
import "./App.css";

const App = () => {
  return (
    <Router>
      {(currentPath, navigate) => {
        const route = findRouteByPath(currentPath);
        const PageComponent = route?.component || NotFound;

        return (
          <Layout currentPath={currentPath} navigate={navigate}>
            <PageComponent navigate={navigate} />
          </Layout>
        );
      }}
    </Router>
  );
};

// Simple NotFound component
const NotFound = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <h1 className="text-4xl font-serif mb-4">Page Not Found</h1>
      <p className="text-gray-600 mb-8">
        The page you are looking for does not exist.
      </p>
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          window.navigateTo("/");
        }}
        className="text-teal-600 hover:text-teal-700"
      >
        Return to Home
      </a>
    </div>
  </div>
);

export default App;
