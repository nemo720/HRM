import { getEmployee } from "@/services/EmployeeService";
import { useParams } from "react-router-dom";
import { useState } from "react";
export const Form1 = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };
  return (
    <div className="w-full h-full flex flex-col ">
      <div className="w-full flex-[1] flex items-center  box-border">
        {pageTitle()}
      </div>
      <div className="w-full flex flex-[9] justify-center items-center">
        <form className="w-[90%] h-full relative">
          <div className="grid grid-cols-2 gap-7 ">
            {/* First Column */}
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="firt-name" className="flex  mb-2 w-[80%] gap-1">
                First Name <p className="text-red-600">*</p>
              </label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-[80%] border rounded-md px-3 py-2"
                placeholder="First Name"
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
                type="number"
                id="id-employee"
                name="idEmployee"
                value={formData.idEmployee}
                onChange={handleChange}
                className="w-[80%] border rounded-md px-3 py-2"
                placeholder="Id Employee"
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
                Address 2
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
            {/* Second Column */}
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="gender" className="flex  mb-2 w-[80%] gap-1">
                Gender <p className="text-red-600">*</p>
              </label>
              <div className="w-[80%]  rounded-md px-3 py-2 flex justify-around">
                <label className="gap-2 flex">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={selectedGender === "male"}
                    onChange={handleGenderChange}
                  />
                  Male
                </label>
                <label className="gap-2 flex">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={selectedGender === "female"}
                    onChange={handleGenderChange}
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
              <input
                type="number"
                id="phone-number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-[80%] border rounded-md px-3 py-2"
                placeholder="Phone Number"
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
              <label htmlFor="ethnicity" className="flex  mb-2 w-[80%] gap-1">
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
              <label
                htmlFor="merital-status"
                className="flex  mb-2 w-[80%] gap-1"
              >
                Marital Status <p className="text-red-600">*</p>
              </label>
              <select
                id="marital-status"
                name="maritalStatus" // Add the name attribute to match the state key
                value={formData.maritalStatus} // Set the selected value based on formData
                onChange={handleChange}
                className=" w-[80%] border rounded-md  px-3 py-[9px]"
              >
                <option value="Single">Single</option>
                <option value="Couple">Couple</option>
              </select>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, form: 2 })}
                className="absolute mt-10 px-4 py-2 bg-[#CBE4EF] rounded-md right-10 active:bg-red-50 transition duration-150 ease-linear"
              >
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form1;
