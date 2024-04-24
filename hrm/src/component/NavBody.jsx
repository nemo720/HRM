import { NavAccount } from "./NavAccount";
import { CircleUserRound, SunMoon } from "lucide-react";
import {Home}  from "./Home";
import { Employee } from "./Employee";
import { Alert } from "./Alert";
import { Routes, Route } from "react-router-dom";
import {TotalEarnings} from "@/component/NavHome/DetailData/TotalEarnings.jsx";
import {VacationDays} from "@/component/NavHome/DetailData/VacationDays.jsx";
import {AverageBenefits} from "@/component/NavHome/DetailData/AverageBenefits.jsx";

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
        <Route path="/" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/alerts" element={<Alert />} />

        <Route path="/totalEarning" element={<TotalEarnings />}></Route>
        <Route
          path="/totalNumberOfVacationDay"
          element={<VacationDays />}
        ></Route>
        <Route path="/averageBenifits" element={<AverageBenefits />}></Route>
      </Routes>
    </div>
  );
};
