// import {NavAlert} from "@/component/NavAlert/NavAlert.jsx";
import { Cake, HandCoins, CalendarClock, PartyPopper } from "lucide-react";
import AlertItem from "./NavAlert/AlertItems";
const navContentAlert = [
  {
    title: "Alert Birthday",
    href: "/alerts/birthday",
    icon: <Cake className="text-4xl text-white " />,
  },
  {
    title: "Alert changed payroll",
    href: "/alerts/changed_payroll",
    icon: <HandCoins className="text-4xl text-white" />,
  },
  {
    title: "Alert vacation day",
    href: "/alerts/vacation_day",
    icon: <CalendarClock className="text-4xl text-white"/>,
  },
  {
    title: "Alert anniversary ",
    href: "/alerts/anniversary",
    icon: <PartyPopper className="text-4xl text-white"/>,
  },
];
export const Alert = () => {
  return (
    <div className="w-full h-full flex-col ">
      <div className="w-full h-1/6 realtive flex box-border">
        <div className=" w-auto h-full  content-center ">
          <h1 className="w-auto h-auto leading-5 font-bold text-4xl p-5 px-7">
            All Employee
          </h1>
        </div>
      </div>
      <div className="w-full h-5/6 flex gap-6 items-center justify-around flex-wrap   ">
        {navContentAlert.map((nav) => (
          <AlertItem key={nav.title} title={nav.title} href={nav.href}>
            {nav.icon}
          </AlertItem>
        ))}
      </div>
    </div>
  );
};
