"use client";
import WithAuth from "@/hocs/withAuth";
import UserContext from "@/providers/userContext";
import { useContext, useEffect, useState } from "react";

function Profile() {
  const context = useContext(UserContext);
  const [user, setUser] = useState({
    id: "" as any,
    username: "" as any,
    email: "" as any,
  });

  useEffect(() => {
    setUser({ ...context });
  }, [context]);

  return (
    <div className="flex flex-col h-full">
      <>Profile ID: {user.id}</>
      <div>Name : {user.username}</div>
      <div>Email: {user.email}</div>
    </div>
  );
}

export default WithAuth(Profile);
