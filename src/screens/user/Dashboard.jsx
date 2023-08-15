import React, { useContext } from "react";
import { UserContext } from "../../context";

const Dashboard = () => {
  const [state, setState] = useContext(UserContext);
  return <div>Dashboard {JSON.stringify(state)}</div>;
};

export default Dashboard;
