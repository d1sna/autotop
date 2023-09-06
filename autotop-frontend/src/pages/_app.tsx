import "@/styles/globals.css";

import UserContext from "@/providers/userContext";
import { userStore } from "@/store/userStore";

import { observer } from "mobx-react-lite";
import type { AppProps } from "next/app";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { CookiesProvider } from "react-cookie";

const contextClass = {
  success: "bg-blue-400",
  error: "bg-red-400",
  info: "bg-gray-400",
  warning: "bg-orange-400",
  default: "bg-indigo-400",
  dark: "bg-white-400 font-gray-300",
};

export default observer(function App({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <UserContext.Provider value={userStore}>
        <ToastContainer
          autoClose={2500}
          newestOnTop
          hideProgressBar
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          // @ts-ignore
          toastClassName={({ type }) =>
            // @ts-ignore
            contextClass[type || "default"] +
            " relative flex p-5 min-h-10 justify-between items-center shadow-md overflow-hidden cursor-pointer rounded-2xl my-1 z-50"
          }
          bodyClassName={() => "font-mono text-sm flex p-1"}
          position="bottom-right"
        />
        <div className="flex justify-center items-center flex-col w-full h-full">
          <Navbar />
          <div className="flex content mt-2 w-full h-full justify-center items-center main_font">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </UserContext.Provider>
    </CookiesProvider>
  );
});
