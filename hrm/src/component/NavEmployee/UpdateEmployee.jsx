import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import moment from 'moment';

export function UpdateEmployee(){
    const {id} = useParams();
    const [payRates,setPayRates] = useState();
    const [benefitPlans,setBenefitPlans] = useState();
    const [employee, setEmployee] = useState({
        id: 0,
        idEmployee: "",
        firstName: "",
        lastName: "",
        payRate: "",
        payRates: {
            idPayRate: "",
            payRateName: "",
            value: "",
            taxPercentage: "",
            payType: "",
            payAmount: "",
            ptLevelC: "",
        },
        vacationDays: "",
        paidToDate: "",
        paidLastYear: "",
        middleInitial: "",
        birthday: "",
        ssnP: "",
        ssnE: "",
        driversLicense: "",
        address1: "",
        address2: "",
        city: "",
        country: "",
        zip: 0,
        gender: "true",
        email: "",
        phoneNumber: "",
        maritalStatus: "Single",
        ethnicity: "",
        shareholderStatus: "false",
        benefitPlans: {
            benefitPlanId: 1,
            planName: "",
            deductable: "",
            percentageCoPay: "",
        },
        employmentCode: "",
        employmentStatus: "",
        hireDateForWorking: "",
        workersCompCode: "",
        terminationDate: "",
        rehireDateForWorking: "",
        lastReviewDate: "",
        daysWorkingPerMonth: "",
    });
    useEffect(() => {
        findById();
        findAllPayRates();
        findAllBenefitPlans();
    }, []);
    const validateSchema = {
        idEmployee: Yup.string().required(),
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        payRate: Yup.string().required(),
        vacationDays: Yup.string().required(),
        paidToDate: Yup.string().required().max(2,"không được quá 2 số"),
        paidLastYear: Yup.string().required().max(2,"không được quá 2 số"),
        middleInitial: Yup.string().required(),
        birthday: Yup.string().required(),
        ssnP: Yup.string().required(),
        ssnE: Yup.string().required().max(10,"không được quá 10 số"),
        driversLicense: Yup.string().required(),
        address1: Yup.string().required(),
        city: Yup.string().required(),
        country: Yup.string().required(),
        zip: Yup.string().required(),
        email: Yup.string().required(),
        ethnicity: Yup.string().required()
    }
    const findById = async () => {
        try {
            let temp = await axios.get("http://localhost:8080/api/personal/detail/" + id)
            const birthday = moment(temp.data.birthday).format("yyyy-MM-DDThh:mm");
            const hireDateForWorking = moment(temp.data.hireDateForWorking).format("yyyy-MM-DDThh:mm");
            const terminationDate = moment(temp.data.terminationDate).format("yyyy-MM-DDThh:mm");
            const rehireDateForWorking = moment(temp.data.rehireDateForWorking).format("yyyy-MM-DDThh:mm");
            const lastReviewDate = moment(temp.data.lastReviewDate).format("yyyy-MM-DDThh:mm");
            setEmployee({...temp.data, lastReviewDate: lastReviewDate, rehireDateForWorking: rehireDateForWorking,
                terminationDate: terminationDate, hireDateForWorking: hireDateForWorking, birthday: birthday,
                payRates: JSON.stringify(temp.data.payRates),
                benefitPlans: JSON.stringify(temp.data.benefitPlans)})
        }catch (e){
            console.log(e);
        }
    }
    const findAllPayRates = async () => {
        try {
            let temp = await axios.get("http://localhost:8080/api/payRates/list");
            const arr = temp.data.map((item) => {
                return JSON.stringify(item)
            })
            setPayRates(arr);
            console.log(arr)
        }catch (e){
            console.log(e);
        }
    }
    const findAllBenefitPlans = async () => {
        try {
            let temp = await axios.get("http://localhost:8080/api/benefitPlans/list");
            const arr = temp.data.map((item) => {
                return JSON.stringify(item)
            })
            setBenefitPlans(arr);
            console.log(arr)
        }catch (e){
            console.log(e);
        }
    }
    const handleUpdate = async (values) => {
        try {
            await axios.put("http://localhost:8080/api/personal/update/" + values.id, values);
            setTimeout(() => {
                window.location.href = "/employee";
            }, 2500);
            toast("Update employee successful!",{
                position: "top-center",
                autoClose: 2000
            })
        }catch (e){
            console.log(e);
        }
    }
    if(!payRates || !benefitPlans) return null;

    console.log(employee)

    return employee.firstName !== "" ? (
        <div>
            <h1>Update employee</h1>
            <Formik initialValues={employee} onSubmit={(values,{setSubmitting}) => {
                setSubmitting(false);
                console.log(values);
                const obj = {
                    ...values, payRates: JSON.parse(values.payRates), benefitPlans: JSON.parse(values.benefitPlans)
                }
                console.log(obj)
                handleUpdate(obj);
            }} validationSchema={Yup.object(validateSchema)}>
                {
                    ({isSubmitting}) => (
                        <Form className="grid grid-cols-3 gap-x-10 items-center ">
                            <div className="mb-3">
                                <label className="form-label">idEmployee</label>
                                <Field type="number" className="form-control" name="idEmployee" placeholder="idEmployee"/>
                                <ErrorMessage name="idEmployee" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">firstName</label>
                                <Field type="text" className="form-control" name="firstName"/>
                                <ErrorMessage name="firstName" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mb-3 ">
                                <label className="form-label">middleInitial</label>
                                <Field type="text" className="form-control" name="middleInitial"/>
                                <ErrorMessage name="middleInitial" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">lastName</label>
                                <Field type="text" className="form-control" name="lastName"/>
                                <ErrorMessage name="lastName" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">payRate</label>
                                <Field type="text" className="form-control" name="payRate"/>
                                <ErrorMessage name="payRate" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">vacationDays</label>
                                <Field type="number" className="form-control" name="vacationDays"/>
                                <ErrorMessage name="vacationDays" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">paidToDate</label>
                                <Field type="number" className="form-control" name="paidToDate"/>
                                <ErrorMessage name="paidToDate" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">paidLastYear</label>
                                <Field type="number" className="form-control" name="paidLastYear"/>
                                <ErrorMessage name="paidLastYear" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">birthday</label>
                                <Field type="datetime-local" className="form-control" name="birthday"/>
                                <ErrorMessage name="birthday" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">ssnP</label>
                                <Field type="text" className="form-control" name="ssnP"/>
                                <ErrorMessage name="ssnP" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">ssnE</label>
                                <Field type="number" className="form-control" name="ssnE"/>
                                <ErrorMessage name="ssnE" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">driversLicense</label>
                                <Field type="text" className="form-control" name="driversLicense"/>
                                <ErrorMessage name="driversLicense" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">address1</label>
                                <Field type="text" className="form-control" name="address1"/>
                                <ErrorMessage name="address1" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">address2</label>
                                <Field type="text" className="form-control" name="address2"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">city</label>
                                <Field type="text" className="form-control" name="city"/>
                                <ErrorMessage name="city" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">country</label>
                                <Field type="text" className="form-control" name="country"/>
                                <ErrorMessage name="country" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">zip</label>
                                <Field type="number" className="form-control" name="zip"/>
                                <ErrorMessage name="zip" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Gender</label><br />
                                <label>
                                    <Field type="radio" name="gender" value="true" checked={employee.gender === true}/>
                                    Male
                                </label>
                                <label style={{ marginLeft: '10px' }}>
                                    <Field type="radio" name="gender" value="false" checked={employee.gender === false}/>
                                    Female
                                </label>
                                <ErrorMessage name="gender" component="span" style={{ color: "red" }} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">email</label>
                                <Field type="text" className="form-control" name="email"/>
                                <ErrorMessage name="email" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">phone number</label>
                                <Field type="text" className="form-control" name="phoneNumber"/>
                                <ErrorMessage name="phoneNumber" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Marital Status</label>
                                <Field as="select" className="form-select" name="maritalStatus">
                                    <option value="Single">Single</option>
                                    <option value="Couple">Couple</option>
                                </Field>
                                <ErrorMessage name="maritalStatus" component="span" style={{ color: "red" }} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">ethnicity</label>
                                <Field type="text" className="form-control" name="ethnicity"/>
                                <ErrorMessage name="ethnicity" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">shareholderStatus</label><br />
                                <label>
                                    <Field type="radio" name="shareholderStatus" value="true" checked={employee.shareholderStatus === true}/>
                                    Yes
                                </label>
                                <label style={{ marginLeft: '10px' }}>
                                    <Field type="radio" name="shareholderStatus" value="false" checked={employee.shareholderStatus === false}/>
                                    No
                                </label>
                                <ErrorMessage name="gender" component="span" style={{ color: "red" }} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">payRates</label>
                                <Field as="select" className="form-select" name="payRates">
                                    {payRates?.map((item) => (
                                        <option key={JSON.parse(item).idPayRate} value={item}>
                                            {JSON.parse(item).payRateName}
                                        </option>
                                    ))}
                                </Field>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">benefitPlans</label>
                                <Field as="select" className="form-select" name="benefitPlans">
                                    {benefitPlans?.map((item) => (
                                        <option key={JSON.parse(item).benefitPlanId} value={item}>
                                            {JSON.parse(item).planName}
                                        </option>
                                    ))}
                                </Field>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">employmentCode</label>
                                <Field type="text" className="form-control" name="employmentCode"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">employmentStatus</label>
                                <Field type="text" className="form-control" name="employmentStatus"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">hireDateForWorking</label>
                                <Field type="datetime-local" className="form-control" name="hireDateForWorking"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">workersCompCode</label>
                                <Field type="text" className="form-control" name="workersCompCode"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">terminationDate</label>
                                <Field type="datetime-local" className="form-control" name="terminationDate"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">rehireDateForWorking</label>
                                <Field type="datetime-local" className="form-control" name="rehireDateForWorking"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">lastReviewDate</label>
                                <Field type="datetime-local" className="form-control" name="lastReviewDate"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">daysWorkingPerMonth</label>
                                <Field type="number" className="form-control" name="daysWorkingPerMonth"/>
                                <ErrorMessage name="daysWorkingPerMonth" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>

                            {
                                isSubmitting ? <></> : <button type="submit" className="btn btn-primary">update</button>
                            }
                        </Form>
                    )
                }
            </Formik>
        </div>
    ) : ""
}
export default UpdateEmployee;