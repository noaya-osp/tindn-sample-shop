import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("userToken") ? true : false;

  if (!isAuthenticated) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }

  return children;
}
