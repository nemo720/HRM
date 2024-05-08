import { useParams } from "react-router-dom";
export const  Form3 = ({ formData, setFormData }) => {
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const { id } = useParams();
    function pageTitle(){
      if (id){
        return <h1 className="text-xl  text-[#237395] ml-6">Edit Employee</h1>
      }else{
        return <h1 className="text-xl  text-[#237395] ml-6">Add new Employee</h1>
      }}
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
                <label
                  htmlFor="merital-status"
                  className="flex  mb-2 w-[80%] gap-1"
                >
                  Marital Status <p className="text-red-600">*</p>
                </label>
                <select
                  id="mySelect"
                  className=" w-[80%] border rounded-md  px-3 py-[9px]"
                >
                  <option value="option1">Single</option>
                  <option value="option2">Couple</option>
                </select>
              </div>
              <div className="flex flex-col justify-center items-center">
                <label htmlFor="ethnicity" className="flex  mb-2 w-[80%] gap-1">
                  {" "}
                  Ethnicity <p className="text-red-600">*</p>
                </label>
                <input
                  type="text"
                  id="ethnicity"
                  name="ethnicity"
                  value={formData.ethnicity}
                  onChange={handleChange}
                  className="w-[80%] border rounded-md px-3 py-2"
                  placeholder="Ethnicity"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <label htmlFor="shareholder-status" className="flex  mb-2 w-[80%] gap-1">
                  {" "}
                  Sharehoder Status <p className="text-red-600">*</p>
                </label>
                <input
                  type="text"
                  id="shareholder-status"
                  name="shareholderStatus"
                  value={formData.shareholderStatus}
                  onChange={handleChange}
                  className="w-[80%] border rounded-md px-3 py-2"
                  placeholder="Shareholder Status"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <label htmlFor="employment-code" className="flex  mb-2 w-[80%] gap-1">
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
                  Workers Comp Code  <p className="text-red-600">*</p>
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
                  htmlFor="termination-date "
                  className="flex  mb-2 w-[80%] gap-1"
                >
                 Termination Date  <p className="text-red-600">*</p>
                </label>
                <input
                  type="date"
                  id="termination-date "
                  name="terminationDate "
                  value={formData.terminationDate}
                  onChange={handleChange}
                  className="w-[80%] border rounded-md px-3 py-2"
                  placeholder="Termination Date"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <label htmlFor="rehire-date-for-working" className="flex  mb-2 w-[80%] gap-1">
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
                  Days Working Per Month  <p className="text-red-600">*</p>
                </label>
                <input
                  type="date"
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
                  type="button"
                  onClick={() => setFormData({ ...formData, form: 4 })}
                  className=" w-28  px-4 py-2 bg-[#CBE4EF] rounded-md active:bg-red-50 transition duration-150 ease-linear "
                >
                  Continute
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
export default Form3