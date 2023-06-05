import React, { useState } from "react";
import Signin from "./signin";
import Reset from "./reset";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <div className="container">
      {!index ? <Signin /> : <Reset />}
      <p onClick={toggleIndex}>
        {!index ? <button>Reset Password</button>: "Already change the password?"}

      </p>
    </div>
  );
};

export default Auth;
