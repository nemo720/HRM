import AlertItem from "@/component/NavAlert/AlertItems.jsx";
import {Cake, HandCoins, CalendarClock, PartyPopper } from "lucide-react";
import {Button, buttonVariants} from "@/components/ui/button.jsx";

const navContentAlert = [
    {
        title: "Alert Birthday",
        href: "/alerts/birthday",
        icon: <Cake />,
    },
    {
        title: "Alert changed payroll",
        href: "/alerts/changed_payroll",
        icon: <HandCoins />,
    },
    {
        title: "Alert vacation day",
        href: "/alerts/vacation_day",
        icon: <CalendarClock />,
    },
    {
        title: "Alert anniversary ",
        href: "/alerts/anniversary",
        icon: <PartyPopper />,
    },
];
export const NavAlert = () => {
    return (

        <div style={{display: "flex", flexDirection: "column"}} className="mx-auto w-auto h-auto bg-white flex place-items-stretch p-3 ">
            <div >
                <button
                    className="bg-white-300 hover:bg-gray-300 text-gray-800 text-5xl font-bold gap-5 py-20 px-10 rounded-2xl inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="lucide lucide-cake">
                        <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/>
                        <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/>
                        <path d="M2 21h20"/>
                        <path d="M7 8v3"/>
                        <path d="M12 8v3"/>
                        <path d="M17 8v3"/>
                        <path d="M7 4h0.01"/>
                        <path d="M12 4h0.01"/>
                        <path d="M17 4h0.01"/>
                    </svg>
                    <span>Alert birthday</span>
                </button>
            </div>
            <div>
                <button
                    className="bg-white-300 hover:bg-gray-300 text-gray-800 text-5xl font-bold gap-5 py-20 px-10 rounded-2xl inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="lucide lucide-cake">
                        <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/>
                        <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/>
                        <path d="M2 21h20"/>
                        <path d="M7 8v3"/>
                        <path d="M12 8v3"/>
                        <path d="M17 8v3"/>
                        <path d="M7 4h0.01"/>
                        <path d="M12 4h0.01"/>
                        <path d="M17 4h0.01"/>
                    </svg>
                    <span>Alert birthday</span>
                </button>
            </div>
            <div style={{display: "inline-block"}}>
                <button
                        className="bg-white-300 hover:bg-gray-300 text-gray-800 text-5xl font-bold gap-5 py-20 px-10 rounded-2xl inline-flex ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="lucide lucide-cake">
                        <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/>
                        <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/>
                        <path d="M2 21h20"/>
                        <path d="M7 8v3"/>
                        <path d="M12 8v3"/>
                        <path d="M17 8v3"/>
                        <path d="M7 4h0.01"/>
                        <path d="M12 4h0.01"/>
                        <path d="M17 4h0.01"/>
                    </svg>
                    <span>Alert birthday</span>
                </button>
            </div>
        </div>

    );
};
