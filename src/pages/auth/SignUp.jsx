import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Logo from "../../assets/logo.png";
import image from "../../assets/header-img (1).png";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../../service/GlobalState";
import { useRegisterUserMutation } from "../../service/UseRTK";

const SignUp = () => {

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
  
    const [registerUser,{data,isLoading,isSuccess,isError,error}] = useRegisterUserMutation();
  
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   loginUser(values)
     
    // };
  

 

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .min(3, "Full Name must be at least 3 characters")
      .required("Full Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      registerUser(values)
    },
  });

   useEffect(() => {
  if (isSuccess) {
    dispatch(addUser(data.data));
    alert('User signUp successfully', data.message);
    navigate("/checkemail ");
  }
  if (isError) {
    console.log(error);
  }
}, [isSuccess, isError, data, error, dispatch, navigate]);

  return (
    <>
      <div className="h-screen w-[100%] flex justify-center items-center bg-blue-200 max-[769px]:w-[100%]">
        <div className="h-[80%] w-[70%] flex justify-center items-center bg-primary rounded-[15px] max-[769px]:w-[600px]  max-[769px]:h-[95%]  max-[769px]:bg-blue-200">
          <div className="h-[80%] w-[50%] bg-primary rounded-l-[10px] max-[769px]:hidden flex justify-center items-center flex-col">
            <Link to="/">
              <div className="flex items-center ">
                <div className="  flex items-center justify-center ">
                  <img src={Logo} alt="" className="size-17  object-contain" />
                </div>
                <h1 className="text-blue-950 font-bold text-2xl">
                  <span className="text-hero ">Med</span>ARK
                </h1>
              </div>
            </Link>
            <h1 className="text-[30px] text-white font-extrabold">CREATE ACCOUNT</h1>
            <h3 className="w-[60%] text-center text-[16px] font-semibold text-white">
              To keep connected with us, please Sign Up with your personal info
            </h3>
            <img src={image} alt="" className="w-[85%] h-[80%]" />
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="h-full w-[50%] bg-white p-3 flex flex-col justify-around items-center rounded-r-[10px] max-[769px]:w-[65%] max-[769px]:h-[100%] max-[769px]:rounded-[10px]"
          >
            <Link to="/">
              <div className="flex items-center ">
                <div className="  flex items-center justify-center ">
                  <img src={Logo} alt="" className="size-17  object-contain" />
                </div>
                <h1 className="text-blue-950 font-bold text-2xl">
                  <span className="text-primary ">Med</span>ARK
                </h1>
              </div>
            </Link>
            <div className="flex justify-center items-center flex-col">
              {/* <h1 className="text-[40px] text-primary">CREATE ACCOUNT</h1> */}
              <h3 className="w-[100%] text-center text-[18px] font-semibold text-primary mb-[10px]">
                Welcome Create account to join us
              </h3>
            </div>
            {/* <h1 className="text-[50px] font-medium text-blue-400 max-[769px]:text-[30px] font-serif ">
                Sign Up
              </h1> */}

            <div className="flex flex-col w-[90%] gap-2">
              <label htmlFor="name" className="text-[13px] font-semibold">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="h-10 w-full p-3 rounded-lg bg-blue-100  outline-primary text-[18px] font-semibold"
                {...formik.getFieldProps("fullName")}
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <p className="text-red-500 text-sm">{formik.errors.fullName}</p>
              )}
            </div>

            <div className="flex flex-col w-[90%] gap-2">
              <label htmlFor="email" className="text-[13px] font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="h-10 w-full p-3 rounded-lg bg-blue-100  outline-primary text-[18px] font-semibold"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              )}
            </div>

            <div className="flex flex-col w-[90%] gap-2">
              <label htmlFor="password" className="text-[13px] font-semibold">
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
            </div>

            <div className="flex flex-col items-center w-full mt-[20px]">
              <button
               disabled={isLoading}
                type="submit"
                className="h-10 w-[90%] bg-blue-400 rounded-lg text-[12px] text-white hover:bg-primary transition"
              >
                 {isLoading ? "Loading..." : "Submit"}
              </button>
              <p className="text-[12px] font-semibold mt-[10px]">
                Already have an account?{" "}
               <Link to="/auth  ">
               <span className="text-blue-400 cursor-pointer text-[12px]">
                  Login
                </span>
               </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
