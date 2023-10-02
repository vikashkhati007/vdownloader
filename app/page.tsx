"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import React, { useState } from "react";

const page = () => {
  const [url, setUrl] = useState("");
  interface PropsType {
    target: {
      value: string;
    };
  }

  const getUrl = (e: PropsType) => {
    setUrl(e.target.value);
  };

  const getDownloadURL = () =>{
    console.log("Get url");
  }
  return (
    <div className="w-full h-screen flex flex-col gap-2 justify-center items-center bg-red-500">
      <h1 className="text-3xl text-white font-bold">V-Downloader</h1>
      <div className="filecontainer border md:w-[60%] w-[90%] h-[80%] rounded-lg flex flex-col gap-10 justify-center items-center bg-gradient-to-br from-[#F0F0F0] to-[#F1EFEF] shadow">
        <Input onChange={getUrl} value={url} />
        <Button onclick={getDownloadURL} text={"SUBMIT"} />
      </div>
    </div>
  );
};

export default page;
