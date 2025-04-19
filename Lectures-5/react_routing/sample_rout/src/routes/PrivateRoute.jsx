import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  const isAuthenticated = true; // or flase =>to authenticate the page or not
  return isAuthenticated;
};

const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};
export default PrivateRoute;
