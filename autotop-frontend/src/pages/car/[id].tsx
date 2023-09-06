import { Avatar } from "@mui/material";
import Image from "next/image";
import React from "react";
import { bmw_test_pic } from "../../../public";

export default function CarPage() {
  // const [mainPhoto,setMainPhoto] = useState()

  return (
    <div className="flex flex-col w-full mx-6 mt-2 h-screen">
      <div
        id="title"
        className="text-xl sm:text-3xl font-bold flex justify-between w-full text-left"
      >
        <div id="title">BMW X6 2017 3.5L</div>
        <div id="price">15 000$</div>
      </div>

      <div className="flex w-full text-slate-400 text-xs sm:text-base">
        <div className="mr-2 pr-2 w-1/5">21 июля</div>
        <div className="ml-6 flex justify-between items-center w-full">
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div>1102 (118 сегодня)</div>
          </div>

          <div className="flex justify-center items-center self-end">
            <svg
              //TODO: copy link
              onClick={(e) => e.preventDefault()}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-1 hover:text-blue-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
              />
            </svg>
            <svg
              //TODO: add favorite
              onClick={(e) => e.preventDefault()}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 hover:text-red-600 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-2 text-xs">
        <div className="flex items-center">
          <Avatar sx={{ height: 24, width: 24 }} className="mr-4" />
          <div className="flex justify-center items-center">Alexandr Dis</div>
        </div>
        <div className="flex w-full justify-end">
          <button className="bg-green-500 rounded-md p-2 text-white mr-2 ">
            Message
          </button>
          <button className="bg-green-500 rounded-md p-2 text-white">
            Call
          </button>
        </div>
      </div>

      <div id="full-info" className="flex my-4 text-xs h-[40%]">
        <div
          id="photos-area"
          className="flex flex-col w-[65%] h-full mr-2 relative"
        >
          <Image
            fill
            alt=""
            src={bmw_test_pic}
            style={{
              objectFit: "cover",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
          <div className="flex flex-wrap">
            <div>1</div>
            <div>1</div>
            <div>1</div>
          </div>
        </div>

        <div
          id="car-info"
          className="flex justify-start flex-col w-[40%] scale-90 sm:scale-100 border-y border-gray-100 py-2"
        >
          <div className="flex justify-between">
            <div className=" text-slate-400">Статус</div>
            <div className="text-end ">В наличии</div>
          </div>
          <div className="flex justify-between">
            <div className=" text-slate-400"> Год выпуска</div>
            <div className="text-end ">1956</div>
          </div>
          <div className="flex justify-between">
            <div className=" text-slate-400"> Пробег</div>
            <div className="text-end ">4 000 км</div>
          </div>
          <div className="flex justify-between">
            <div className=" text-slate-400"> Кузов</div>
            <div className="text-end ">Седан 2 дв.</div>
          </div>
          <div className="flex justify-between">
            <div className=" text-slate-400"> Цвет</div>
            <div className="text-end ">Голубой</div>
          </div>
          <div className="flex justify-between">
            <div className=" text-slate-400"> Двигатель</div>
            <div className="text-end ">0.3 л / 15 л.с. / Бензин</div>
          </div>
          <div className="flex justify-between">
            <div className=" text-slate-400"> Коробка</div>
            <div className="text-end ">0.3 л / 15 л.с. / Механическая</div>
          </div>
          <div className="flex justify-between">
            <div className=" text-slate-400">Привод </div>
            <div className="text-end ">Задний</div>
          </div>
          <div className="flex justify-between">
            <div className=" text-slate-400">Руль </div>
            <div className="text-end ">Левый</div>
          </div>
          <div className="flex justify-between">
            <div className=" text-slate-400">Растаможен</div>
            <div className="text-end ">Да</div>
          </div>
        </div>

        {/* <div id="additional-info" className="flex flex-col"></div> */}
      </div>
      <div className="pb-3 border-b border-gray-100">
        <h2 className="text-2xl font-bold">Комментарий продавца</h2>
        <div>
          Hans Glas Goggomobil t300 кабриолет 1956 года с уникальной историей.
          Когда-то ввезённый в СССР с целью освоения производства
          микромобилей(см. книга Фиттреман «микроавтомобили, обзор конструкций)
          Портал авто.ру снимал обзор на неё на YouTube. С тех пор была
          доукомплектована родными запчастями (особенно родным карбюратором) и
          гоняет вполне уверенно. В этом году заняла 3 место в зачете олдтаймер
          по ретро ралли.
        </div>
      </div>
    </div>
  );
}
