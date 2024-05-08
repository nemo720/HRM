
import { useParams } from "react-router-dom";
export const  Form2 =({ formData, setFormData }) => {
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
            </div>
          </form>
        </div>
      </div>
    );
  }
export default Form2