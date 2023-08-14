import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/UI/AuthForm";
import { toastError, toastSuccess } from "../components/UI/Toast";
import axios from "axios";
import { server } from "../main";
import { UserContext } from "../context/index";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // const isButtonLoginDisabled = !email || !password;
  const [state, setState] = useState(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, email, password, secret);
    setLoading(true);
    axios
      .post(`${server}/api/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        setLoading(false);
        toastSuccess(res);
        navigate("/");
        console.log(res);
        setState({
          user: res.user,
          token: res.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
      })
      .catch((err) => {
        setLoading(false);
        toastError(err.response);
        console.log(err);
      });

    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="max-w-7xl flex flex-col mx-auto px-5 py-24 md:flex-row items-center mb-[85px]">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 md:items-start md:text-left mb-32 items-center text-center">
          <h1 className="mb-1 sm:text-4xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
            We are making Stunning Websites
          </h1>
          <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
            <strong>SBLOG</strong> is a free to use made with React.js and
            styled with Tailwind CSS
          </p>
        </div>
        <AuthForm
          email={email}
          password={password}
          handleSubmit={handleSubmit}
          setPassword={setPassword}
          setEmail={setEmail}
          loading={loading}
          // isButtonDisabled={isButtonDisabled}
          page="login"
        />
      </div>
    </>
  );
};

export default Login;
