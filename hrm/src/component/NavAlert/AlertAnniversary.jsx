import AnniversaryList from "@/component/NavAlert/AnniversaryList.jsx";

export const AlertAnniversary = () => {

    return (
        <div className="w-full h-full bg-gray-50 flex ">
            <div className="w-full h-full flex-col ">
                <div className="w-full h-1/6 realtive flex box-border">
                    <div className=" w-auto h-full  content-center ">
                        <h1 className="w-auto h-auto leading-5 font-bold text-4xl p-3 px-7">
                            Alert Anniversary
                        </h1>
                    </div>
                </div>
                <AnniversaryList/>
            </div>
        </div>
    );
};