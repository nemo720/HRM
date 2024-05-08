import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import {useEffect, useState} from "react";
import {listEmployees} from "@/services/EmployeeService.js";
import {EmployeeContext} from "@/lib/EmployeeContext.jsx";
const TransactionChart=()=> {
	const [employeeData, setEmployeeData] = useState({
		totalEarnings: 0,
		totalVacationDays: 0,
		averageBenefits: 0
	});

	return (
		<EmployeeContext.Provider value={{ employeeData, setEmployeeData }}>
		<div className="h-full w-full bg-white p-4 rounded border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">Transactions</strong>
			<div className="mt-3 w-full h-full flex-1 text-sm ">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={500}
						height={300}
						data={employeeData}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}
					>
						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar name="Earnings" dataKey="employeeData.payRates.payAmount" fill="#0ea5e9" />
						<Bar name="Benefit plans" dataKey="employeeData.benefitPlans.deductable" fill="#ea580c" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
		</EmployeeContext.Provider>
	)
}
export default TransactionChart

