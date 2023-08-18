import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";
const AuthForm = ({
  name,
  email,
  password,
  secret,
  loading,
  handleSubmit,
  setName,
  setEmail,
  setPassword,
  setSecret,
  page,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="px-4 py-6 rounded text-black w-full">
        {page !== "login" && (
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
        )}
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
        {page !== "login" && (
          <>
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
          </>
        )}
        <button
          type="submit"
          className={`w-full text-center py-3 font-medium text-black hover:bg-gray-900 hover:text-white"
          transition duration-500 ease-in-out transform bg-transparent border bg-gray-900`}
          disabled={
            page === "login"
              ? !email || !password || loading
              : !name || !email || !password || !secret || loading
          }
        >
          {loading ? (
            <span className="flex justify-center">
              <ThreeDots
                height="25"
                width="25"
                radius="10"
                color="#000"
                ariaLabel="three-dots-loading"
                visible={true}
              />
            </span>
          ) : (
            "Create Account"
          )}
        </button>
      </div>
      {page === "login" ? (
        <>
          <div className="text-grey-dark mt-6">
            Not have an Account ?
            <Link
              className="no-underline border-b ml-3 border-blue text-blue"
              to="/register"
            >
              Register
            </Link>
          </div>
          <div>
            <span className="text-slate-800 font-bold hover:text-red-500">
              <Link to={"/forgot-password"}>Forgot Password</Link>
            </span>
          </div>
        </>
      ) : (
        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link
            className="no-underline border-b ml-3 border-blue text-blue"
            to="/login"
          >
            Login
          </Link>
        </div>
      )}
    </form>
  );
};

export default AuthForm;
