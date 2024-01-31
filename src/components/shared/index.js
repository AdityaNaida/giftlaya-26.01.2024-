import Footer from "./footer";
import Navbar from "./navbar";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-40">{children}</main>
      <Footer />
    </div>
  )
};

export default Layout;
