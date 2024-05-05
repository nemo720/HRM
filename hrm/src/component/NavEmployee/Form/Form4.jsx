

export const  Form4 = ({ formData, setFormData }) => {
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
      <div className="w-full h-full flex flex-col ">
        <div className="w-full flex-[1] flex items-center  box-border">
          <h1 className="text-xl  text-[#237395] ml-6">Add new Employee </h1>
        </div>
        <div className="w-full flex flex-[9] justify-center items-center">
          <form className="w-[90%] h-full   ">
            <div className="w-full h-[83%] flex flex-col  ">
              <h1 className="mb-3 text-lg flex">
                PayRates<p className="text-red-600">*</p>{" "}
              </h1>
              <div className=" flex justify-between   ">
                <div className="flex flex-col justify-center items-center w-1/2">
                  <label htmlFor="iD-payRate" className="flex  mb-2 w-[80%] gap-1">
                  ID PayRate <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="iD-payRate"
                    name="iDPayRate"
                    value={formData.iDPayRate}
                    onChange={handleChange}
                    className="w-[80%] border rounded-md px-3 py-2"
                    placeholder="ID PayRate"
                  />
                </div>
                <div className="flex flex-col justify-center items-center w-1/2  ">
                  <label htmlFor="pay-pate-name" className="flex  mb-2 w-[80%] gap-1">
                    {" "}
                    Pay Rate Name <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="pay-pate-name"
                    name="payRateName "
                    value={formData.payRateName}
                    onChange={handleChange}
                    className="w-[80%] border rounded-md px-3 py-2"
                    placeholder="Pay Rate Name"
                  />
                </div>
              </div>
              <div className=" flex justify-between mt-3 px-3 ">
                <div className="flex flex-col justify-center items-center w-1/3">
                  <label htmlFor="value" className="flex  mb-2 w-[80%] gap-1">
                  Value <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="value"
                    name="value"
                    value={formData.value}
                    onChange={handleChange}
                    className="w-[80%] border rounded-md px-3 py-2"
                    placeholder="Value"
                  />
                </div>
                <div className="flex flex-col justify-center items-center w-1/3">
                  <label htmlFor="tax-percentage" className="flex  mb-2 w-[80%] gap-1">
                    {" "}
                    Tax Percentage <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="tax-percentage"
                    name="taxPercentage"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-[80%] border rounded-md px-3 py-2"
                    placeholder="Tax Percentage"
                  />
                </div>
                <div className="flex flex-col justify-center items-center w-1/3">
                  <label htmlFor="pay-type" className="flex  mb-2 w-[80%] gap-1">
                    {" "}
                    Pay Type <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="pay-type"
                    name="payType"
                    value={formData.payType}
                    onChange={handleChange}
                    className="w-[80%] border rounded-md px-3 py-2"
                    placeholder="Pay Type"
                  />
                </div>
              </div>
              <div className=" flex justify-between mt-3  ">
                <div className="flex flex-col justify-center items-center w-1/2">
                  <label htmlFor="pay-amount" className="flex  mb-2 w-[80%] gap-1">
                  Pay Amount <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="pay-amount"
                    name="payAmount"
                    value={formData.payAmount}
                    onChange={handleChange}
                    className="w-[80%] border rounded-md px-3 py-2"
                    placeholder="Pay Amount"
                  />
                </div>
                <div className="flex flex-col justify-center items-center w-1/2">
                  <label htmlFor="pt-levelC" className="flex  mb-2 w-[80%] gap-1">
                    {" "}
                    Pt LevelC <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="pt-levelC"
                    name="ptLevelC"
                    value={formData.ptLevelC}
                    onChange={handleChange}
                    className="w-[80%] border rounded-md px-3 py-2"
                    placeholder="Pt LevelC"
                  />
                </div>
              </div>
              <h1 className="my-3 text-lg flex">
                Benefit Plans<p className="text-red-600">*</p>{" "}
              </h1>
              <div className=" flex justify-between   ">
                <div className="flex flex-col justify-center items-center w-1/2">
                  <label htmlFor="benefit-planId" className="flex  mb-2 w-[80%] gap-1">
                  Benefit PlanId <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="benefit-planId"
                    name="benefitPlanId"
                    value={formData.benefitPlanId}
                    onChange={handleChange}
                    className="w-[80%] border rounded-md px-3 py-2"
                    placeholder="Benefit PlanId"
                  />
                </div>
                <div className="flex flex-col justify-center items-center w-1/2">
                  <label htmlFor="plan-name" className="flex  mb-2 w-[80%] gap-1">
                    {" "}
                    Plan Name <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="plan-name"
                    name="planName"
                    value={formData.planName}
                    onChange={handleChange}
                    className="w-[80%] border rounded-md px-3 py-2"
                    placeholder="Plan Name"
                  />
                </div>
              </div>
              <div className=" flex justify-between mt-3  ">
                <div className="flex flex-col justify-center items-center w-1/2">
                  <label htmlFor="deductable" className="flex  mb-2 w-[80%] gap-1">
                  Deductable <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="deductable"
                    name="deductable"
                    value={formData.deductable}
                    onChange={handleChange}
                    className="w-[80%] border rounded-md px-3 py-2"
                    placeholder="Deductable"
                  />
                </div>
                <div className="flex flex-col justify-center items-center w-1/2">
                  <label htmlFor="percentage-coPay" className="flex  mb-2 w-[80%] gap-1">
                    {" "}
                    Percentage CoPay <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="percentage-coPay"
                    name="percentageCoPay"
                    value={formData.percentageCoPay}
                    onChange={handleChange}
                    className="w-[80%] border rounded-md px-3 py-2"
                    placeholder="Percentage CoPay"
                  />
                </div>
              </div>
            </div>
  
            <div className="w-full  pr-10 flex mt-2  justify-end gap-16">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, form: 3 })}
                className=" w-28 px-4 py-2 bg-[#CBE4EF] rounded-md active:bg-red-50 transition duration-150 ease-linear"
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
          </form>
        </div>
      </div>
    );
  }
export default Form4