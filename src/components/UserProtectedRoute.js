import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserProtectedRoute = (props) => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const role = localStorage.getItem("role");

  useEffect(() => {
    if (!isLoggedIn || role !== "USER") {
      navigate("/login");
    }
  }, [isLoggedIn, role, navigate]);

  return <React.Fragment>{props.children}</React.Fragment>;
};

export default UserProtectedRoute;
