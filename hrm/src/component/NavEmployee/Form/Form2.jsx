import { useParams } from "react-router-dom";
import { getEmployee } from "@/services/EmployeeService.js";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const  Form2 =({ formData, setFormData, payRates ,benefitPlans}) => {
  if(!(typeof formData.payRates === 'string')){
    formData = {...formData, payRates: JSON.stringify(payRates[0])}
  }
  if(!(typeof formData.benefitPlans === 'string')){
    formData = {...formData, benefitPlans: JSON.stringify(benefitPlans[0])}
  }
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
  function pageTitle(){
    if (employee){
      return <h1 className="text-xl  text-[#237395] ml-6">Edit Employee</h1>
    }
    return <h1 className="text-xl  text-[#237395] ml-6">Add new Employee</h1>
  }
  const validateSchema = {
    ssnP: Yup.string().required(),
    ssnE: Yup.number().required(),
    paidToDate: Yup.number().required(),
    paidLastYear: Yup.number().required(),
    vacationDays: Yup.string().required(),
    city: Yup.string().required(),
    country: Yup.string().required(),
    zip: Yup.number().required(),
    payRate: Yup.number().required(),
  }

  return (
    <div className="w-full h-full flex flex-col ">
      <div className="w-full flex-[1] flex items-center  box-border">
        {pageTitle()}
      </div>
      <Formik initialValues={formData} onSubmit={(values,{setSubmitting}) => {
        console.log(values)
        setFormData({ ...formData,...values, form: 3 });
        setSubmitting(false);
      }} validationSchema={Yup.object(validateSchema)}>
        {
          ({isSubmitting}) => (
              <Form>
      <div className="w-full flex flex-[9] justify-center items-center">
        <div className="w-[90%] h-full   ">
          <div className="grid grid-cols-2 gap-7 ">
            {/* First Column */}
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="ssnP" className="flex  mb-2 w-[80%] gap-1">
                ssnP <p className="text-red-600">*</p>
              </label>
              <Field type="text" className="w-[80%] border rounded-md px-3 py-2" name="ssnP" placeholder="ssnP"/>
              <ErrorMessage name="ssnP" component="span" style={{color: "red"}}></ErrorMessage>
            </div>
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="ssnE" className="flex  mb-2 w-[80%] gap-1">
                {" "}
                ssnE <p className="text-red-600">*</p>
              </label>
              <Field type="number" className="w-[80%] border rounded-md px-3 py-2" name="ssnE" placeholder="ssnE"/>
              <ErrorMessage name="ssnE" component="span" style={{color: "red"}}></ErrorMessage>
            </div>
            <div className="flex flex-col justify-center items-center">
              <label
                htmlFor="paid-last-year"
                className="flex  mb-2 w-[80%] gap-1"
              >
                Paid Last Year <p className="text-red-600">*</p>
              </label>
              <Field type="number" className="w-[80%] border rounded-md px-3 py-2" name="paidLastYear" placeholder="Paid Last Year"/>
              <ErrorMessage name="paidLastYear" component="span" style={{color: "red"}}></ErrorMessage>
            </div>
            <div className="flex flex-col justify-center items-center">
              <label
                htmlFor="paid-to-date"
                className="flex  mb-2 w-[80%] gap-1"
              >
                Paid To Day <p className="text-red-600">*</p>
              </label>
              <Field type="number" className="w-[80%] border rounded-md px-3 py-2" name="paidToDate" placeholder="Paid To Day"/>
              <ErrorMessage name="paidToDate" component="span" style={{color: "red"}}></ErrorMessage>
            </div>
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="city" className="flex  mb-2 w-[80%] gap-1">
                City <p className="text-red-600">*</p>
              </label>
              <Field type="text" className="w-[80%] border rounded-md px-3 py-2" name="city" placeholder="City"/>
              <ErrorMessage name="city" component="span" style={{color: "red"}}></ErrorMessage>
            </div>
            {/* Second Column */}
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="country" className="flex  mb-2 w-[80%] gap-1">
                Country <p className="text-red-600">*</p>
              </label>
              <Field type="text" className="w-[80%] border rounded-md px-3 py-2" name="country" placeholder="Country"/>
              <ErrorMessage name="country" component="span" style={{color: "red"}}></ErrorMessage>
            </div>
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="zip" className="flex  mb-2 w-[80%] gap-1">
                Zip <p className="text-red-600">*</p>
              </label>
              <Field type="number" className="w-[80%] border rounded-md px-3 py-2" name="zip" placeholder="Zip"/>
              <ErrorMessage name="zip" component="span" style={{color: "red"}}></ErrorMessage>
            </div>
            <div className="flex flex-col justify-center items-center">
              <label
                htmlFor="vacation-days"
                className="flex  mb-2 w-[80%] gap-1"
              >
                Vacation Days <p className="text-red-600">*</p>
              </label>
              <Field type="number" className="w-[80%] border rounded-md px-3 py-2" name="vacationDays" placeholder="Vacation Days"/>
              <ErrorMessage name="vacationDays" component="span" style={{color: "red"}}></ErrorMessage>
            </div>
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="payrate" className="flex  mb-2 w-[80%] gap-1">
                Pay rate <p className="text-red-600">*</p>
              </label>
              <Field type="number" className="w-[80%] border rounded-md px-3 py-2" name="payRate" placeholder="PayRate"/>
              <ErrorMessage name="payRate" component="span" style={{color: "red"}}></ErrorMessage>
            </div>
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="iD-payRate" className="flex  mb-2 w-[80%] gap-1">
                ID PayRate <p className="text-red-600">*</p>
              </label>
              <select
                name="payRates" // Add the name attribute to match the state key
                onChange={handleChange}
                className=" w-[80%] border rounded-md  px-3 py-[9px]"
              >
                {payRates?.map((payRate) => (
                    <option key={payRate.idPayRate} value={JSON.stringify(payRate)}>
                      {payRate.payRateName}
                    </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col justify-center items-center">
              <label
                htmlFor="benefit-planId"
                className="flex  mb-2 w-[80%] gap-1"
              >
                Benefit PlanId <p className="text-red-600">*</p>
              </label>
              <select
                name="benefitPlans"
                onChange={handleChange}
                className=" w-[80%] border rounded-md  px-3 py-[9px]"
              >
                {benefitPlans?.map((benefitPlan) => (
                    <option key={benefitPlan.benefitPlanId} value={JSON.stringify(benefitPlan)}>
                      {benefitPlan.planName}
                    </option>
                ))}
              </select>
            </div>
            <div className="flex  justify-between px-4 items-end">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, form: 1 })}
                className=" w-28 px-4 py-2 bg-[#CBE4EF] rounded-md active:bg-red-50 transition duration-150 ease-linear "
              >
                Return
              </button>
              {isSubmitting ? <></> :
              <button
                type="submit"
                className=" w-28  px-4 py-2 bg-[#CBE4EF] rounded-md active:bg-red-50 transition duration-150 ease-linear "
              >
                Continue
              </button>
            }
            </div>
          </div>
          {/* <div className="right-10 w-full pr-10 flex h-10 mt-10 justify-end gap-16">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, form: 1 })}
                className=" w-28 px-4 py-2 bg-[#CBE4EF] rounded-md active:bg-red-50 transition duration-150 ease-linear"
              >
                Return
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, form: 3 })}
                className=" w-28  px-4 py-2 bg-[#CBE4EF] rounded-md active:bg-red-50 transition duration-150 ease-linear"
              >
                Continute
              </button>
            </div> */}
        </div>
      </div>
              </Form>
          )
        }
      </Formik>
    </div>
  );
};
export default Form2;
