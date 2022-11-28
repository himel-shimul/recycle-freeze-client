import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyer = () => {

    const { data: buyers, isLoading, refetch } = useQuery({
        queryKey: ["sellers"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/buyers", {
            });
            const data = await res.json();
            return data;
        },
      });
      const handleDeleteBuyer = id =>{
        fetch(`http://localhost:5000/buyers/${id}`,{
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
        buyers?.map(buyer => <tr key={buyer._id}>
            <th></th>
            <td>{buyer.name}</td>
            <td>{buyer.email}</td>
            <td><button onClick={() => handleDeleteBuyer(buyer._id)} className='btn btn-sm btn-warning btn-outline'>Delete</button></td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllBuyer;