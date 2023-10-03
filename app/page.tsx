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

    if (url.includes("facebook")) {
      const FacebookOption = {
        method: "GET",
        url: "https://facebook-reel-and-video-downloader.p.rapidapi.com/app/main.php",
        params: {
          url: url,
        },
        headers: {
          "X-RapidAPI-Key":
            "6eab60dbd1mshb3fc9aaa2e46d43p1858bajsncb1d0d099d75",
          "X-RapidAPI-Host":
            "facebook-reel-and-video-downloader.p.rapidapi.com",
        },
      };

      const fbresponse = await axios.request(FacebookOption);
      if (fbresponse) {
        sethidden(true);
        setdownload(fbresponse.data.links["Download High Quality"]);
      } else {
        console.log("data not fetched");
      }
    }

    if (url.includes("instagram")) {
      const InstagramOptions = {
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

      const instaresponse = await axios.request(InstagramOptions);
      if (instaresponse) {
        sethidden(true);
        setdownload(instaresponse.data.media);
      } else {
        console.log("data not fetched");
      }
    }

    if (url.includes("youtube")) {
      const options = {
        method: 'GET',
        url: 'https://youtube-audio-video-download.p.rapidapi.com/geturl',
        params: {
          video_url: url
        },
        headers: {
          'X-RapidAPI-Key': '6eab60dbd1mshb3fc9aaa2e46d43p1858bajsncb1d0d099d75',
          'X-RapidAPI-Host': 'youtube-audio-video-download.p.rapidapi.com'
        }
      };
      
        const response = await axios.request(options);
        if (response) {
          sethidden(true);
          console.log(response.data);
        } else {
          console.log("data not fetched");
        }
     
    }

  };
  

  return (
    <div className="w-full h-screen flex flex-col gap-2 justify-center items-center bg-red-500">
      <h1 className="text-3xl text-white font-bold">V-Downloader</h1>
      <div className="filecontainer border md:w-[60%] w-[80%] h-[60%] rounded-lg flex flex-col gap-10 justify-center items-center bg-gradient-to-br from-[#F0F0F0] to-[#F1EFEF] shadow">
        <Input onChange={getUrl} value={url} />
        {!hidden ? (
          <Button onclick={getDownload} text={text} />
        ) : (
          <Link download={download} href={download}>
            <Button text={"DOWNLOAD"} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default page;
