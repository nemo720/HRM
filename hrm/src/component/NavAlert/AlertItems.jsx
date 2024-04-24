import { Link } from "react-router-dom";

/*title đặt tên j cx được, còn children bắt buộc là children: là tất cả những thứ nằm trong khối trả về
 */
const AlertItem = ({ href, title, children }) => {
    return (
        <Link
            to={href}
            className=" w-auto  h-[40px] mt-6 mb-6 rounded-md flex gap-3 items-center p-1 space-x-1 hover:border-1 hover:bg-slate-300 active:ring-1 "
        >
            <div className="w-auto h-auto">{children}</div>
            <p className=" w-auto h-full  font-semibold text-[23px]">{title}</p>
        </Link>
    );
};

export default AlertItem;
