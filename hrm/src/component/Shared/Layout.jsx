import React from "react";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
        <div className="flex-1 p-4 bg-neutral-100 min-h-0 overflow-auto">
          <Outlet />
        </div>
  );
};

export default Layout;