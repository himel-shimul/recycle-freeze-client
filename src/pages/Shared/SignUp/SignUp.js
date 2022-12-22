import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import useToken from "../../../hooks/useToken";

const SignUp = () => {
  const { signUpUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const navigate = useNavigate();
  const [createdUserEmail, setCreatedUserEmail] = useState('')
  const [token] = useToken(createdUserEmail);
  if(token){
    navigate('/');
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
    signUpUser(data.email, data.password)
    .then(result =>{
      const user = result.user;
      
      toast.success('User add successfully')

      const userInfo = {
        displayName: data.name
      }
      updateUser(userInfo)
      .then(()=>{

        saveUser(data.name, data.email, data.select);
      })
      .catch(err =>console.error(err))
    })
    .catch(err =>{
      console.error(err);
      setSignUpError(err.message)
    })
    };

    const saveUser = (name, email, select) =>{
      const user = {name, email, select};
      fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        setCreatedUserEmail(email);
        console.log("save user", data);
        
      })
  };
  

  return (
    <div>
      <div className="h-[800px] flex justify-center items-center">
        <div className="w-96 p-7">
          <h2 className="text-4xl text-center">Sign Up</h2>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "name is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.name && (
                <p className="text-red-400">{errors.name.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email address is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && (
                <p className="text-red-400">{errors.email.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "password must be 6 characters on longer",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message:
                      "Password must have uppercase, number and special characters",
                  },
                })}
                className="input input-bordered w-full max-w-xs"
              />
              <select className="select select-bordered w-full my-2" {...register("select")}>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>

              {errors.password && (
                <p className="text-red-400">{errors.password.message}</p>
              )}
            </div>
            <input
              className="btn btn-info my-3 w-full"
              value="Sign Up"
              type="submit"
            />
            {signUpError && <p className="text-red-600">{signUpError}</p>}
          </form>
          <p>
            Already have an account? Please{" "}
            <Link className="text-orange-600" to="/login">
              {" "}
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
