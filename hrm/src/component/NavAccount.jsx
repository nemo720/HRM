export const NavAccount = ({ title, children }) => {
  return (
    <div className=" w-auto h-[40px] m-2   flex gap-2 right-0 items-center  ">
      <div className="">{children}</div>
      <button className="w-auto h-full  font-semibold text-[23px]">
        {title}
      </button>
    </div>
  );
};
