import {useContext, useEffect, useState} from 'react';
import { listEmployees } from "@/services/EmployeeService.js";
import {EmployeeContext} from "@/lib/EmployeeContext.jsx";
import { useLocation } from 'react-router-dom';

function PersonFilterButtons() {
    const [active, setActive] = useState('1');
    const [data, setData] = useState([]);
    const { setEmployeeData } = useContext(EmployeeContext);
    const location = useLocation();

    useEffect(() => {
        listEmployees().then((response) => {
            setData(response.data);
        }).catch((error) => {
            console.log("Fetching data failed:", error);
        });
    }, [location]);
    useEffect(() => {
        if (data.length > 0) {
            handleButtonClick('1');
        }
    }, [data]);
    const handleButtonClick = (buttonType) => {
        setActive(buttonType);
        const filteredData = data.filter(employee =>
            (buttonType === '1' && employee.shareholderStatus===false) ||
            (buttonType === '2' && employee.shareholderStatus===true)
        );
        const totalEarnings = filteredData.reduce((total, employee) => total + (employee.payRates ? employee.payRates.payAmount : 0), 0);
        const totalVacationDays = filteredData.reduce((total, employee) => total + (employee.vacationDays || 0), 0);
        const averageBenefits = filteredData.length > 0 ?
            filteredData.reduce((total, employee) => total + (employee.benefitPlans ? employee.benefitPlans.deductable : 0), 0) / filteredData.length :
            0;
        console.log(totalEarnings, totalVacationDays, averageBenefits);
        const comparisons = filteredData.map(employee => ({
            firstName: employee.firstName,
            name: employee.name,
            payAmount: employee.payRates ? employee.payRates.payAmount : 0,
            deductable: employee.benefitPlans ? employee.benefitPlans.deductable : 0
        }));
        setEmployeeData(prevState => ({
            ...prevState,
            totalEarnings,
            totalVacationDays,
            averageBenefits,
            comparisons
        }));
    };

    return (
        <div>
            <button
                className={active === '1' ? 'w-[106px] h-[35px] border-[2px] border-blue-400 m-2 rounded shadow-md shadow-gray-500 bg-blue-400 text-white' : 'w-[106px] h-[35px] border-[2px] border-blue-400 m-2 rounded shadow-md shadow-gray-500 bg-slate-100'}
                onClick={() => handleButtonClick('1')}>
                Employee
            </button>
            <button
                className={active === '2' ? 'w-[106px] h-[35px] border-[2px] border-blue-400 m-2 rounded shadow-md shadow-gray-500 bg-blue-400 text-white' : 'w-[106px] h-[35px] border-[2px] border-blue-400 m-2 rounded shadow-md shadow-gray-500 bg-slate-100'}
                onClick={() => handleButtonClick('2')}>
                Shareholder
            </button>
        </div>
    );
}

export default PersonFilterButtons;
