import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const SignUp = () => {
  const {signUpUser, updateUser} = useContext(AuthContext);

    const {register,formState: { errors },handleSubmit } = useForm();

    const handleSignUp = (data) =>{
      signUpUser(data.email, data.password)
      .then(result =>{
        const user = result.user;
        const userInfo = {
          displayName: data.name
        }
        updateUser(userInfo)
        .then(()=>{})
        .catch(err =>console.error(err))
      })
      .catch(err =>{
        console.error(err);
      })

    }

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
              {errors.password && (
                <p className="text-red-400">{errors.password.message}</p>
              )}
            </div>
            <input
              className="btn btn-info my-3 w-full"
              value="Sign Up"
              type="submit"
            />
            {/* {signUpError && <p className="text-red-400">{signUpError}</p>} */}
          </form>
          <p>
            Already have an account? Please <Link className="text-orange-600" to="/login"> Log in</Link>
          </p>
          <div className="divider">OR</div>
          <button className="btn btn-outline w-full">
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
