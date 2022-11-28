import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";

const MyProducts = () => {
    const {user} = useContext(AuthContext);

    // useEffect( () =>{
    //     fetch(`http://localhost:5000/myProducts?email=${user?.email}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         // setReviews(data);
    //     })
    // }, [user?.email])

    const { data: products, refetch} = useQuery({
        queryKey: ['myProducts', user?.email, ],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myProducts?email=${user?.email}`)
                const data = await res.json();
                return data;
            
        }
    })
    console.log(products);
    const handleAdvertise = id =>{
      fetch(`http://localhost:5000/advertise/${id}`, {
        method: 'PUT',
      })
      .then(res => res.json())
      .then(data => {
        if(data.modifiedCount > 0){
          toast.success(' successful')
          refetch();
        }
      })
    }

    const handleDeleteDoctor = id =>{
      fetch(`http://localhost:5000/allProducts/${id}`,{
          method: 'DELETE',
      })
      .then(res => res.json())
      .then(data =>{
          console.log(data);
          if( data.deletedCount > 0){
              refetch();
              toast.success(' delete successfully')
  
          }
      })
  }


  return (
    <div>
      <h3>My Products</h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <p>Delete</p>
                </label>
              </th>
              <th>product name</th>
              <th>Price</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                products?.map(product => <tr>
                    <th>
                      <label>
                      <button onClick={() => handleDeleteDoctor(product._id)} className="btn btn-sm btn-warning btn-outline">
                          Delete
                      </button>
                      </label>
                    </th>
                    <td>
                      {product.pd_name}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        {product.seller_name}
                      </span>
                    </td>
                    <td>{product.original_price}</td>
                    <th>
                      <button onClick={() => handleAdvertise(product._id)} className="btn btn-ghost btn-xs">Available</button>
                    </th>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
