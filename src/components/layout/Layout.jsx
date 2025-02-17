import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
