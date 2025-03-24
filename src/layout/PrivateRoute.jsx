import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  
  const tokenFromRedux = useSelector((state) => state.user.token);
  console.log(tokenFromRedux);
//   const token = tokenFromRedux || localStorage.getItem("token");

  return tokenFromRedux ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default PrivateRoute;
