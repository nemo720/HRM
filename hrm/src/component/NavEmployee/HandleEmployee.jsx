import { useState } from "react";
import Form1 from "./Form/Form1";
import Form2 from "./Form/Form2";
import Form3 from "./Form/Form3";
import Form4 from "./Form/Form4";

export const HandleEmployee = () => {
  // const [formData, setFormData] = useState({
  //     firtName: '',
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
