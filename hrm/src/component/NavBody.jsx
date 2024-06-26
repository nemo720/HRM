import { NavAccount } from "./NavAccount";
import { CircleUserRound } from "lucide-react";
import {Home}  from "./Home";
import { Employee } from "./Employee";
import { Alert } from "./Alert";
import { Routes, Route } from "react-router-dom";
import {TotalEarnings} from "@/component/NavHome/DetailData/TotalEarnings.jsx";
import {VacationDays} from "@/component/NavHome/DetailData/VacationDays.jsx";
import {AverageBenefits} from "@/component/NavHome/DetailData/AverageBenefits.jsx";
import {AlertVacationDays} from "@/component/NavAlert/AlertVacationDays.jsx";
import {AlertBirthday} from "@/component/NavAlert/AlertBirthday.jsx";
import {AlertAnniversary} from "@/component/NavAlert/AlertAnniversary.jsx";
import {Payroll} from "@/component/Payroll.jsx";
import HandleEmployee from "@/component/NavEmployee/HandleEmployee.jsx";
import UpdateEmployee from "@/component/NavEmployee/UpdateEmployee.jsx";

const navHead = [
  {
    title: "ADMIN",
    href: "/admin",
    icon: <CircleUserRound />,
  },
  
];
export const NavBody = () => {
  return (
    <div className="max-w-full w-4/5 h-full  flex items-center flex-col  ">

      <div
        className="w-full h-16   flex items-center gap-4 px-8
         justify-end border-[2px] sticky top-0 bg-white"
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
          <Route path="/handleEmployee" element={ <HandleEmployee/> } />
          <Route path="/update/:id" element={ <UpdateEmployee/> } />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/alerts" element={<Alert />} />
            <Route path="/alerts/vacation_day" element={<AlertVacationDays />} />
            <Route path="/alerts/birthday" element={<AlertBirthday />} />
            <Route path="/alerts/anniversary" element={<AlertAnniversary />} />
        <Route path="/totalEarning" element={<TotalEarnings />} />
        <Route path="/totalNumberOfVacationDay" element={<VacationDays />} />
        <Route path="/averageBenefits" element={<AverageBenefits />} />
      </Routes>
    </div>
  );
};
