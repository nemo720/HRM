import { Landmark, CalendarCheck, CircleDollarSign } from "lucide-react";
import Notification from "./NavHome/Notification";
import TransactionChart from "./NavHome/TransactionChart";
import { Link } from "react-router-dom";
import PersonFilterButtons from "@/component/NavHome/PersonFilterButtons.jsx";
import {useState} from "react";
import {EmployeeContext} from "@/lib/EmployeeContext.jsx";


const hrefHome =['/totalEarning','/totalNumberOfVacationDay','/averageBenefits']
export const Home = () => {
	const [employeeData, setEmployeeData] = useState({
		totalEarnings: 0,
		totalVacationDays: 0,
		averageBenefits: 0
	});

	return (
		<EmployeeContext.Provider value={{ employeeData, setEmployeeData }}>
    <div className="flex w-full h-full bg-gray-50 flex-col pb-3 ">
      <div className="w-full h-1/6 justify-between  flex box-border px-5">
        <div className=" w-auto h-auto content-center ">
          <h1 className="w-auto h-auto leading-5 font-bold text-4xl px-7">
            Dashboard
          </h1>
        </div>
        <div className=" h-full flex  items-center ">
			<PersonFilterButtons />
        </div>
      </div>
      <div className="w-full h-1/3 flex">
        {/* {homeContent.map((nav) => (
          <ItemOfHome key={nav.title} title={nav.title} href={nav.href}>
            {nav.icon}
          </ItemOfHome>
        ))} */}
        <div className="flex gap-10 w-full items-center px-5">
			<BoxWrapper href={hrefHome[0]}>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<Landmark className="text-2xl text-white" />
				</div>
				<div className="pl-5">
					<span className="text-sm text-gray-500 font-semibold">Total earnings</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">{`$${employeeData.totalEarnings}`}</strong>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper href={hrefHome[1]}>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<CalendarCheck className="text-2xl text-white" />
				</div>
				<div className="pl-5">
					<span className="text-sm text-gray-500 font-semibold">Total vacation days</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">{`${employeeData.totalVacationDays}`}</strong>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper href={hrefHome[2]}>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<CircleDollarSign className="text-2xl text-white" />
				</div>
				<div className="pl-5">
					<span className="text-sm text-gray-500 font-semibold">Average benefits plan</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">{`$${employeeData.averageBenefits}`}</strong>
					</div>
				</div>
			</BoxWrapper>
		</div>
      </div>
      <div className="w-full h-1/2 flex gap-10 px-5 rounded box-border">
        <div className=" w-1/3 h-full overflow-auto rounded shadow-lg shadow-gray-400">
          <Notification />
        </div>
        <div className=" w-2/3 h-full shadow-lg shadow-gray-400  ">
          <TransactionChart />
        </div>
      </div>
    </div>
	</EmployeeContext.Provider>
  );
};
function BoxWrapper({ children,href }) {
	return <Link to = {href} 
	className="bg-white rounded-2xl p-10 flex-1 border border-gray-200 flex items-center w-1/3 h-2/3 shadow-md shadow-gray-400
	transition ease-in-out delay-400 hover:border-2 hover:translate-y-1 hover:scale-105 hover:border-blue-300 active:ring-1 hover:bg-green-50">
	{children}
	</Link>
}
