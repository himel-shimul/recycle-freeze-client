import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const AllUsers = () => {
    // const {data: users = []} = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () =>{
    //         const res = await fetch('https://recycle-freeze-server-himel-shimul.vercel.app/users')
    //         const data =await res.json();
    //         return data;
    //     }

    // })

    const {users} = useContext(AuthContext);
    console.log(users);
    return (
        <div>
            <h2 className="text-3xl">all buyers</h2>
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
        users.map((user, i) => <tr key={user._id}>
            <th></th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><button className='btn btn-warning'>Delete</button></td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;