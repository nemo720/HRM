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
            {/* Second Column */}
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
};
export default Form1;
