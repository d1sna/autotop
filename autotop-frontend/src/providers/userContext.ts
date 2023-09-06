import { userStore } from "@/store/userStore";
import React from "react";

const UserContext = React.createContext(userStore)

export default UserContext;
