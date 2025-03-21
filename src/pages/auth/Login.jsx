import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import pogo from "../../assets/logo.png";
import image from "../../assets/header-img (1).png";
// import { Link } from "react-router-dom";
// import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser, setToken } from "../../service/GlobalState";
import { useLoginUserMutation } from "../../service/UseRTK";
// import { useNavigate } from "react-router-dom";


const Login = () => {
  // const [values, setValues] = useState({
  //   email: "",
  //   password: "",
  // });
  // const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setValues({ ...values, [name]: value });
  // };

  const [loginUser,{data,isLoading,isSuccess,isError,error}] = useLoginUserMutation();
  console.log(data?.message);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   loginUser(values)
   
  // };

  //  useEffect(() => {
       
      // }, [isSuccess, isError, data, dispatch, navigate, error]);
  // const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: (values) => {
      loginUser(values)
    },
  });
  useEffect(() => {
    if (isSuccess) {
      console.log("Response Data:", data); 
      console.log(data.token);
      dispatch(addUser(data.user));
      dispatch(setToken(data.token)); 
      alert("User signed up successfully");
      navigate("/userdash");
    }
    if (isError) {
      console.error("Signup Error:", error);
      alert(error?.data?.message || "Signup failed. Please try again.");
    }
  }, [isSuccess, isError, data, error, dispatch, navigate]);
  

  // const navigateBack = () => {
  //   navigate(-1);
  // };

  // const navigateToHome = () => {
  //   navigate("/");
  // };
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center bg-blue-200">
        <div className="h-[80%] w-[70%] flex justify-center items-center  bg-primary rounded-[15px] max-[769px]:w-[90%]  max-[769px]:h-[95%]  max-[769px]:bg-blue-200">
          <div className="h-[80%] w-[50%] bg-primary rounded-l-[10px] max-[769px]:hidden flex justify-center items-center flex-col py-5">
            <Link to="/">
              <div className="flex items-center ">
                <div className="  flex items-center justify-center ">
                  <img src={pogo} alt="" className="size-17  object-contain" />
                </div>
                <h1 className="text-blue-950 font-bold text-2xl">
                  <span className="text-hero ">Med</span>ARK
                </h1>
              </div>
            </Link>
            <h1 className="text-[30px] text-white font-semibold">
              Welcome Back
            </h1>
            <h3 className="w-[60%] text-center text-[16px] text-white">
              To keep connected with us, please login with your personal info
            </h3>
            <img src={image} alt="" className="w-[80%] h-[80%]" />
          </div>

          <form
            className="h-full w-[50%] bg-white p-5 flex flex-col justify-around items-center rounded-r-[10px] max-[769px]:w-[65%] max-[769px]:rounded-[10px]"
            onSubmit={formik.handleSubmit}
          >
            <Link to="/">
              <div className="flex items-center ">
                <div className="  flex items-center justify-center ">
                  <img src={pogo} alt="" className="size-17  object-contain" />
                </div>
                <h1 className="text-blue-950 font-bold text-2xl">
                  <span className="text-primary ">Med</span>ARK
                </h1>
              </div>
            </Link>
            <div className="flex justify-center items-center flex-col">
              {/* <h1 className="text-[30px] text-primary font-semibold">
                Welcome Back
              </h1> */}
              <h3 className="w-[90%] text-center text-[20px] text-primary font-semibold">
                Glad to see you Login to your account
              </h3>
            </div>
            {/* <h1 className="text-[50px] font-bold text-blue-400 max-[769px]:text-[40px] font-primary">
              LOGIN
            </h1> */}

            <div className="flex flex-col w-[90%] gap-2">
              <label htmlFor="email" className="text-[16px] font-semibold">
                Email
              </label>
              <input
              // onChange={handleChange}
                type="email"
                // name="email"
                id="email"
                className="h-10 w-full p-3 rounded-lg bg-blue-100 text-[18px] font-semibold outline-primary"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              )}
            </div>

            <div className="flex flex-col w-[90%] gap-2">
              <label htmlFor="password" className="text-[16px] font-semibold">
                Password
              </label>
              <input
           
                type="password"
                id="password"
                className="h-10 w-full p-3 rounded-lg bg-blue-100  outline-primary text-[18px] font-semibold"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-sm">{formik.errors.password}</p>
              )}
              <div className="flex flex-col w-[90%] gap-2 mt-[20px]">
                <p className="text-blue-400">Forget Password ?</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center w-full">
              <button
              disabled={isLoading}
                type="submit"
                className="h-10 w-[90%] bg-blue-400 rounded-lg text-[20px] font-semibold text-white hover:bg-primary transition"
              >
                {isLoading ? "Loading..." : "Submit"}
              </button>
              <p className="text-[16px] font-semibold">
                Dont have an account?{" "}
                <Link to="/signup">
                  <span className="text-blue-400 cursor-pointer text-[18px]">Sign Up</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
