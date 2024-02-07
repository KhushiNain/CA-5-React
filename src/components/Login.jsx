import { useState } from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Flower from "../assets/flower.png";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const [field, setField] = useState();
  const navigate = useNavigate();
  const submitData = (data) => {
    setField(data);
    console.log(data);
    navigate("/");
  };

  return (
    <div className="form-body flex">
      <form action="" onSubmit={handleSubmit(submitData)} className="flex">
        <img src={Flower} alt="" />
        <div className="login-text">
          <h1>Create Account</h1>
          <input
            id="first-name"
            type="text"
            className="field"
            placeholder="Your Name"
            {...register("firstName", { required: "Enter your name" })}
          />
          <p className="error">{errors.firstName?.message}</p>

          <input
            id="emial"
            type="text"
            className="field"
            placeholder="Your Email"
            {...register("email", {
              required: "Enter your email",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
          />
          <p className="error">{errors.email?.message}</p>

          <input
            id="password"
            type="password"
            className="field"
            placeholder="Password"
            ref={register}
            {...register("password", {
              required: "Enter your password",
              minLength: {
                value: 4,
                message: "Password must be more than 4 characters.",
              },
              maxLength: {
                value: 20,
                message: "Password can't be more than 20 characters.",
              },
            })}
          />
          <p className="error">{errors.password?.message}</p>

          <input
            id="repeat-password"
            type="password"
            className="field"
            placeholder="Repeat Your Password "
            {...register("repeatPassword", {
              required: "Confirm your password",
              validate: {
                repeatPasswordEqual: (value) =>
                  value === getValues().password || "Password Dont Match",
              },
            })}
          />
          <p className="error">{errors.repeatPassword?.message}</p>
          <p className="agree-stat">
            I agree all statement in Terms of service
          </p>

          <input type="submit" value="Sign Up" className="sumbit-btn"></input>
        </div>
      </form>
    </div>
  );
}

export default Login;
