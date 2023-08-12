import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toastError, toastSuccess } from "../components/UI/Toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secret, setSecret] = useState("");
  console.log("data", name, email, password, secret);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, email, password, secret);
    axios
      .post(`process.env.API/api/register`, {
        name: name,
        email: email,
        password: password,
        secret: secret,
      })
      .then((res) => {
        toastSuccess(res.data.message);
        navigate("/login");
        console.log(res.data.message);
      })
      .catch((err) => {
        toastError(err.message);
        console.log(err);
      });
    setName("");
    setEmail("");
    setPassword("");
    setSecret("");
  };

  return (
    <>
      <div className="max-w-7xl flex flex-col mx-auto px-5 py-24 md:flex-row items-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 md:items-start md:text-left mb-32 items-center text-center">
          <h1 className="mb-1 sm:text-4xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
            Create and account its Free!!!!
          </h1>
          <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
            <strong>SBLOG</strong> is a free to use made with React.js and
            styled with Tailwind CSS
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="px-4 py-6 rounded text-black w-full">
            <input
              value={name}
              onChange={(e) => {
                e.preventDefault();
                setName(e.target.value);
              }}
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="Name"
              placeholder="Name"
            />
            <input
              value={email}
              onChange={(e) => {
                e.preventDefault();
                setEmail(e.target.value);
              }}
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />
            <input
              value={password}
              onChange={(e) => {
                e.preventDefault();
                setPassword(e.target.value);
              }}
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <select
              name=""
              id=""
              className="block border border-grey-light w-full p-3 rounded mb-4"
            >
              <option value="">What is your Pet Name ?</option>
              <option value="">What is your Fav Color ?</option>
              <option value="">What is your Car Number Plate ?</option>
            </select>
            <input
              value={secret}
              onChange={(e) => {
                e.preventDefault();
                setSecret(e.target.value);
              }}
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="secret"
              placeholder="Type Your Answer Here"
            />
            <button
              type="submit"
              className="w-full text-center py-3 font-medium text-black hover:bg-gray-900 hover:text-white transition duration-500 ease-in-out transform bg-transparent border  bg-gray-900"
            >
              Create Account
            </button>
          </div>
          <div className="text-grey-dark mt-6">
            Already have an account?
            <Link
              className="no-underline border-b ml-3 border-blue text-blue"
              to="/login"
            >
              Login
            </Link>
            .
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
