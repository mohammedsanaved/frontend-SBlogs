import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";
const ForgotPasswordForm = ({
  email,
  newPassword,
  secret,
  loading,
  handleSubmit,
  setEmail,
  setNewPassword,
  setSecret,
  page,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="px-4 py-6 rounded text-black w-full">
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
          value={newPassword}
          onChange={(e) => {
            e.preventDefault();
            setNewPassword(e.target.value);
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
          className={`w-full text-center py-3 font-medium text-black hover:bg-gray-900 hover:text-white
          transition duration-500 ease-in-out transform bg-transparent border bg-gray-900`}
          disabled={!email || !newPassword || !secret || loading}
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
            "Confirm Password"
          )}
        </button>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
