import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import Loader from "../../Loader/Loader";

const MyOrders = () => {

    const {user} = useContext(AuthContext);

    const url = `https://recycle-freeze-server-himel-shimul.vercel.app/soldProducts?email=${user?.email}`;

    const {data: orders = [], isLoading} = useQuery({
        queryKey: ['soldProducts', user?.email],
        queryFn: async () =>{
            const res = await fetch(url, {
              headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
              }
            });
            const data = await res.json();
            return data;
        }
    })
    console.log(orders);

    if(isLoading){
      return <Loader></Loader>
    }

  return (
    <div>
      <h3 className="text-3xl my-6">My Orders</h3>
      <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th></th>
        <th>Title</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        orders?.map((order, i) => <tr key={i}>
            <th>
              <label>
                {i + 1}
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask  w-12 h-12">
                    <img src={order.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                </div>
              </div>
            </td>
            <td>
              {order.pd_name}
              <br/>
            </td>
            <td>${order.price}</td>
            <th>
              <button className="btn btn-primary btn-xs">pay</button>
            </th>
          </tr>)
      }
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyOrders;
