import NavItem from "./NavItem";
import { Home, Users, BellRing,HandCoins } from "lucide-react";
// chung 1 thu muc la tro thang
// khac thu muc la .. de thoat, 1 cham la thoat 1 lan
import Logo from "../assets/Logo.png";

const navContent = [
  {
    title: "Home",
    href: "/",
    icon: <Home />,
  },
  {
    title: "Employee",
    href: "/employee",
    icon: <Users />,
  },
  {
    title: "Payroll",
    href: "/payroll",
    icon: <HandCoins />,
  },
  {
    title: "Alert",
    href: "/alert",
    icon: <BellRing />,
  },
];
export const NavBar = () => {
  return (
    <div className="max-w-full w-1/5 bg-white-400 border-2 flex items-center flex-col ">
      <div className=" w-[70%] h-[122px] mt-6 bg-white-100 ">
        <img src={Logo} alt="Logo" className="w-full h-full top-1/2" />
      </div>
      {navContent.map((nav) => (
        <NavItem key={nav.title} title={nav.title} href={nav.href} >
          {nav.icon}
        </NavItem>
      ))}
    </div>
  );
};
