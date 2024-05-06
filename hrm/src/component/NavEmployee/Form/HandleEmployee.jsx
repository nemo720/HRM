import { useState } from "react";
import Form1 from "@/component/NavEmployee/Form/Form1.jsx";
import Form2 from "@/component/NavEmployee/Form/Form2.jsx";
import Form3 from "@/component/NavEmployee/Form/Form3.jsx";
import Form4 from "@/component/NavEmployee/Form/Form4.jsx";

export const HandleEmployee = () => {
  // const [formData, setFormData] = useState({
  //     firstName: '',
  //     lastName: '',
  //     idEmployee: '',
  //     payRate: '',
  //     paidToDate: '',
  //     vacationDays: '',
  //     paidLastYear: '',
  //     middleInitial: '',
  //     birthday: '',
  //     driversLicense: ''
  // });

  // const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData(prevState => ({
  //         ...prevState,
  //         [name]: value
  //     }));
  // };

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // Handle form submission here
  // };
  const [formData, setFormData] = useState({ destination: "", form: 1 });
  return (
    <div className="w-full h-full flex flex-col ">
      {formData.form === 1 ? (
        <Form1 formData={formData} setFormData={setFormData} />
      ) : formData.form === 2 ? (
        <Form2 formData={formData} setFormData={setFormData} />
      ) : formData.form === 3 ? (
        <Form3 formData={formData} setFormData={setFormData} />
      ) : (
        <Form4 formData={formData} setFormData={setFormData} />
      )}
    </div>
  );
};
export default HandleEmployee;
