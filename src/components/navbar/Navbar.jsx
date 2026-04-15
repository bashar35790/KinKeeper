import { BarChart2, Clock, Home, Menu, X } from "lucide-react";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/timeline", label: "Timeline", icon: Clock },
    { path: "/stats", label: "Stats", icon: BarChart2 },
  ];

  return (
    <nav
      className={`w-full bg-white border-b border-base-200 md:px-20 max-md:gap-4 px-4 py-4 flex items-center justify-between shadow-sm ${isMenuOpen ? "flex-col items-start" : ""}`}
    >
      {/* Logo */}
      <div className="md:flex md:items-center flex justify-between w-full items-center">
        <NavLink to="/">
          <img src={Logo} alt="Logo" className="w-36 h-8 mr-2 cursor-pointer" />
        </NavLink>
        <div
          className="md:hidden cursor-pointer w-fit h-fit"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </div>
      </div>

      {/* Nav Items */}
      <div
        className={`md:flex h-fit max-md:justify-start items-center gap-2 ${isMenuOpen ? "flex flex-col w-full" : "hidden"}`}
      >
        {navItems.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            
            onClick={() => isMenuOpen && setIsMenuOpen(false)}
            className={({ isActive }) =>
              `btn btn-sm gap-2 rounded-lg transition-all ${
                isActive
                  ? "bg-brand text-white border-brand"
                  : "btn-ghost text-base-600"
              }`
            }
          >
            <Icon size={15} />
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
