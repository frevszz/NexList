import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/30 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      <div className="relative flex items-center justify-between px-6 sm:px-8 py-3 sm:py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <img
          src="/assets/img/profil.png"
          alt="Logo"
          className="h-10 w-10 sm:h-12 sm:w-12 object-cover rounded-full shadow-[0_0_30px_rgba(0,0,0,0.1)]"
        />

        {/* Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-xl sm:text-2xl text-[#0F172A]"
        >
          <i
            className={`${menuOpen ? "ri-close-line" : "ri-menu-line"} 
                       transition-all duration-300 ease-in-out`}
          ></i>
        </button>

        <div
          className={`absolute top-full mt-2 right-5 
                 rounded-md bg-white shadow-lg overflow-hidden
                 transition-all duration-300 ease-in-out origin-top-right
                  ${
                    menuOpen
                      ? "opacity-100 scale-100 visible"
                      : "opacity-0 scale-95 invisible"
                  }`}
        >
          <div className="flex flex-col items-center gap-1 sm:gap-3 px-3 py-2 sm:py-3 sm:px-4">
            <div className="px-10 py-3 rounded-md hover:bg-[#F2F2F2]">
              <Link
                to="/"
                className="text-[13px] sm:text-base text-[#0F172A] 
                     font-medium transition-colors tracking-wide"
                onClick={handleHomeClick}
              >
                HOME
              </Link>
            </div>

            <div className="px-10 py-3 rounded-md hover:bg-[#F2F2F2]">
              <Link
                to="/about"
                className="text-[13px] sm:text-base text-[#0F172A]
                     font-medium transition-colors tracking-wide"
                onClick={() => setMenuOpen(false)}
              >
                ABOUT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
