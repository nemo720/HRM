import TableVacationDays from "./TableVacationDays.jsx";

export const VacationDays = () => {
    return (
        <div className="w-full h-full bg-gray-400 flex ">
            <div className="w-full h-full flex-col ">
                <div className="w-full h-1/6 realtive flex box-border">
                    <div className=" w-auto h-full  content-center ">
                        <h1 className="w-auto h-auto leading-5 font-bold text-4xl p-3 px-7">
                            Vacation Days
                        </h1>
                    </div>
                </div>
                <TableVacationDays />
            </div>
        </div>
    );
};