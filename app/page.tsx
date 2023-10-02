import Button from "@/components/button";
import Input from "@/components/input";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-2 justify-center items-center bg-red-500">
      <h1 className="text-3xl text-white font-bold">V-Downloader</h1>
      <div className="filecontainer border w-[90%] h-[80%] rounded-lg flex flex-col gap-6 justify-center items-center bg-gradient-to-br from-[#F0F0F0] to-[#F1EFEF] shadow">
        <Input />
        <Button />
      </div>
    </div>
  );
};

export default page;
