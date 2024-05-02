import { Link } from "react-router-dom";

/*title đặt tên j cx được, còn children bắt buộc là children: là tất cả những thứ nằm trong khối trả về
 */
const AlertItem = ({ href, title, children }) => {
  return (
    <Link
      to={href}
      className=" w-1/3  h-1/4 justify-center border-[1px] border-rose-200 mt-6 mb-6 rounded-md flex gap-3 items-center p-1 space-x-1 shadow-md shadow-gray-400
       transition ease-in-out delay-400  hover:translate-y-2 hover:scale-110 hover:border-blue-500 active:ring-1 hover:bg-slate-200
       max-md:w-1/5 max-md:h-[70px] max-md:justify-start "
    >
      <div className="rounded-full h-12 w-12 flex items-center justify-center bg-black">
        {children}
      </div>
      <p className=" w-3/5 h-full flex items-center  font-semibold text-[26px] max-md:text-[13px]">
        {title}
      </p>
    </Link>
  );
};

export default AlertItem;
