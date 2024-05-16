import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { useContext } from 'react';
import { EmployeeContext } from "@/lib/EmployeeContext.jsx";

const ComparisonChart=()=> {
	const { employeeData } = useContext(EmployeeContext);
	const { comparisons } = employeeData;
	return (
		<div className="h-full w-full bg-white p-4 rounded border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">Comparison Chart</strong>
			<div className="mt-3 w-full h-full flex-1 text-sm ">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={500}
						height={300}
						data={comparisons}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}
					>
						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="firstName" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar name="Earnings" dataKey="payAmount" fill="#0ea5e9" />
						<Bar name="Benefit plans" dataKey="deductable" fill="#ea580c" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
export default ComparisonChart

