"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

const page = () => {
  const [url, setUrl] = useState("");
  const [download, setdownload] = useState("");
  const [hidden, sethidden] = useState(false);
  const [text, setText] = useState("SUBMIT");

  interface PropsType {
    target: {
      value: string;
    };
  }

  const getUrl = (e: PropsType) => {
    setUrl(e.target.value);
  };

  const getDownload = async () => {
    setText("Please Wait ...");
    const options = {
      method: "GET",
      url: "https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index",
      params: {
        url: url,
      },
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_KEY,
        "X-RapidAPI-Host":
          "instagram-downloader-download-instagram-videos-stories.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);
    if (response) {
      sethidden(true);
      setdownload(response.data.media);
    } else {
      console.log("data not fetched");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col gap-2 justify-center items-center bg-red-500">
      <h1 className="text-3xl text-white font-bold">V-Downloader</h1>
      <div className="filecontainer border md:w-[60%] w-[90%] h-[80%] rounded-lg flex flex-col gap-10 justify-center items-center bg-gradient-to-br from-[#F0F0F0] to-[#F1EFEF] shadow">
        <Input onChange={getUrl} value={url} />
        {!hidden ? (
          <Button onclick={getDownload} text={text} />
        ) : (
          <Link href={download}>
            <Button text={"DOWNLOAD"} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default page;
