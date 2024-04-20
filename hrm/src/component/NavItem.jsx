import { Link } from "react-router-dom";

/*title đặt tên j cx được, còn children bắt buộc là children: là tất cả những thứ nằm trong khối trả về
 */
const NavItem = ({ href, title, children }) => {
  return (
    <Link
      to={href}
      className=" w-[80%] h-[40px] mt-6 mb-6 flex gap-3 items-center space-x-1 hover:border-2 "
    >
      <div className="">{children}</div>
      <p className="w-auto h-full inline-block font-semibold text-[23px]">
        {title}
      </p>
    </Link>
  );
};

export default NavItem;
