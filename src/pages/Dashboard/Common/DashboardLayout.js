import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { navItem } from "../../Common/NavItem";
import { user } from "../../../Route/Utils";

const DashboardLayout = () => {
  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="user-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet />
        </div>
        <div className="drawer-side bg-sky-100">
          <label htmlFor="user-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              {navItem.map(
                (n, i) =>
                  n.role === user.role && (
                    <NavLink
                      className={(navInfo) =>
                        navInfo.isActive
                          ? "mb-1 p-2 w-full bg-blue-500 text-white block rounded-lg"
                          : "mb-1 p-2 w-full hover:bg-blue-500 hover:text-white block rounded-lg"
                      }
                      key={i}
                      to={n.link}
                    >
                      {n.title}
                    </NavLink>
                  )
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
