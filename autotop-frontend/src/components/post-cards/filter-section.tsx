import React from "react";
import { useState } from "react";
import SelectAutocomplete from "../elements/select-autocomplete";
import SystemCheckbox from "../../components/elements/system-checkbox";
import autoBrands from "@/lib/auto-information/auto-brands";
import { values } from "lodash";

export default function FilterSection() {
  const [active, setActive] = useState("all");

  return (
    <div className="flex justify-between rounded-md h-[30%] w-full sm:w-[95%] p-3 shadow-md mx-2 mr-4 bg-gray-50">
      <div className="p-1 m-1 flex flex-col w-full">
        <div className="flex justify-between">
          <div className="flex">
            <button
              onClick={() => setActive("all")}
              className={`p-1 px-4 border-2 ${
                active === "all" ? "text-black" : "text-slate-400 "
              } ${
                active === "all" && "bg-blue-200 border-blue-400"
              } rounded-l-md ${
                active !== "all" &&
                "hover:bg-blue-500 hover:border-blue-500 hover:text-white"
              }`}
            >
              All
            </button>
            <button
              className={`p-1 px-4 
              border-y-2 
              border-grey-400
          ${active === "old" ? "text-black" : "text-slate-400 "}
          ${active === "old" && "bg-blue-200 border-blue-400 border-2"}  ${
                active !== "old" &&
                "hover:bg-blue-500 hover:border-blue-500 hover:text-white"
              }`}
              onClick={() => setActive("old")}
            >
              Old
            </button>
            <button
              className={`p-1 px-4 border-2 border-grey-400 rounded-r-md 
          ${active === "new" ? "text-black" : "text-slate-400 "}
          ${active === "new" && "bg-blue-200 border-blue-400"}  ${
                active !== "new" &&
                "hover:bg-blue-500 hover:border-blue-500 hover:text-white"
              }`}
              onClick={() => setActive("new")}
            >
              New
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-full mt-2">
          <div className="flex flex-col w-full mr-4">
            <div className="w-full">
              <SelectAutocomplete
                defaultValue={"Brand"}
                values={values(autoBrands).map((v, i) => ({ id: i, name: v }))}
              />
            </div>
            <div className="flex w-full">
              <SelectAutocomplete
                className="w-full mr-1"
                defaultValue="Price from, $"
                values={[]}
              />
              <SelectAutocomplete
                className="w-full"
                defaultValue="Price to"
                values={[]}
              />
            </div>

            <div className="flex w-full">
              <SelectAutocomplete
                className="w-full mr-1"
                defaultValue="Volume from"
                values={[]}
              />
              <SelectAutocomplete
                className="w-full"
                defaultValue="Volume to"
                values={[]}
              />
            </div>
          </div>

          <div className="flex flex-col w-full mr-4">
            <div>
              <SelectAutocomplete defaultValue={"Model"} values={[]} />
            </div>
            <div className="flex">
              <SelectAutocomplete
                className="w-full mr-1"
                defaultValue="Year from"
                values={[]}
              />
              <SelectAutocomplete
                className="w-full"
                defaultValue="Year to"
                values={[]}
              />
            </div>
            <div>
              <SelectAutocomplete
                className="w-full"
                values={[]}
                defaultValue={"Drive unit"}
              />
            </div>
          </div>

          <div className="flex flex-col w-full mr-4">
            <div>
              <SelectAutocomplete defaultValue={"Generation"} values={[]} />
            </div>
            <div className="flex">
              <SelectAutocomplete
                className="w-full mr-1"
                defaultValue="Transmission"
                values={[]}
              />
              <SelectAutocomplete
                className="w-full"
                defaultValue="Gas type"
                values={[]}
              />
            </div>
            <div className="mt-2 p-1">
              <SystemCheckbox label="With photos only" />
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            className="p-1 px-4 mr-4 text-slate-400 text-xs flex justify-center items-center"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Clear
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <button className="p-1 px-4 mr-4 text-slate-400 text-xs flex justify-center items-center">
            Extended filter
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <button className="p-1 px-4 border-2 border-grey-400 rounded-md bg-green-500 text-white mr-4">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
