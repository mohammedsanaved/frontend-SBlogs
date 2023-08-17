import { useEffect, useState, useContext } from "react";

import axios from "axios";

// import { SyncOutlined } from "@ant-design/icons";
import { UserContext } from "../../context/index";
import { useNavigate } from "react-router-dom";
import { server } from "../../main";
import Loader from "../UI/Loader";

const UserRoute = ({ children }) => {
  const [ok, setOk] = useState(false);
  const navigate = useNavigate();
  const [state] = useContext(UserContext);

  useEffect(() => {
    if (state && state.token) getCurrentUser();
  }, [state, state.token]);

  useEffect(() => {
    if (state === null) {
      setTimeout(() => {
        getCurrentUser();
      }, 1000);
    }
  }, [state]); // Trigger when state changes

  const getCurrentUser = async () => {
    try {
      const { data } = await axios.get(`${server}/api/current-user`, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });
      console.log({ data });
      if (data.ok) setOk(true);
    } catch (err) {
      console.warn(err);
      setOk(false); // Reset the ok state on error
    }
  };

  return ok ? (
    <Loader className="d-flex justify-content-center display-1 text-primary p-5" />
  ) : (
    <> {children}</>
  );
};

export default UserRoute;
