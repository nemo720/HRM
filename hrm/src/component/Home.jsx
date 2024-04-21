import { Landmark, CalendarCheck, CircleDollarSign } from "lucide-react";
import Notification from "./NavHome/Notification";
import TransactionChart from "./NavHome/TransactionChart";
import { Link } from "react-router-dom";
// import  ItemOfHome  from "./NavHome/ItemOfHome";
// import { IoBagHandle, IoPieChart, IoPeople } from 'react-icons/io5'
// const homeContent = [
//   {
//     title: "Total earning",
//     href: "/totalEarning",
//     icon: <Landmark />,
//   },
//   {
//     title: "Total number of vacation days",
//     href: "/totalNumberOfVacationDay",
//     icon: <CalendarCheck />,
//   },
//   {
//     title: "Average benifits",
//     href: "/averageBenifits",
//     icon: <CircleDollarSign />,
//   },
// ];
const hrefHome =['/totalEarning','/totalNumberOfVacationDay','/averageBenifits']
export const Home = () => {
  return (
    <div className="w-full h-full bg-gray-50 flex-col ">
      <div className="w-full h-1/6 realtive flex box-border">
        <div className=" w-auto h-full  content-center ">
          <h1 className="w-auto h-auto leading-5 font-bold text-4xl p-5 px-7">
            Dashboard
          </h1>
        </div>
        <div className="absolute h-1/6 flex right-4 space-x-2  items-center  ">
          <button className="w-[106px] h-[35px] border-[2px] bg-slate-100 border-blue-400 rounded shadow-md shadow-gray-500 focus:bg-blue-400 ">
            Employee
          </button>
          <button className="w-[106px] h-[35px] border-[2px] bg-slate-100  border-blue-400 rounded shadow-md shadow-gray-500 focus:bg-blue-400">
            Shareholder
          </button>
        </div>
      </div>
      <div className="w-full h-1/3 flex   ">
        {/* {homeContent.map((nav) => (
          <ItemOfHome key={nav.title} title={nav.title} href={nav.href}>
            {nav.icon}
          </ItemOfHome>
        ))} */}
        <div className="flex gap-10 w-full items-start m-4">
			<BoxWrapper href={hrefHome[0]}>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<Landmark className="text-2xl text-white" />
				</div>
				<div className="pl-5">
					<span className="text-sm text-gray-500 font-semibold">Total Sales</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">$54232</strong>
						<span className="text-sm text-green-500 pl-2">+343</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper href={hrefHome[1]}>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<CalendarCheck className="text-2xl text-white" />
				</div>
				<div className="pl-5">
					<span className="text-sm text-gray-500 font-semibold">Total Expenses</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">$3423</strong>
						<span className="text-sm text-green-500 pl-2">-343</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper href={hrefHome[2]}>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<CircleDollarSign className="text-2xl text-white" />
				</div>
				<div className="pl-5">
					<span className="text-sm text-gray-500 font-semibold">Total Customers</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">12313</strong>
						<span className="text-sm text-red-500 pl-2">-30</span>
					</div>
				</div>
			</BoxWrapper>
		</div>
      </div>
      <div className="w-full h-1/2 flex gap-10 p-5  box-border">
        <div className=" w-1/3 h-full overflow-auto shadow-lg shadow-gray-400">
          <Notification></Notification>
        </div>
        <div className=" w-2/3 h-full shadow-lg shadow-gray-400 ">
          <TransactionChart></TransactionChart>
        </div>
      </div>
    </div>
  );
};
function BoxWrapper({ children,href }) {
	return <Link to = {href} className="bg-white rounded-2xl p-4 flex-1 border border-gray-200 flex items-center w-1/3 h-2/3 shadow-md shadow-gray-400">{children}</Link>
}
