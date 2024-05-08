import { useEffect, useState } from "react";
import Form1 from "./Form/Form1";
import Form2 from "./Form/Form2";
import Form3 from "./Form/Form3";


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
  const [formData, setFormData] = useState({ form: 1 });
  useEffect(() => {
    const createData = async () => {
      try {
        const response = await fetch("https://your-api-endpoint.com/data", {
          method: "POST",
          //
          headers: {
            "Content-Type": "application/json",
            // Add any other headers your API requires
          },
          body: JSON.stringify(formData),
        });
        if (!response.ok) {
          throw new Error("Failed to create data");
        }
      } catch (error) {
        console.log(error);
      }
    };

    // Call the createData function when the component mounts or when formData changes
    if (formData) {
      createData();
    }
  }, [formData]);

  return (
    <div className="w-full h-full flex flex-col ">
      {formData.form === 1 ? (
        <Form1 formData={formData} setFormData={setFormData} />
      ) : formData.form === 2 ? (
        <Form2 formData={formData} setFormData={setFormData} />
      ) :  (
        <Form3 formData={formData} setFormData={setFormData} />
      ) }
    </div>
  );
};
export default HandleEmployee;
