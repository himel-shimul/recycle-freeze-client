import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Login = () => {
  const {signIn, googleSignIn} = useContext(AuthContext);
  const [err, setErr] = useState('');
  const { register,formState: { errors }, handleSubmit } = useForm();
//   const [data, setData] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  const handleLogin = data =>{
    setErr('');
    signIn(data.email, data.password)
    .then(res =>{
      const user = res.user;
      console.log(user);
      navigate(from, {replace: true})
    })
    .catch(err =>{
      console.error(err);
      setErr(err.message);
    })
  }
  const handleGoogleSignIn = () =>{
    googleSignIn()
    .then(result => {
      const user = result.user;
      console.log(user);
      saveUser(user.displayName, user.email, 'buyer');
      // navigate(from, {replace: true})
    })
    .catch(err => {
      console.error(err.message)
      setErr(err.message)
    })
  }
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
      // getUserToken(email)
      // setCreatedUserEmail(email);
      console.log("saveuser", data);
      navigate('/');
    })
};

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="border bg-base-100 shadow-xl p-6 rounded">
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
            {errors.email && <p className="text-red-600" role='alert'>{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: 'password must be 6 character or longer'}
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && <p className="text-red-600" role='alert'>{errors.password?.message}</p>}
            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
          </div>
          <input className="btn btn-info my-2 w-full" value='login' type="submit" />
        </form>
        {
          err && <p className="text-red-600">{err}</p>
        }
        <p>If you new, then please <Link className="text-orange-600" to='/signup'>Create new account</Link></p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignIn} className="btn btn-success btn-outline w-full">SIGN IN WITH GOOGLE</button>

      </div>
    </div>
  );
};

export default Login;
