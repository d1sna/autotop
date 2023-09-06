import { useEffect, useState } from "react";

export function SignInHeaders({ setIsSignUp, isSignUp }) {
  useEffect(() => {}, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="uppercase mb-5 font-bold text-red-500 text-2xl">
        autotop.ge
      </div>
      <div className="flex flex-row">
        <div className="mx-3">
          <div onClick={() => setIsSignUp(false)}>
            <h2
              className={`hover:cursor-pointer text-sm p-2 ${
                !isSignUp && `text-white rounded-lg bg-red-500`
              }`}
            >
              Authorization
            </h2>
          </div>
        </div>
        <div className="mx-3">
          <div onClick={() => setIsSignUp(true)}>
            <h2
              className={`hover:cursor-pointer text-sm  p-2 ${
                isSignUp && `text-white rounded-lg bg-red-500`
              }`}
            >
              Registration
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
