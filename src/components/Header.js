import { Navbar, NavbarCollapse, NavbarLink } from "flowbite-react";

export default function Header() {
  return (
    <Navbar fluid rounded className="mx-[200px] mt-[41px] mb-[21px] bg-[#F7F7F7ff]">
      <a href="/">
        <img src="/images/touringcars.png" alt="" />
      </a>
      <NavbarCollapse>
        <div className="flex md:gap-[80px]">
          <NavbarLink href="#" className="font-normal text-[16px] leading-[140%] text-[#333333]">Sobre</NavbarLink>
          <NavbarLink  href="#" className="font-normal text-[16px] leading-[140%] text-[#333333]">Contato</NavbarLink>
          <NavbarLink href="#" className="font-normal text-[16px] leading-[140%] text-[#333333]">Anunciar</NavbarLink>
          <NavbarLink href="#" className="font-normal text-[16px] leading-[140%] text-[#333333]">Estoque</NavbarLink>
        </div>
      </NavbarCollapse>
    </Navbar>
  );
}