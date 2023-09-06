import Image from "next/image";
import { bmw_test_pic } from "../../../public";
import { Avatar } from "@mui/material";

function PostCard({ userName = "Alexandr Dis" }) {
  return (
    <a
      href="/car/1"
      className="flex hover:rounded-md p-3 hover:shadow-md hover:text-red-500 border-y border-gray-100 w-full md:w-7/12 mx-2 my-1"
      target="_blank"
    >
      <div className="m-1 p-2 w-2/6 sm:w-/6 md:w-2/6 sm:text-xs relative text-black">
        <Image
          src={bmw_test_pic}
          alt=""
          fill
          className="rounded-md"
          style={{ objectFit: "cover", maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>

      <div className="flex flex-col w-2/6 sm:w-full scale-75 sm:scale-100">
        <div className="ml-1 flex w-full">
          <div className="flex flex-col justify-between border-red-500 w-full m-1 px-1">
            <div className="font-bold underline uppercase">BMW X6</div>
            <div className="text-slate-400 text-sm">1.7 l/80 hp/ Petrol</div>
            <div className="text-slate-400 text-sm">Manual transmission</div>
            <div className="text-slate-400 text-sm">Crossover</div>
          </div>

          <div className="flex justify-between border-green-500 w-full m-1 px-1 text-black">
            <div className="font-bold h-1/3 p-1 rounded-md">15 000 $</div>
          </div>

          <div className="flex flex-col justify-start border-yellow-500 w-full m-1 px-1 text-black">
            <div className="mx-1">2017</div>
            <div>145 000 km</div>
          </div>

          <div className="flex flex-col justify-start border-blue-500 w-1/12 m-1 px-1 text-black">
            <svg
              //TODO: add favorite
              onClick={(e) => e.preventDefault()}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 hover:text-red-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <svg
              //TODO: copy link
              onClick={(e) => e.preventDefault()}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mt-1 hover:text-blue-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
              />
            </svg>
          </div>
        </div>

        <div className="ml-1 p-1 flex justify-start sm:justify-end text-black w-2/6 sm:w-full">
          <div className="mx-1 self-start w-full text-slate-400 text-sm">
            Tbilisi
          </div>
        </div>

        <div className="ml-1 w-full p-1 flex justify-start sm:justify-end text-black ">
          <div className="mx-1 flex justify-center items-center rounded-md bg-gray-400 p-1 hover:shadow-md ">
            <Avatar sx={{ width: 24, height: 24 }} className="mx-2 " />
            <div
              className="text-white p-1 text-sm mx-1 hidden sm:flex"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              {userName}
            </div>
          </div>

          <button
            className="p-1 w-full sm:w-[50%] mx-1 px-3 rounded-md bg-green-500 text-white text-sm hover:shadow-md"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <div className="hidden sm:flex px-3">+995 599 019 460</div>
            </div>
          </button>
        </div>
      </div>
    </a>
  );
}

export default PostCard;
