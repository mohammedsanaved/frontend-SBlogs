import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toastError, toastSuccess } from "../components/UI/Toast";
import { useNavigate } from "react-router-dom";
import { server } from "../main";
import { UserContext } from "../context/index";
// import { BiLoaderCircle } from "react-icons/bi";

import ForgotPasswordForm from "../components/UI/ForgotPasswordForm";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [secret, setSecret] = useState("");
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(`${server}/api/forgot-password`, {
        email,
        newPassword,
        secret,
      });

      if (data.error) {
        toastError(data.error);
        setLoading(false);
      }
      if (data.success) {
        setEmail("");
        setNewPassword("");
        setSecret("");
        setLoading(false);
        setOk(true);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  if (state && state.token) navigate("/");

  return (
    <>
      <div className="max-w-7xl flex flex-col mx-auto px-5 py-24 md:flex-row items-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 md:items-start md:text-left mb-32 items-center text-center">
          <h1 className="mb-1 sm:text-4xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
            ForgotPassword Here
          </h1>
          <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
            <strong>SBLOG</strong> is a free to use made with React.js and
            styled with Tailwind CSS
          </p>
        </div>
        <ForgotPasswordForm
          email={email}
          newPassword={newPassword}
          secret={secret}
          setEmail={setEmail}
          setNewPassword={setNewPassword}
          setSecret={setSecret}
          loading={loading}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
};

export default ForgotPassword;
