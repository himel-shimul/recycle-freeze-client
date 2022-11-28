import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyer = () => {

    const { data: sellers, isLoading, refetch } = useQuery({
        queryKey: ["sellers"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/sellers", {
            });
            const data = await res.json();
            return data;
        },
      });
      const handleDeleteSeller = id =>{
        fetch(`http://localhost:5000/sellers/${id}`,{
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
            <h2>seller</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        sellers?.map(seller => <tr key={seller._id}>
            <th></th>
            <td>{seller.name}</td>
            <td>{seller.email}</td>
            <td><button onClick={() => handleDeleteSeller(seller._id)} className='btn btn-sm btn-warning btn-outline'>Delete</button></td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllBuyer;