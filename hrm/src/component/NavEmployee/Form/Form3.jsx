import { useParams } from "react-router-dom";
import { getEmployee } from "@/services/EmployeeService.js";
import { create } from "../HandleEmployee.jsx";

export const Form3 = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      ...formData, payRates: JSON.parse(formData.payRates), benefitPlans: JSON.parse(formData.benefitPlans)
    }
    console.log("hi")
    console.log(obj)
    if('form' in obj){
      delete obj.form;
    }
    create(obj);
  };

  return (
    <div className="w-full h-full flex flex-col ">
      <div className="w-full flex-[1] flex items-center  box-border">
        {pageTitle()}
      </div>
      <div className="w-full flex flex-[9] justify-center items-center">
        <form onSubmit={handleSubmit} className="w-[90%] h-full   ">
          <div className="grid grid-cols-2 gap-7 ">
            {/* First Column */}

            <div className="flex flex-col justify-center items-center">
              <label
                htmlFor="middle-initial"
                className="flex  mb-2 w-[80%] gap-1"
              >
                MiddleInitial <p className="text-red-600">*</p>
              </label>
              <input
                type="text"
                id="middle-initial"
                name="middleInitial"
                value={formData.middleInitial}
                onChange={handleChange}
                className="w-[80%] border rounded-md px-3 py-2"
                placeholder="MiddleInitial"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <label
                htmlFor="drivers-license"
                className="flex  mb-2 w-[80%] gap-1"
              >
                Drivers License <p className="text-red-600">*</p>
              </label>
              <input
                type="text"
                id="drivers-license"
                name="driversLicense"
                value={formData.driversLicense}
                onChange={handleChange}
                className="w-[80%] border rounded-md px-3 py-2"
                placeholder="Drivers License"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <label
                htmlFor="shareholder-status"
                className="flex  mb-2 w-[80%] gap-1"
              >
                {" "}
                Shareholder Status <p className="text-red-600">*</p>
              </label>
              <div className="w-[80%]  rounded-md px-3 py-2 flex justify-around">
                <label className="gap-2 flex">
                  <input
                      type="radio"
                      name="shareholderStatus"
                      value="true"
                      onChange={handleChange}
                  />
                  Yes
                </label>
                <label className="gap-2 flex">
                  <input
                      type="radio"
                      name="shareholderStatus"
                      value="false"
                      onChange={handleChange}
                  />
                  No
                </label>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <label
                htmlFor="employment-code"
                className="flex  mb-2 w-[80%] gap-1"
              >
                {" "}
                Employment Code <p className="text-red-600">*</p>
              </label>
              <input
                type="text"
                id="employment-code"
                name="employmentCode"
                value={formData.employmentCode}
                onChange={handleChange}
                className="w-[80%] border rounded-md px-3 py-2"
                placeholder="Employment Code"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <label
                htmlFor="employment-status"
                className="flex  mb-2 w-[80%] gap-1"
              >
                Employment Status <p className="text-red-600">*</p>
              </label>
              <input
                type="text"
                id="employment-status"
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={handleChange}
                className="w-[80%] border rounded-md px-3 py-2"
                placeholder="Employment Status"
              />
            </div>
            {/* Second Column */}
            <div className="flex flex-col justify-center items-center">
              <label
                htmlFor="hire-date-for-working"
                className="flex  mb-2 w-[80%] gap-1"
              >
                Hire Date For Working <p className="text-red-600">*</p>
              </label>
              <input
                type="date"
                id="hire-date-for-working"
                name="hireDateForWorking"
                value={formData.hireDateForWorking}
                onChange={handleChange}
                className="w-[80%] border rounded-md px-3 py-2"
                placeholder="Hire Date For Working"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <label
                htmlFor="workers-comp-code "
                className="flex  mb-2 w-[80%] gap-1"
              >
                Workers Comp Code <p className="text-red-600">*</p>
              </label>
              <input
                type="text"
                id="workers-comp-code"
                name="workersCompCode"
                value={formData.workersCompCode}
                onChange={handleChange}
                className="w-[80%] border rounded-md px-3 py-2"
                placeholder="Workers Comp Code"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <label
                htmlFor="termination-date"
                className="flex  mb-2 w-[80%] gap-1"
              >
                Termination Date <p className="text-red-600">*</p>
              </label>
              <input
                type="date"
                id="termination-date"
                name="terminationDate"
                value={formData.terminationDate}
                onChange={handleChange}
                className="w-[80%] border rounded-md px-3 py-2"
                placeholder="Termination Date"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <label
                htmlFor="rehire-date-for-working"
                className="flex  mb-2 w-[80%] gap-1"
              >
                Rehire Date For Working <p className="text-red-600">*</p>
              </label>
              <input
                type="date"
                id="rehire-date-for-working"
                name="rehireDateForWorking"
                value={formData.rehireDateForWorking}
                onChange={handleChange}
                className="w-[80%] border rounded-md px-3 py-2"
                placeholder="Rehire Date For Working"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <label
                htmlFor="last-review-date"
                className="flex  mb-2 w-[80%] gap-1"
              >
                Last Review Date <p className="text-red-600">*</p>
              </label>
              <input
                type="date"
                id="last-review-date"
                name="lastReviewDate"
                value={formData.lastReviewDate}
                onChange={handleChange}
                className="w-[80%] border rounded-md px-3 py-2"
                placeholder="Last Review Date"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <label
                htmlFor="days-working-per-month"
                className="flex  mb-2 w-[80%] gap-1"
              >
                Days Working Per Month <p className="text-red-600">*</p>
              </label>
              <input
                type="number"
                id="days-working-per-month"
                name="daysWorkingPerMonth"
                value={formData.daysWorkingPerMonth}
                onChange={handleChange}
                className="w-[80%] border rounded-md px-3 py-2"
                placeholder="Days Working Per Month "
              />
            </div>
            <div className="flex  justify-between px-4 items-end">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, form: 2 })}
                className=" w-28 px-4 py-2 bg-[#CBE4EF] rounded-md active:bg-red-50 transition duration-150 ease-linear "
              >
                Return
              </button>
              <button
                type="submit"
                className=" w-28  px-4 py-2 bg-[#218FBE] text-black  active:bg-red-50 transition duration-150 ease-linear  rounded-md hover:scale-110 hover:bg-green-100"
              >
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form3;
