import {useParams} from "react-router-dom";
import {getEmployee} from "@/services/EmployeeService.js";
export const  Form2 =({ formData, setFormData }) => {
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
  return (
      <div className="w-full h-full flex flex-col ">
        <div className="w-full flex-[1] flex items-center  box-border">
          {pageTitle()}
        </div>
        <div className="w-full flex flex-[9] justify-center items-center">
          <form className="w-[90%] h-full   ">
            <div className="grid grid-cols-2 gap-7 ">
              {/* First Column */}
              <div className="flex flex-col justify-center items-center">
                <label htmlFor="ssnP" className="flex  mb-2 w-[80%] gap-1">
                  ssnP <p className="text-red-600">*</p>
                </label>
                <input
                    type="text"
                    id="ssnP"
                    name="ssnP"
                    value={formData.ssnP}
                    onChange={handleChange}
                    className="w-[80%] border rounded-md px-3 py-2"
                    placeholder="ssnP"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <label htmlFor="ssnE" className="flex  mb-2 w-[80%] gap-1">
                  {" "}
                  ssnE <p className="text-red-600">*</p>
                </label>
                <input
                    type="number"
                    id="ssnE"
                    name="ssnE"
                    value={formData.ssnE}
                    onChange={handleChange}
                    className="w-[80%] border rounded-md px-3 py-2"
                    placeholder="ssnE"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <label
                    htmlFor="paid-last-year"
                    className="flex  mb-2 w-[80%] gap-1"
                >
                  Paid Last Year <p className="text-red-600">*</p>
                </label>
                <input
                    type="number"
                    id="paid-last-year"
                    name="paidLastYear"
                    value={formData.paidLastYear}
                    onChange={handleChange}
                    className="w-[80%] border rounded-md px-3 py-2"
                    placeholder="Paid Last Year"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <label
                    htmlFor="paid-to-date"
                    className="flex  mb-2 w-[80%] gap-1"
                >
                  Paid To Day <p className="text-red-600">*</p>
                </label>
                <input
                    type="number"
                    id="paid-to-date"
                    name="paidToDate"
                    value={formData.paidToDate}
                    onChange={handleChange}
                    className="w-[80%] border rounded-md px-3 py-2"
                    placeholder="Paid To Day"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <label htmlFor="city" className="flex  mb-2 w-[80%] gap-1">
                  City <p className="text-red-600">*</p>
                </label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-[80%] border rounded-md px-3 py-2"
                    placeholder="City"
                />
              </div>
              {/* Second Column */}
              <div className="flex flex-col justify-center items-center">
                <label htmlFor="country" className="flex  mb-2 w-[80%] gap-1">
                  Country <p className="text-red-600">*</p>
                </label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-[80%] border rounded-md px-3 py-2"
                    placeholder="Country"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <label htmlFor="zip" className="flex  mb-2 w-[80%] gap-1">
                  Zip <p className="text-red-600">*</p>
                </label>
                <input
                    type="number"
                    id="zip"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    className="w-[80%] border rounded-md px-3 py-2"
                    placeholder="Zip"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <label
                    htmlFor="vacation-days"
                    className="flex  mb-2 w-[80%] gap-1"
                >
                  Vacation Days <p className="text-red-600">*</p>
                </label>
                <input
                    type="number"
                    id="vacations-days"
                    name="vacationDays"
                    value={formData.vacationDays}
                    onChange={handleChange}
                    className="w-[80%] border rounded-md px-3 py-2"
                    placeholder="Vacation Days"
                />
              </div>
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
                <label htmlFor="id-payRate" className="flex  mb-2 w-[80%] gap-1">
                  ID PayRate <p className="text-red-600">*</p>
                </label>
                <input
                    type="number"
                    id="id-payRate"
                    name="idPayRate"
                    value={formData.idPayRate}
                    onChange={handleChange}
                    className="w-[80%] border rounded-md px-3 py-2"
                    placeholder="ID PayRate"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <label htmlFor="benefit-planId" className="flex  mb-2 w-[80%] gap-1">
                  Benefit PlanId <p className="text-red-600">*</p>
                </label>
                <input
                    type="number"
                    id="benefit-planId"
                    name="benefitPlanId"
                    value={formData.benefitPlanId}
                    onChange={handleChange}
                    className="w-[80%] border rounded-md px-3 py-2"
                    placeholder="Benefit PlanId"
                />
              </div>
              <div className="flex  justify-between px-4 items-end">
                <button
                    type="button"
                    onClick={() => setFormData({ ...formData, form: 1 })}
                    className=" w-28 px-4 py-2 bg-[#CBE4EF] rounded-md active:bg-red-50 transition duration-150 ease-linear "
                >
                  Return
                </button>
                <button
                    type="button"
                    onClick={() => setFormData({ ...formData, form: 3 })}
                    className=" w-28  px-4 py-2 bg-[#CBE4EF] rounded-md active:bg-red-50 transition duration-150 ease-linear "
                >
                  Continue
                </button>
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
          </form>
        </div>
      </div>
  );
}
export default Form2