import { useState } from "react";
import { Navbar, NavbarCollapse } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const links = [
    { name: "Sobre", href: "/sobre" },
    { name: "Contato", href: "/contato" },
    { name: "Anunciar", href: "/anunciar" },
    { name: "Estoque", href: "/estoque" },
  ];

  return (
    <Navbar fluid rounded className="mx-[200px] mt-[30px] mb-[40px]">
      <Link to="/">
        <img src="/images/touringcars.png" alt="Website Logo" className="w-full h-[30px]" />
      </Link>
      <NavbarCollapse>
        <div className="flex md:gap-[60px]">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`font-poppins font-medium text-[18px] px-[10px] py-[4px] rounded-[18px] transition duration-500 ease-in-out ${
                activeLink === link.href
                  ? "bg-black text-white"
                  : "text-black hover:bg-black hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </NavbarCollapse>
    </Navbar>
  );
}
