import React from "react";
import { useEffect } from "react";

export default function LoginPage() {
  useEffect(() => {
    // Define the 'otpless' function
    window.otpless = (otplessUser) => {
      // Retrieve the user's details after successful login
      const waName = otplessUser.waName;
      const waNumber = otplessUser.waNumber;

      // Handle the signup/signin process
      // ...
    };
  }, []);

  return <div>Login</div>;
}
