import React from "react";

const AuthModal = ({ type, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 text-xl font-bold">&times;</button>
        <h2 className="text-2xl font-semibold text-center text-[#3C4852] mb-4">
          {type === "login" ? "Login" : "Join for Free"}
        </h2>
        <form className="flex flex-col gap-y-4">
          {type === "join" && (
            <input
              type="text"
              placeholder="Enter your name"
              className="h-12 px-4 border border-gray-300 rounded-md"
            />
          )}
          <input
            type="tel"
            placeholder="Enter your mobile number"
            className="h-12 px-4 border border-gray-300 rounded-md"
          />
          <span className="text-sm text-gray-500">
            We’ll send an OTP for verification
          </span>
          <button type="submit" className="h-12 bg-[#3C4852] text-white rounded-md font-medium">
            {type === "login" ? "Send OTP" : "Join Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
