import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useSeller from "../../hooks/useSeller";
import Navbar from "../../pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const {users, user} = useContext(AuthContext);
  const [isSeller] = useSeller(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* {
              users.map(usr => usr.select === "buyer" && usr.email === user.email && <li>
              <Link to='/dashboard'>My orders</Link>
            </li>)
            }
            {
              users.map(usr => usr.select === "seller" && usr.email === user.email && <>
              <li>
            <Link to='/dashboard/allbuyers'>Add product</Link>
            </li>
            <li>
            <Link to='/dashboard/allbuyers'>My Products</Link>
            </li>
              </>)
            } */}
            {
              isSeller || <li>
              <Link to='/dashboard'>My orders</Link>
            </li>
            }
            {
              isSeller && <>
              <li>
            <Link to='/dashboard/addproduct'>Add a product</Link>
            </li>
            <li>
            <Link to='/dashboard/myproducts'>My Products</Link>
            </li>
              </>
            }
            {/* <li>
            <Link to='/dashboard/allbuyers'>All buyers</Link>
            </li>
            <li>
            <Link to='/dashboard/allbuyers'>Add product</Link>
            </li>
            <li>
            <Link to='/dashboard/allbuyers'>My Products</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
