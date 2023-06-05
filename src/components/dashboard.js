import React from "react";
import { useUserContext } from "../context/userContext";

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();
  return (
    <div>
      <h1>Change Password </h1>
      <h2>This Email is register for voting : {user.email}</h2>
      <p>Now go to the E-voting website for register yourself by using your own metamask address and vote for the candidate you choose</p>
      <p>Thanks For Reading...</p>
      <button onClick={logoutUser}>Log out</button>
    </div>
  );
};

export default Dashboard;
