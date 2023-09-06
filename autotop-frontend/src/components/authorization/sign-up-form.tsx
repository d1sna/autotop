import UserContext from "@/providers/userContext";
import Router from "next/router";
import axios from "axios";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

export function SignUpForm() {
  const userContext = useContext(UserContext);
  const [email, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  return (
    <form
      className="space-y-6 w-full flex justify-center items-center flex-col"
      action="#"
      method="POST"
    >
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="rounded-md shadow-sm -space-y-px w-full">
        <div className="w-full">
          <label htmlFor="email-address" className="sr-only">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none rounded-none
  w-full px-3 py-2 border border-gray-300
  placeholder-gray-500 text-gray-900 rounded-t-md
  focus:outline-none focus:ring-indigo-500
  focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="email"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="full-name" className="sr-only">
            Full Name
          </label>
          <input
            id="full-name"
            name="full-name"
            type="full-name"
            required
            className="appearance-none rounded-none relative block
  w-full px-3 py-2 border border-gray-300
  placeholder-gray-500 text-gray-900 
  focus:outline-none focus:ring-indigo-500
  focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Full name"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="appearance-none rounded-none relative block
  w-full px-3 py-2 border border-gray-300
  placeholder-gray-500 text-gray-900 
  focus:outline-none focus:ring-indigo-500
  focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirm-password" className="sr-only">
            Confirm password
          </label>
          <input
            id="confirm-password"
            name="confirm-password"
            type="password"
            required
            className="appearance-none rounded-none relative block
  w-full px-3 py-2 border border-gray-300
  placeholder-gray-500 text-gray-900 rounded-b-md
  focus:outline-none focus:ring-indigo-500
  focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Confirm password"
            onChange={(e) => setConfirmedPassword(e.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        className="group relative flex justify-center
py-2 px-4 border border-transparent text-sm font-medium
rounded-md text-white bg-indigo-600 hover:bg-indigo-700
focus:outline-none focus:ring-2 focus:ring-offset-2
focus:ring-indigo-500 w-full"
        onClick={async (e) => {
          try {
            e.preventDefault();
            if (!email || !password || !fullName) {
              toast.error(`Please fill every field`);
              return;
            }
            if (confirmedPassword !== password) {
              toast.error("Passwords is not compared");
              return;
            }
            const { data } = await axios.post(
              "http://localhost:3210/api/auth/sign-up",
              { email, password, fullName },
              { withCredentials: true }
            );
            toast.success(`Successful registration, now you can sign in`);
            userContext.setUser(data);
            Router.push("/");
          } catch (error) {
            toast.error("Something went wrong :(");
          }
        }}
      >
        Sign up
      </button>
    </form>
  );
}
