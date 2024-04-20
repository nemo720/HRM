import { NavAccount } from "./NavAccount";
import { CircleUserRound, SunMoon } from "lucide-react";
import { Home } from "./Home";
import { Employee } from "./Employee";
import { Alert } from "./Alert";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Page/Dashboard/Dashboard.jsx";
import Layout from "./Shared/Layout.jsx";
import Products from "./Page/Products.jsx";

const navHead = [
  {
    title: "ADMIN",
    href: "/admin",
    icon: <CircleUserRound />,
  },
  {
    title: "",
    href: "/mode",
    icon: <SunMoon />,
  },
];
export const NavBody = () => {
  return (
    <div className="max-w-full w-4/5 h-full  flex items-center flex-col ">
      <div
        className="w-full h-16   flex items-center gap-4
         justify-end border-[2px] "
      >
        {navHead.map((nav) => (
          <NavAccount key={nav.title} title={nav.title}>
            {nav.icon}
          </NavAccount>
        ))}
      </div>
      {/* Routes dieu huong den cac element khac nhau ma ko can load  */}
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/employee" element={<Employee />} />
        <Route path="/alert" element={<Alert />} />
      </Routes>
    </div>
  );
};
