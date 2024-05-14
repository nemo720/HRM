import { getEmployee } from "@/services/EmployeeService";
import { useParams } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const Form1 = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    if (e.target) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } else {
      console.error('Event target is undefined');
    }
  };
  const { id } = useParams();
  let employee;
  if (id) {
    employee = getEmployee(id);
  }

  function pageTitle() {
    if (employee) {
      return <h1 className="text-xl  text-[#237395] ml-6">Edit Employee</h1>;
    }
    return <h1 className="text-xl  text-[#237395] ml-6">Add new Employee</h1>;
  }
  const validateSchema = {
    idEmployee: Yup.string().required(),
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    address1: Yup.string().required(),
    phoneNumber: Yup.string().required(),
    birthday: Yup.date().required(),
    email: Yup.string().email().required(),
    ethnicity: Yup.string().required(),
  }
  return (
    <div className="w-full h-full flex flex-col ">
      <div className="w-full flex-[1] flex items-center  box-border">
        {pageTitle()}
      </div>
      <Formik initialValues={formData} onSubmit={(values,{setSubmitting}) => {
        console.log(values)
        setFormData({ ...formData,...values, form: 2 });
        setSubmitting(false);
      }} validationSchema={Yup.object(validateSchema)}>
        {
          ({isSubmitting}) => (
              <Form>
      <div className="w-full flex flex-[9] justify-center items-center">
        <div className="w-[90%] h-full relative">
          <div className="grid grid-cols-2 gap-7 ">
            {/* First Column */}
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="first-name" className="flex  mb-2 w-[80%] gap-1">
                First Name <p className="text-red-600">*</p>
              </label>
              <Field type="text" className="w-[80%] border rounded-md px-3 py-2" name="firstName" placeholder="First Name"/>
              <ErrorMessage name="firstName" component="span" style={{color: "red"}}></ErrorMessage>
            </div>
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="last-name" className="flex  mb-2 w-[80%] gap-1">
                {" "}
                Last Name <p className="text-red-600">*</p>
              </label>
              <Field type="text" className="w-[80%] border rounded-md px-3 py-2" name="lastName" placeholder="Last Name"/>
              <ErrorMessage name="lastName" component="span" style={{color: "red"}}></ErrorMessage>
            </div>
            <div className="flex flex-col justify-center items-center">
            <label htmlFor="id-employee" className="flex  mb-2 w-[80%] gap-1">
                {" "}
                Employee Number <p className="text-red-600">*</p>
              </label>
              <Field type="number" className="w-[80%] border rounded-md px-3 py-2" name="idEmployee" placeholder="Employee Number"/>
              <ErrorMessage name="idEmployee" component="span" style={{color: "red"}}></ErrorMessage>
            </div>
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="address1" className="flex  mb-2 w-[80%] gap-1">
                {" "}
                Address 1<p className="text-red-600">*</p>
              </label>
              <Field type="text" className="w-[80%] border rounded-md px-3 py-2" name="address1" placeholder="Address 1"/>
              <ErrorMessage name="address1" component="span" style={{color: "red"}}></ErrorMessage>
            </div>
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="address2" className="flex  mb-2 w-[80%] gap-1">
                {" "}
                Address 2
              </label>
              <Field type="text" className="w-[80%] border rounded-md px-3 py-2" name="address2" placeholder="Address 2"/>
            </div>
            {/* Second Column */}
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="gender" className="flex  mb-2 w-[80%] gap-1">
                Gender <p className="text-red-600">*</p>
              </label>
              <div className="w-[80%]  rounded-md px-3 py-2 flex justify-around">
                <label className="gap-2 flex">
                  <input
                      type="radio"
                      id="gender-male"
                      name="gender"
                      value="true"
                      checked={formData.gender === "true"}
                      onChange={handleChange}
                  />
                  Male
                </label>
                <label className="gap-2 flex">
                  <input
                      type="radio"
                      id="gender-female"
                      name="gender"
                      value="false"
                      checked={formData.gender === "false"}
                      onChange={handleChange}
                  />
                  Female
                </label>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <label
                htmlFor="phone-number"
              className="flex  mb-2 w-[80%] gap-1"
              >
                Phone Number <p className="text-red-600">*</p>
              </label>
              <Field type="text" className="w-[80%] border rounded-md px-3 py-2" name="phoneNumber" placeholder="Phone Number"/>
              <ErrorMessage name="phoneNumber" component="span" style={{color: "red"}}></ErrorMessage>
            </div>
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="email" className="flex  mb-2 w-[80%] gap-1">
                Email <p className="text-red-600">*</p>
              </label>
              <Field type="email" className="w-[80%] border rounded-md px-3 py-2" name="email" placeholder="Email"/>
              <ErrorMessage name="email" component="span" style={{color: "red"}}></ErrorMessage>
            </div>
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="birthday" className="flex  mb-2 w-[80%] gap-1">
                Birthday <p className="text-red-600">*</p>
              </label>
              <Field type="date" className="w-[80%] border rounded-md px-3 py-2" name="birthday" placeholder="Birthday"/>
              <ErrorMessage name="birthday" component="span" style={{color: "red"}}></ErrorMessage>
            </div>
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="ethnicity" className="flex  mb-2 w-[80%] gap-1">
                Ethnicity <p className="text-red-600">*</p>
              </label>
              <Field type="text" className="w-[80%] border rounded-md px-3 py-2" name="ethnicity" placeholder="Ethnicity"/>
              <ErrorMessage name="ethnicity" component="span" style={{color: "red"}}></ErrorMessage>
            </div>
            <div className="flex flex-col justify-center items-center">
              <label
                htmlFor="merital-status"
                className="flex  mb-2 w-[80%] gap-1"
              >
                Marital Status <p className="text-red-600">*</p>
              </label>
              <Field as="select" className="w-[80%] border rounded-md  px-3 py-[9px]" name="maritalStatus">
                <option value="Single">Single</option>
                <option value="Couple">Couple</option>
              </Field>
            </div>
            <div className="flex flex-col justify-center items-center">
              {
                isSubmitting ? <></> : <button
                    type="submit"
                    className="absolute mt-10 px-4 py-2 bg-[#CBE4EF] rounded-md right-10 active:bg-red-50 transition duration-150 ease-linear"
                >
                  Continue
                </button>
              }
            </div>
          </div>
        </div>
      </div>
      </Form>
    )
  }
</Formik>
    </div>
              
  );
};
export default Form1;