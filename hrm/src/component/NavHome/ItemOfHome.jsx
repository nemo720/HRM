import { Link } from "react-router-dom";


/*title đặt tên j cx được, còn children bắt buộc là children: là tất cả những thứ nằm trong khối trả về
 */

const ItemOfHome = ({ href, title, children }) => {
  return (
    <Link
      to={href}
      className="bg-white rounded-2xl p-4 flex-1 border border-gray-200 flex items-center w-1/3 h-2/3 shadow-md shadow-gray-400 "
    >
      <div className="w-1/3 h-auto content-center justify-center justify-items-center  ">{children}</div>
      <p className=" w-2/3 h-auto text-wrap  font-semibold text-[20px] content-center ">{title}</p>
      <span className="w-full h-auto"></span>
    </Link>
  );
};

export default ItemOfHome;
