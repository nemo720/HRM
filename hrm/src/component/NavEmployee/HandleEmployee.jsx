import { useEffect, useState } from "react";
import Form1 from "./Form/Form1";
import Form2 from "./Form/Form2";
import Form3 from "./Form/Form3";
import { toast } from "react-toastify";
import axios from 'axios';
export const HandleEmployee = () => {

    const [formData, setFormData] = useState({form: 1 });
    useEffect(() => {
        // const employee = [{
        //     idEmployee: "",
        //     firstName: "",
        //     lastName: "",
        //     payRate: "",
        //     payRates: {
        //         idPayRate: "",
        //         payRateName: "",
        //         value: "",
        //         taxPercentage: "",
        //         payType: "",
        //         payAmount: "",
        //         ptLevelC: "",
        //     },
        //     vacationDays: "",
        //     paidToDate: "",
        //     paidLastYear: "",
        //     middleInitial: null,
        //     birthday: "",
        //     ssnP: "",
        //     ssnE: "",
        //     driversLicense: "",
        //     address1: "",
        //     address2: "",
        //     city: "",
        //     country: "",
        //     zip: 12345,
        //     gender: true,
        //     email: "",
        //     phoneNumber: "",
        //     maritalStatus: "",
        //     ethnicity: "",
        //     shareholderStatus: false,
        //     benefitPlans: {
        //         benefitPlanId: 1,
        //         planName: "",
        //         deductable: "",
        //         percentageCoPay: "",
        //     },
        //     employmentCode: "",
        //     employmentStatus: "",
        //     hireDateForWorking: "",
        //     workersCompCode: "",
        //     terminationDate: "",
        //     rehireDateForWorking: "",
        //     lastReviewDate: "",
        //     daysWorkingPerMonth: "",
        // }]
          const createEmployee = async () => {
            try {
                const response = await axios.post('http://localhost:8080/api/personal/create', JSON.stringify(formData), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to create data');
                }
                navigator('/employee');
                toast("Create employee successful!!!", {
                    position: "top-center",
                    autoClose: 2000,
                });
            } catch (error) {
              console.error("Create data failed:", error);
            }
          };
        if (formData) {
            createEmployee();
        }
    }, [formData]);

    return (
        <div className="w-full h-full flex flex-col ">
            {formData.form === 1 ? (
                <Form1 formData={formData} setFormData={setFormData} />
            ) : formData.form === 2 ? (
                <Form2 formData={formData} setFormData={setFormData} />
            ) : (
                <Form3 formData={formData} setFormData={setFormData} />
            )}
        </div>
    );
};
export default HandleEmployee;
