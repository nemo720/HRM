import { useState } from "react";
// Form 1
function Form1({ formData, setFormData }) {
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
            className="absolute mt-10 px-4 py-2 bg-[#CBE4EF] rounded-md right-10"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
// Form 2
function Form2({ formData, setFormData }) {
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
          <div className="grid grid-cols-2 gap-8 ">
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
                type="text"
                id="ssnE"
                name="ssnE"
                value={formData.ssnE}
                onChange={handleChange}
                className="w-[80%] border rounded-md px-3 py-2"
                placeholder="ssnE"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="address1" className="flex  mb-2 w-[80%] gap-1">
                {" "}
                Address 1<p className="text-red-600">*</p>
              </label>
              <input
                type="text"
                id="address1"
                name="address1"
                value={formData.address1}
                onChange={handleChange}
                className="w-[80%] border rounded-md px-3 py-2"
                placeholder="Address 1"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="address2" className="flex  mb-2 w-[80%] gap-1">
                {" "}
                Address 2 <p className="text-red-600">*</p>
              </label>
              <input
                type="text"
                id="address2"
                name="address2"
                value={formData.address2}
                onChange={handleChange}
                className="w-[80%] border rounded-md px-3 py-2"
                placeholder="Address 2"
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
                type="text"
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                className="w-[80%] border rounded-md px-3 py-2"
                placeholder="Zip"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="gender" className="flex  mb-2 w-[80%] gap-1">
                Gender <p className="text-red-600">*</p>
              </label>
              <input
                type="text"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-[80%] border rounded-md px-3 py-2"
                placeholder="Gender"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="email" className="flex  mb-2 w-[80%] gap-1">
                Email <p className="text-red-600">*</p>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-[80%] border rounded-md px-3 py-2"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <label
                htmlFor="phone-number"
                className="flex  mb-2 w-[80%] gap-1"
              >
                Phone Number <p className="text-red-600">*</p>
              </label>
              <input
                type="text"
                id="phone-number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-[80%] border rounded-md px-3 py-2"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="right-10 w-full pr-10 flex h-10 mt-10 justify-end gap-16">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, form: 1 })}
              className=" w-28 px-4 py-2 bg-[#CBE4EF] rounded-md "
            >
              Return
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, form: 3 })}
              className=" w-28  px-4 py-2 bg-[#CBE4EF] rounded-md "
            >
              Continute
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
// Form 3
function Form3({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="w-full h-full flex flex-col ">
      <div className="w-full flex-[1] flex items-center  box-border">
        <h1 className="text-xl  text-[#237395] ml-6">Add new Employee 3</h1>
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
            <div className="flex  justify-between px-4 items-end">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, form: 2 })}
                className=" w-28 px-4 py-2 bg-[#CBE4EF] rounded-md "
              >
                Return
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, form: 4 })}
                className=" w-28  px-4 py-2 bg-[#CBE4EF] rounded-md "
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
function Form4({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="w-full h-full flex flex-col ">
      <div className="w-full flex-[1] flex items-center  box-border">
        <h1 className="text-xl  text-[#237395] ml-6">Add new Employee 4</h1>
      </div>
      <div className="w-full flex flex-[9] justify-center items-center">
        <form className="w-[90%] h-full   ">
          <div className="w-full h-[85%] flex flex-col  ">
            <h1 className="my-3 text-lg flex">
              PayRates<p className="text-red-600">*</p>{" "}
            </h1>
            <div className=" flex justify-between   ">
              <div className="flex flex-col justify-center items-center w-1/2">
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
              <div className="flex flex-col justify-center items-center w-1/2  ">
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
            </div>
            <div className=" flex justify-between mt-3 px-3 ">
              <div className="flex flex-col justify-center items-center w-1/3">
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
              <div className="flex flex-col justify-center items-center w-1/3">
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
              <div className="flex flex-col justify-center items-center w-1/3">
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
            </div>
            <div className=" flex justify-between mt-3  ">
              <div className="flex flex-col justify-center items-center w-1/2">
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
              <div className="flex flex-col justify-center items-center w-1/2">
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
            </div>
            <h1 className="my-3 text-lg flex">
              Benefit Plans<p className="text-red-600">*</p>{" "}
            </h1>
            <div className=" flex justify-between   ">
              <div className="flex flex-col justify-center items-center w-1/2">
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
              <div className="flex flex-col justify-center items-center w-1/2">
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
            </div>
            <div className=" flex justify-between mt-4  ">
              <div className="flex flex-col justify-center items-center w-1/2">
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
              <div className="flex flex-col justify-center items-center w-1/2">
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
            </div>
          </div>

          <div className="w-full  pr-10 flex  mt-4 justify-end gap-16">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, form: 3 })}
              className=" w-28 px-4 py-2 bg-[#CBE4EF] rounded-md "
            >
              Return
            </button>
            <button
              type="submit"
              className=" w-28  px-4 py-2 bg-[#218FBE] rounded-md "
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
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
