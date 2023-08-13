import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toastError, toastSuccess } from "../components/UI/Toast";
import { useNavigate } from "react-router-dom";
import { server } from "../main";
// import { BiLoaderCircle } from "react-icons/bi";

import AuthForm from "../components/UI/AuthForm";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secret, setSecret] = useState("");
  const [loading, setLoading] = useState(false);
  console.log("data", name, email, password, secret);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, email, password, secret);
    setLoading(true);
    axios
      .post(`${server}/api/register`, {
        name: name,
        email: email,
        password: password,
        secret: secret,
      })
      .then((res) => {
        setLoading(false);
        toastSuccess(res.data.message);
        navigate("/login");
        console.log(res.data.message);
      })
      .catch((err) => {
        setLoading(false);
        toastError(err.response.data);
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
        <AuthForm
          name={name}
          email={email}
          password={password}
          secret={secret}
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          setSecret={setSecret}
          loading={loading}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
};

export default Register;
