import { useEffect, useState } from "react";
import Form1 from "./Form/Form1";
import Form2 from "./Form/Form2";
import Form3 from "./Form/Form3";
import {toast} from "react-toastify";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

export const HandleEmployee = () => {
    const navigate = useNavigate();
    const [payRates,setPayRates] = useState("");
    const [benefitPlans,setBenefitPlans] = useState("");
    const [formData, setFormData] = useState({
        form: 1,
        idEmployee: "",
        firstName: "",
        lastName: "",
        payRate: "",
        payRates: {
            idPayRate: "",
            payRateName: "",
            value: "",
            taxPercentage: "",
            payType: "",
            payAmount: "",
            ptLevelC: "",
        },
        vacationDays: "",
        paidToDate: "",
        paidLastYear: "",
        middleInitial: "",
        birthday: "",
        ssnP: "",
        ssnE: "",
        driversLicense: "",
        address1: "",
        address2: "",
        city: "",
        country: "",
        zip: 0,
        gender: "true",
        email: "",
        phoneNumber: "",
        maritalStatus: "Single",
        ethnicity: "",
        shareholderStatus: "false",
        benefitPlans: {
            benefitPlanId: 1,
            planName: "",
            deductable: "",
            percentageCoPay: "",
        },
        employmentCode: "",
        employmentStatus: "",
        hireDateForWorking: "",
        workersCompCode: "",
        terminationDate: "",
        rehireDateForWorking: "",
        lastReviewDate: "",
        daysWorkingPerMonth: "",
    });
    useEffect(() => {
        findAllPayRates();
        findAllBenefitPlans();
    }, [formData]);
    const findAllPayRates = async () => {
        try {
            let temp = await axios.get("http://localhost:8080/api/payRates/list");
            setPayRates(temp.data);
            console.log(temp.data);
        }catch (e){
            console.log(e);
        }
    }
    const findAllBenefitPlans = async () => {
        try {
            let temp = await axios.get("http://localhost:8080/api/benefitPlans/list");
            setBenefitPlans(temp.data);
            console.log(temp.data);
        }catch (e){
            console.log(e);
        }
    }

    const create = async (formData) => {
        console.log("hello form data")
        console.log(formData)
        try {
            await axios.post("http://localhost:8080/api/personal/create", formData);
            navigate("/employee")
            toast("Create employee successful!",{
                position: "top-center",
                autoClose: 2000
            })
        }catch (e){
            console.log(e);
        }
    };

    return (
        <div className="w-full h-full flex flex-col ">
            {formData.form === 1 ? (
                <Form1 formData={formData} setFormData={setFormData} />
            ) : formData.form === 2 ? (
                <Form2 formData={formData} setFormData={setFormData} payRates={payRates} benefitPlans={benefitPlans}/>
            ) : (
                <Form3 formData={formData} setFormData={setFormData} create={create} />
            )}
        </div>
    );
};

export default HandleEmployee;
