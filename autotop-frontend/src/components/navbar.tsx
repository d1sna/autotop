"use client";
import Link from "next/link";
// import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import { useContext, useEffect, useState } from "react";
import Dialog from "./dialog";
import AuthorizationForm from "./authorization";
import axios from "axios";
import Router from "next/router";
import Image from "next/image";
import { autotop_pic } from "../../public";
import { toast } from "react-toastify";
import UserContext from "@/providers/userContext";

interface NavbarProps {}

function Navbar({}: NavbarProps) {
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const context = useContext(UserContext);
  const [username, setUsername] = useState(null as any);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setUsername(context.username);
  }, [context.username]);

  useEffect(() => {
    context.setToken();
    const token = context.accessToken;
    const fetchUser = () => {
      setIsLoading(true);
      axios
        .get("http://localhost:3210/api/auth/identify", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          context.setUser({
            email: res.data?.email,
            username: res.data?.fullName,
            id: res.data?.userId,
          });
          setUsername(res.data?.fullName);
        })
        .catch((e) => {
          context.clearUser();
          localStorage.removeItem("token");
          toast.error("Session expired, pls sign in again...");
        })
        .finally(() => setIsLoading(false));
    };
    if (token) fetchUser();
  }, [context]);

  return (
    <nav
      id="navbar"
      className="navbar top-0 left-0 flex justify-between px-3 items-center border-b border-black-300 w-full shadow-md h-16"
    >
      <div className="flex items-center">
        <Link href="/" className="hidden sm:flex">
          <Image src={autotop_pic} alt="" width={100} height={100} />
        </Link>
        <Link
          href="/"
          className="uppercase my-2 font-bold ml-4 text-red-500 text-2xl"
        >
          autotop.ge
        </Link>
      </div>

      <div className="flex text-xs justify-center items-center ">
        <Dialog
          isDialogOpen={loginDialogOpen}
          setIsDialogOpen={setLoginDialogOpen}
          content={<AuthorizationForm />}
        />
        <button
          className="uppercase text-sm bg-red-500 p-2 rounded-md text-white sm:flex justify-center items-center mr-2 hidden"
          onClick={() => {
            if (context.username) {
              Router.push("/car/create-new");
              return;
            }
            setLoginDialogOpen(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          sell my car
        </button>

        <button className="uppercase mr-4 p-1">
          {isLoading ? (
            <div>loading...</div>
          ) : !!username ? (
            <div
              className="flex justify-center items-center"
              onClick={() => Router.push(`/profile/${context.id}`)}
            >
              <div className="mr-2 ">{context.username}</div>
              <Avatar sx={{ width: 32, height: 32 }} />
            </div>
          ) : (
            <div
              className="uppercase text-sm ring-1 p-2 rounded-md "
              onClick={() => setLoginDialogOpen(true)}
            >
              sign in
            </div>
          )}
        </button>
      </div>
    </nav>
  );
}

Navbar.prototype = {
  setSideBarOpen: () => {},
};

export default Navbar;
