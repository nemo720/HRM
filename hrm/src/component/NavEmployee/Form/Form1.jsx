
export const Form1 = ({ formData, setFormData }) => {
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
      <div className="w-full h-full flex flex-col ">
        <div className="w-full flex-[1] flex items-center  box-border">
          <h1 className="text-xl  text-[#237395] ml-6">Add new Employee</h1>
        </div>
        <div className="w-full flex flex-[9] justify-center items-center">
          <form className="w-[90%] h-full relative">
            <div className="grid grid-cols-2 gap-8 ">
              {/* First Column */}
              <div className="flex flex-col justify-center items-center">
                <label htmlFor="firt-name" className="flex  mb-2 w-[80%] gap-1">
                  Firt Name <p className="text-red-600">*</p>
                </label>
                <input
                  type="text"
                  id="firt-name"
                  name="firtName"
                  value={formData.firtName}
                  onChange={handleChange}
                  className="w-[80%] border rounded-md px-3 py-2"
                  placeholder="Firt Name"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <label htmlFor="last-name" className="flex  mb-2 w-[80%] gap-1">
                  {" "}
                  Last Name <p className="text-red-600">*</p>
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-[80%] border rounded-md px-3 py-2"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <label htmlFor="id-employee" className="flex  mb-2 w-[80%] gap-1">
                  {" "}
                  Id Employee <p className="text-red-600">*</p>
                </label>
                <input
                  type="text"
                  id="id-employee"
                  name="idEmployee"
                  value={formData.idEmployee}
                  onChange={handleChange}
                  className="w-[80%] border rounded-md px-3 py-2"
                  placeholder="Id Employee"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <label htmlFor="payrate" className="flex  mb-2 w-[80%] gap-1">
                  {" "}
                  PayRate <p className="text-red-600">*</p>
                </label>
                <input
                  type="text"
                  id="payrate"
                  name="payRate"
                  value={formData.payRate}
                  onChange={handleChange}
                  className="w-[80%] border rounded-md px-3 py-2"
                  placeholder="PayRate"
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
                  type="text"
                  id="paid-to-date"
                  name="paidToDate"
                  value={formData.paidToDate}
                  onChange={handleChange}
                  className="w-[80%] border rounded-md px-3 py-2"
                  placeholder="Paid To Day"
                />
              </div>
              {/* Second Column */}
              <div className="flex flex-col justify-center items-center">
                <label
                  htmlFor="vacation-days"
                  className="flex  mb-2 w-[80%] gap-1"
                >
                  Vacation Days <p className="text-red-600">*</p>
                </label>
                <input
                  type="text"
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
                  htmlFor="paid-last-year"
                  className="flex  mb-2 w-[80%] gap-1"
                >
                  Paid Last Year <p className="text-red-600">*</p>
                </label>
                <input
                  type="text"
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
                <label htmlFor="birthday" className="flex  mb-2 w-[80%] gap-1">
                  Birthday <p className="text-red-600">*</p>
                </label>
                <input
                  type="date"
                  id="birthday"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                  className="w-[80%] border rounded-md px-3 py-2"
                  placeholder="Birthday"
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
            </div>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, form: 2 })}
              className="absolute mt-10 px-4 py-2 bg-[#CBE4EF] rounded-md right-10 active:bg-red-50 transition duration-150 ease-linear"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    );
  }
  export default Form1
