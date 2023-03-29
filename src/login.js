import React, { useState, useEffect } from "react";

export default function LoginPage() {
  const [username, setUserName] = useState(null);
  const [number, setNumber] = useState(null);

  useEffect(() => {
    // Define the 'otpless' function
    window.otpless = (otplessUser) => {
      // Retrieve the user's details after successful login
      const waName = otplessUser.waName;
      const waNumber = otplessUser.waNumber;
      setUserName(waName);
      setNumber(waNumber);
    };
  }, []);

  return (
    <div>
      <div
        id='otpless'
        style={{
          position: "fixed",
          top: "50%",
          left: "45%",
          marginTop: -50,
          marginLeft: -100,
        }}
      ></div>
      {username != null && <h3>Name : {username}</h3>}
      {number != null && <h3>Number : {number}</h3>}
    </div>
  );
}
