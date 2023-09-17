import {Navigate} from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, element }) => {
  return isLoggedIn ? element : <Navigate to="/gjgjgjg" replace />
}

export default ProtectedRoute
