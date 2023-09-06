"use client";
import { observer } from "mobx-react-lite";
import Router from "next/router";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "@/providers/userContext";

function WithAuth(Component: any) {
  return observer(function Wrap() {
    const [token, setToken] = useState(null as any);
    const context = useContext(UserContext);

    useEffect(() => {
      const token = localStorage.getItem("token");
      setToken(token);
      if (!token) {
        Router.push("/");
      }
    }, []);

    return !token ? null : <Component />;
  });
}

export default WithAuth;
