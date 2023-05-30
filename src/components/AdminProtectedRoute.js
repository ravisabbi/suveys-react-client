import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminProtectedRoute = (props) => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const role = localStorage.getItem("role");

  useEffect(() => {
    if (!isLoggedIn || role !== "ADMIN") {
      navigate("/login");
    }
  }, [isLoggedIn, role, navigate]);

  return <React.Fragment>{props.children}</React.Fragment>;
};

export default AdminProtectedRoute;
