import TableEmployee from "./NavEmployee/TableEmployee.jsx";

export const Employee = () => {
    return (
        <div className="flex w-full h-full bg-gray-50 flex-col pb-3 ">
            <div className="w-full h-1/6 justify-between  flex box-border px-5">
                <div className=" w-auto h-auto content-center ">
                    <h1 className="w-auto h-auto leading-5 font-bold text-4xl p-3 px-7">
                        All Employees
                    </h1>
                </div>
            </div>
            <TableEmployee/>
        </div>
)
    ;
};