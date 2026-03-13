import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="bg-black border-b border-red-600">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo} alt="RinDial" className="h-20" />
        </NavLink>

        {/* Menu */}
        <nav>
          <ul className="flex gap-8 text-sm font-medium text-white">
            {menu.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `transition ${
                      isActive
                        ? "text-[#c53443]"   // active color from pricing page
                        : "hover:text-red-500"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Red glow line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
    </header>
  );
}