import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export const Form3 = ({ formData, setFormData, create }) => {
  const handleSubmit = (formData) => {
    const obj = {
      ...formData,
      payRates: formData.payRates ? JSON.parse(formData.payRates) : {},
      benefitPlans: formData.benefitPlans
        ? JSON.parse(formData.benefitPlans)
        : {},
    };
    if ("form" in obj) {
      delete obj.form;
    }
    console.log("hi");
    console.log(obj);
    console.log("formData");
    console.log(formData);
    create(obj)
      .then((r) => console.log(r))
      .catch((err) => console.log(err));
  };

  const validateSchema = {
    vacationDays: Yup.string().required(),
    driversLicense: Yup.string().required(),
  };
  return (
    <div className="w-full h-full flex flex-col ">
      <div className="w-full flex-[1] flex items-center  box-border">
        <h1 className="text-xl  text-[#237395] ml-6">Add new Employee</h1>
      </div>
      <Formik
        initialValues={formData}
        onSubmit={(values, { setSubmitting }) => {
          setFormData(values);
          handleSubmit(values);
          setSubmitting(false);
        }}
        validationSchema={Yup.object(validateSchema)}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="w-full flex flex-[9] justify-center items-center  h-full pb-5 pt-2">
              <div className="w-[90%] h-full   ">
                <div className="grid grid-cols-2 gap-7 ">
                  <div className="flex flex-col justify-center items-center">
                    <label
                      htmlFor="vacation-days"
                      className="flex  mb-2 w-[80%] gap-1"
                    >
                      Vacation Days <p className="text-red-600">*</p>
                    </label>
                    <Field
                      type="number"
                      className="w-[80%] border rounded-md px-3 py-2"
                      name="vacationDays"
                      placeholder="Vacation Days"
                    />
                    <ErrorMessage
                      name="vacationDays"
                      component="span"
                      style={{ color: "red" }}
                    ></ErrorMessage>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <label
                      htmlFor="drivers-license"
                      className="flex  mb-2 w-[80%] gap-1"
                    >
                      Drivers License <p className="text-red-600">*</p>
                    </label>
                    <Field
                      type="text"
                      className="w-[80%] border rounded-md px-3 py-2"
                      name="driversLicense"
                      placeholder="Drivers License"
                    />
                    <ErrorMessage
                      name="driversLicense"
                      component="span"
                      style={{ color: "red" }}
                    ></ErrorMessage>
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
                        <Field
                          type="radio"
                          name="shareholderStatus"
                          value="true"
                        />
                        Yes
                      </label>
                      <label className="gap-2 flex">
                        <Field
                          type="radio"
                          name="shareholderStatus"
                          value="false"
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
                    <Field
                      type="text"
                      className="w-[80%] border rounded-md px-3 py-2"
                      name="employmentCode"
                      placeholder="Employment Code"
                    />
                    <ErrorMessage
                      name="employmentCode"
                      component="span"
                      style={{ color: "red" }}
                    ></ErrorMessage>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <label
                      htmlFor="employment-status"
                      className="flex  mb-2 w-[80%] gap-1"
                    >
                      Employment Status <p className="text-red-600">*</p>
                    </label>
                    <Field
                      type="text"
                      className="w-[80%] border rounded-md px-3 py-2"
                      name="employmentStatus"
                      placeholder="Employment Status"
                    />
                    <ErrorMessage
                      name="employmentStatus"
                      component="span"
                      style={{ color: "red" }}
                    ></ErrorMessage>
                  </div>
                  {/* Second Column */}
                  <div className="flex flex-col justify-center items-center">
                    <label
                      htmlFor="hire-date-for-working"
                      className="flex  mb-2 w-[80%] gap-1"
                    >
                      Hire Date For Working <p className="text-red-600">*</p>
                    </label>
                    <Field
                      type="date"
                      className="w-[80%] border rounded-md px-3 py-2"
                      name="hireDateForWorking"
                      placeholder="Hire Date For Working"
                    />
                    <ErrorMessage
                      name="hireDateForWorking"
                      component="span"
                      style={{ color: "red" }}
                    ></ErrorMessage>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <label
                      htmlFor="workers-comp-code "
                      className="flex  mb-2 w-[80%] gap-1"
                    >
                      Workers Comp Code <p className="text-red-600">*</p>
                    </label>
                    <Field
                      type="text"
                      className="w-[80%] border rounded-md px-3 py-2"
                      name="workersCompCode"
                      placeholder="Workers Comp Code"
                    />
                    <ErrorMessage
                      name="workersCompCode"
                      component="span"
                      style={{ color: "red" }}
                    ></ErrorMessage>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <label
                      htmlFor="termination-date"
                      className="flex  mb-2 w-[80%] gap-1"
                    >
                      Termination Date <p className="text-red-600">*</p>
                    </label>
                    <Field
                      type="date"
                      className="w-[80%] border rounded-md px-3 py-2"
                      name="terminationDate"
                      placeholder="Termination Date"
                    />
                    <ErrorMessage
                      name="terminationDate"
                      component="span"
                      style={{ color: "red" }}
                    ></ErrorMessage>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <label
                      htmlFor="rehire-date-for-working"
                      className="flex  mb-2 w-[80%] gap-1"
                    >
                      Rehire Date For Working <p className="text-red-600">*</p>
                    </label>
                    <Field
                      type="date"
                      className="w-[80%] border rounded-md px-3 py-2"
                      name="rehireDateForWorking"
                      placeholder="Rehire Date For Working"
                    />
                    <ErrorMessage
                      name="rehireDateForWorking"
                      component="span"
                      style={{ color: "red" }}
                    ></ErrorMessage>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <label
                      htmlFor="last-review-date"
                      className="flex  mb-2 w-[80%] gap-1"
                    >
                      Last Review Date <p className="text-red-600">*</p>
                    </label>
                    <Field
                      type="date"
                      className="w-[80%] border rounded-md px-3 py-2"
                      name="lastReviewDate"
                      placeholder="Last Review Date"
                    />
                    <ErrorMessage
                      name="lastReviewDate"
                      component="span"
                      style={{ color: "red" }}
                    ></ErrorMessage>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <label
                      htmlFor="days-working-per-month"
                      className="flex  mb-2 w-[80%] gap-1"
                    >
                      Days Working Per Month <p className="text-red-600">*</p>
                    </label>
                    <Field
                      type="number"
                      className="w-[80%] border rounded-md px-3 py-2"
                      name="daysWorkingPerMonth"
                      placeholder="Days Working Per Month"
                    />
                    <ErrorMessage
                      name="daysWorkingPerMonth"
                      component="span"
                      style={{ color: "red" }}
                    ></ErrorMessage>
                  </div>
                  <div className="flex  justify-between px-4 items-end">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, form: 2 })}
                      className=" w-28 px-4 py-2 bg-[#CBE4EF] rounded-md active:bg-red-50 transition duration-150 ease-linear "
                    >
                      Return
                    </button>
                    {isSubmitting ? (
                      <></>
                    ) : (
                      <button
                        type="submit"
                        className=" w-28  px-4 py-2 bg-[#218FBE] text-black  active:bg-red-50 transition duration-150 ease-linear  rounded-md hover:scale-110 hover:bg-green-100"
                      >
                        Create
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Form3;
