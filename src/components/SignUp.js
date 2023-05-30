import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, replace } from "formik";
import * as Yup from "yup";
import ShowErrorMsg from "./ShowErrorMsg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../scss/signUp.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    userName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("initial values", values);
    axios
      .post("/users", values)
      .then((response) => {
        console.log(response);
        toast.success("Registration successfull", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/login", { replace: true });
      })
      .catch((e) => {
        setErrorMsg(e.response?.data);
        toast.error("Registration Failed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(e);
      });
  };
  return (
    <div className="signup-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="signup-form">
          <h1 className="signup-heading">SignUp</h1>
          <div className="signup-input-element-container">
            <label htmlFor="firstName" className="signup-input-label">
              Firstname
            </label>
            <Field
              type="text"
              id="firstName"
              placeholder="Enter Firstname"
              name="firstName"
              className="signup-field"
            />
            <ErrorMessage name="firstName" component={ShowErrorMsg} />
          </div>

          <div className="signup-input-element-container">
            <label htmlFor="lastName" className="signup-input-label">
              Lastname
            </label>
            <Field
              type="text"
              id="lastName"
              placeholder="Enter Lastname"
              name="lastName"
              className="signup-field"
            />
            <ErrorMessage name="lastName" component={ShowErrorMsg} />
          </div>

          <div className="signup-input-element-container">
            <label htmlFor="email" className="signup-input-label">
              Email
            </label>
            <Field
              type="email"
              id="email"
              placeholder="Enter Email"
              name="email"
              className="signup-field"
            />
            <ErrorMessage name="email" component={ShowErrorMsg} />
          </div>

          <div className="signup-input-element-container">
            <label htmlFor="userName" className="signup-input-label">
              Username
            </label>
            <Field
              type="text"
              id="userName"
              placeholder="Enter Username"
              name="userName"
              className="signup-field"
            />
            <ErrorMessage name="userName" component={ShowErrorMsg} />
          </div>

          <div className="signup-input-element-container">
            <label htmlFor="password" className="signup-input-label">
              Password
            </label>
            <Field
              type="password"
              id="password"
              placeholder="Enter Password"
              name="password"
              className="signup-field"
            />
            <ErrorMessage name="password" component={ShowErrorMsg} />
          </div>

          <button type="submit" className="signup-submit-btn">
            Submit
          </button>
          {errorMsg && <div className="apiErrorMsg">{errorMsg}</div>}
        </Form>
      </Formik>
      <div className="signup-image-container">
        {/* <img className="signup-image" src="https://www.liquidplanner.com/wp-content/uploads/2015/02/iStock-873330508-2-1-1024x768.jpg" alt="image"/> */}

        <img
          className="signup-image"
          src="https://cynoteck.com/wp-content/uploads/2020/05/net.png"
          alt="image"
        />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default SignUp;
