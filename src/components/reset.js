import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";

const Reset = () => {
  const emailRef = useRef();
  const { forgotPassword } = useUserContext();


   const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };

  return (
    <div className="form">
      <h2>Change Password</h2>

      <form>
        <input placeholder="Email" type="email" ref={emailRef} />
        <button onClick={forgotPasswordHandler}>Forgot Password?</button>
      </form>
    </div>
  );
};

export default Reset;
