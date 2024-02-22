"use client";
import React from "react";
import Logo from "../Logo/Logo";
import SocMediaBtn from "../SocMediaBtn/SocMediaBtn";

const BlockInfo = () => {
  return (
    <div className="flex flex-col items-center text-white text-lg sm:text-2xl">
      <Logo />
      <h1 className="text-center font-bold text-3xl mt-4 sm:text-4xl">
        Сайт в разработке
      </h1>
      <h2 className="text-center font-semibold  mt-4 sm:max-w-96 max-w-56">
        Чтобы связаться с нами используйте:
      </h2>
      <h2 className="mt-6 lg:block hidden">+7 (993) 766-66-01</h2>
      <div className="flex items-center justify-between w-36 lg:justify-center lg:mt-2 mt-6">
        <SocMediaBtn
          link="tel: +79937666601"
          image="/phone.svg"
          classNameLink="lg:hidden block"
        />
        <SocMediaBtn
          link="https://api.whatsapp.com/send/?phone=79937666601&text=Здравствуйте%2C+у+меня+есть+вопрос"
          image="/whatsapp.svg"
        />
      </div>
    </div>
  );
};

export default BlockInfo;
