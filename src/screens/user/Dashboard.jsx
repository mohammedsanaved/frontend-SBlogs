import React, { useContext } from "react";
import { UserContext } from "../../context/index";
import UserRoute from "../../components/routes/UserRoute";

const Dashboard = () => {
  const [state] = useContext(UserContext);
  return (
    <div>
      <UserRoute>
        Dashboard
        <p>
          <img
            src="https://images.unsplash.com/photo-1682686580849-3e7f67df4015?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
            alt="dashboard"
          />
        </p>{" "}
        {JSON.stringify(state)}
      </UserRoute>
    </div>
  );
};

export default Dashboard;
