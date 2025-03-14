import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import pogo from "../../assets/logo.png"
import image from "../../assets/header-img (1).png"

const Login = () => {
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
      console.log("Login Successful:", values);
      alert("Login Successful");
    },
  });
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center bg-blue-200">
        <div className="h-[80%] w-[70%] flex justify-center items-center bg-blue-400 rounded-[15px] max-[769px]:w-[90%]  max-[769px]:h-[95%]  max-[769px]:bg-blue-200">
          <div className="h-[80%] w-[50%] bg-blue-400 rounded-l-[10px] max-[769px]:hidden flex justify-center items-center flex-col">
           <div className='flex items-center '>
                  <div className='  flex items-center justify-center '>
                     <img src={pogo} alt=""  className='size-17  object-contain'/>
                   </div>
                   <h1 className='text-blue-950 font-bold text-2xl'><span className='text-hero '>Med</span>ARK</h1>
                  </div>
            <h1 className="text-[30px] text-white font-extrabold">
              Welcome Back
            </h1>
            <h3 className="w-[60%] text-center text-[16px] font-semibold text-white">
              To keep connected with us, please login with your personal info
            </h3>
                  <img src= {image} alt="" className="w-[80%]"/>
          </div>

          <form
            className="h-full w-[50%] bg-white p-5 flex flex-col justify-around items-center rounded-r-[10px] max-[769px]:w-[65%] max-[769px]:rounded-[10px]"
            onSubmit={formik.handleSubmit}
          >
               <div className='flex items-center '>
                  <div className='  flex items-center justify-center '>
                     <img src={Logo} alt=""  className='size-17  object-contain'/>
                   </div>
                   <h1 className='text-blue-950 font-bold text-2xl'><span className='text-primary '>Med</span>ARK</h1>
                  </div>
                <div className="flex justify-center items-center flex-col">
                <h1 className="text-[50px] text-primary font-extrabold">
              Welcome Back
            </h1>
            <h3 className="w-[90%] text-center text-[16px] font-semibold text-primary">
              Glad to see you Login to your account
            </h3>
                </div>
            {/* <h1 className="text-[50px] font-bold text-blue-400 max-[769px]:text-[40px] font-primary">
              LOGIN
            </h1> */}

            <div className="flex flex-col w-[90%] gap-2">
              <label htmlFor="email" className="text-[20px] font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="h-12 w-full p-3 rounded-lg bg-blue-200 outline-0 text-[18px] font-semibold"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              )}
            </div>

            <div className="flex flex-col w-[90%] gap-2">
              <label htmlFor="password" className="text-[20px] font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="h-12 w-full p-3 rounded-lg bg-blue-200 outline-0 text-[18px] font-semibold"
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
                type="submit"
                className="h-12 w-[90%] bg-blue-400 rounded-lg text-[20px] font-semibold text-white hover:bg-blue-600 transition"
              >
                Login
              </button>
              <p className="text-[18px] font-semibold">
                Dont have an account?{" "}
                <span className="text-blue-400 cursor-pointer">Sign Up</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
