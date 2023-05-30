import React, { useState, useEffect } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import ShowErrorMsg from "./ShowErrorMsg";
import "../scss/login.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn) {
    navigate("/", { replace: true });
  }

  const initialValues = {
    userName: "",
    password: "",
  };

  const [errorMsg, setErrorMsg] = useState("");

  const validationSchema = Yup.object({
    userName: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();

    axios
      .post("/login", values)
      .then((response) => {
        console.log(response);
        toast.success("Login Successfull", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        const { userName, role, email, id } = response.data.userDetails;
        console.log(userName);
        localStorage.setItem("userName", userName);
        localStorage.setItem("id", id);
        localStorage.setItem("role", role);
        localStorage.setItem("email", email);
        localStorage.setItem("isLoggedIn", true);

        const userId = JSON.parse(localStorage.getItem("id"));
        console.log(typeof userId);
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 1500);
      })
      .catch((e) => {
        console.log("eroiyutyry", e.response?.data);
        // setErrorMsg(e.response?.data?.error);
        toast.error(e.response?.data?.error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div className="login-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="login-form">
          <h1 className="login-heading">Login</h1>
          <div className="login-input-element-container">
            <label htmlFor="password" className="login-input-label">
              Username
            </label>
            <Field
              type="text"
              name="userName"
              id="username"
              className="login-field"
              placeholder="Enter Username"
            />
            <ErrorMessage
              name="userName"
              className="error"
              component={ShowErrorMsg}
            />
          </div>

          <div className="login-input-element-container">
            <label htmlFor="password" className="login-input-label">
              Password
            </label>
            <Field
              type="text"
              name="password"
              id="password"
              className="login-field"
              placeholder="Enter Password"
            />
            <ErrorMessage
              name="password"
              className="error"
              component={ShowErrorMsg}
            />
          </div>
          <button type="submit" className="login-submit-btn">
            Login
          </button>
          {errorMsg && <div className="apiErrorMsg">{errorMsg}</div>}
        </Form>
      </Formik>

      <div className="login-image-container">
        <img
          className="login-image"
          src="https://www.manageengine.com/products/desktop-central/images/trouble-banner.png"
          alt="image"
        />
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default Login;
