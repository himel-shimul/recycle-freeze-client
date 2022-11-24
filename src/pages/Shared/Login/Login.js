import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register,formState: { errors }, handleSubmit } = useForm();
//   const [data, setData] = useState("");
  const handleLogin = data =>{
    console.log(data);
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <h2 className="text-4xl text-center">Please Log in</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", {
                required: "Email is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && <p className="text-red-400" role='alert'>{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && <p className="text-red-400" role='alert'>{errors.password?.message}</p>}
            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
          </div>
          <input className="btn btn-info my-2 w-full" value='login' type="submit" />
        </form>
        <p>If you new, then please <Link className="text-secondary" to='/signup'>Create new account</Link></p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">SIGN IN WITH GOOGLE</button>

      </div>
    </div>
  );
};

export default Login;
