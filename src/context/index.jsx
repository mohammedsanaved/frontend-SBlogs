import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    user: {},
    token: "",
  });
  console.log(state);

  useEffect(() => {
    const storedAuth = JSON.parse(window.localStorage.getItem("auth"));
    if (storedAuth) {
      setState(storedAuth);
    }
  }, []);

  useEffect(() => {
    const token = state && state.token ? state.token : "";
    if (token) {
      axios.defaults.baseURL = process.env.API;
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);
  // With this change, the Axios default headers will be set only if the state.token property is truthy, which means it's not null or undefined. This should resolve the error you were encountering.

  // axios.interceptors.response.use(
  //   function (response) {
  //     return response;
  //   },
  //   function (error) {
  //     const res = error.response;
  //     if (res.status === 401 && !res.config.__isRetryRequest) {
  //       setState((prevState) => ({
  //         ...prevState,
  //         user: {},
  //         token: "",
  //       }));
  //       window.localStorage.removeItem("auth");
  //     }
  //     return Promise.reject(error);
  //   }
  // );

  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
