"use client";
import React, { useState } from "react";
import { IoLogInOutline } from "react-icons/io5";
import Image from "next/image";
import { useFormik } from "formik";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const LoginComponent = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values: {email: string, password: string}) => {
      const errors = {
        email: "",
        password: "",
      };
      if (!values.email) {
        errors.email = "Email Required";
      }
      if (!values.password) {
        errors.password = "Password Required";
      }
      return errors.email || errors.password ? errors : {};
    },
    onSubmit: (values: {email: string, password: string}) => {
      console.log(values);
    },
  });
  return (
    <div className="max-w-lg mx-auto bg-gray-50 p-8 rounded-xl shadow shadow-slate-300 md:mt-28">
      <div className="flex justify-center items-center flex-col gap-4 mb-4">
        <h1 className="text-4xl font-medium">Login</h1>
        <p className="text-slate-500">Hi, Welcome back to</p>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="https://res.cloudinary.com/dagmm478n/image/upload/v1701852568/mercury-cms/mercury-logo_eyfwy6.png"
          alt="logo"
          width={150}
          height={40}
        />
      </div>

      <form className="my-10" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col space-y-5">
          <label htmlFor="email">
            <p className="font-medium text-slate-700 pb-2">Email address</p>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Enter email address"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <div className="text-red-600">
              {formik.errors.email ? formik.errors.email : null}
            </div>
          </label>
          <label htmlFor="password">
            <p className="font-medium text-slate-700 pb-2">Password</p>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={passwordVisible ? "text" : "password"}
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow pr-10"
                placeholder="Enter your password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <span
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
            <div className="text-red-600">
              {formik.errors.password ? formik.errors.password : null}
            </div>
          </label>
          <button
            className="w-full py-3 font-medium text-white bg-[#0075e5] hover:bg-[#0075e5] rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
            type="submit"
          >
            <span>Login</span>
            <span>
              <IoLogInOutline className="w-6 h-6" />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
