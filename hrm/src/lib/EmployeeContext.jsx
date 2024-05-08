import React, {useState} from 'react';

export const EmployeeContext = React.createContext();
export const EmployeeProvider = ({ children }) => {
    const [employeeData, setEmployeeData] = useState({
        totalEarnings: 0,
        totalVacationDays: 0,
        averageBenefits: 0,
        transactions: [] // Add this line to hold filtered transaction data
    });

    // Rest of your context logic

    return (
        <EmployeeContext.Provider value={{ employeeData, setEmployeeData }}>
            {children}
        </EmployeeContext.Provider>
    );
};
