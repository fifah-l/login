import React, { useState, useRef, useEffect } from "react";
import SignIn from "./SignIn";
import Login from "./Login";
import { motion } from "framer-motion";

const LoginPopup = ({ loginPopup, handleLoginPopup }) => {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignIn = () => {
    setShowSignIn(!showSignIn);
  };

  const loginPopupRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target === loginPopupRef.current) {
      handleLoginPopup(false);
    }
  });

  return (
    <>
      {loginPopup && (
        <div
          ref={loginPopupRef}
          className="fixed top-0 left-0 w-full h-full z-50 overflow-y-auto"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[90%] sm:w-auto ">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl bg-white/10 backdrop-blur-md shadow-custom-inset sm:w-[600px] md:w-[380px] "
            >
              {showSignIn ? (
                <SignIn handleSignIn={handleSignIn} />
              ) : (
                <Login handleSignIn={handleLoginPopup} />
              )}
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPopup;