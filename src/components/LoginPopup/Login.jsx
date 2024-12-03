import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaLinkedinIn } from "react-icons/fa";

const Login = ({ handleSignIn }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className={"p-6"}>
        <h1 className="text-3xl text-white font-bold text-center mb-4 text-shadow">
          Login
        </h1>
        <form className="flex flex-col gap-3">
          <div>
            <label htmlFor="username" className="input-label">
            Nama Pengguna
            </label>
            <input id="username" type="text" placeholder="Masukkan nama pengguna" className="input" />
          </div>
          <div>
            <label htmlFor="password" className="input-label">
            Kata Sandi
            </label>
            <div className="relative">
              <input
                className="input pr-8"
                id="password"
                type={showPassword ? "text" : "password"} placeholder="Masukkan kata sandi"
              />

              {showPassword ? (
                <FaEye
                  className="text-white absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer "
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FaEyeSlash
                  className="text-white absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer "
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
          </div>
        </form>
        <button className="primary-btn">Kirim</button>
        <p className="text-center text-white text-sm my-3">atau login dengan</p>
        <div className="flex gap-6 justify-center">
          <div className="bg-white w-9 h-9 rounded-full flex items-center justify-center shadow-custom-inset hover:scale-110 transition-all duration-300">
            <FcGoogle className="text-3xl" />
          </div>
          <div className="bg-blue-600 w-9 h-9 rounded-full flex items-center justify-center shadow-custom-inset hover:scale-110 transition-all duration-300">
            <FaLinkedinIn className="text-2xl text-white" />
          </div>
        </div>
        <p
          className="text-center text-white text-sm my-3 hover:text-lime-100 cursor-pointer text-shadow"
          onClick={handleSignIn}
        >
          Tidak Ada Akun? buat Daftar di sini
        </p>
      </div>
    </>
  );
};

export default Login;