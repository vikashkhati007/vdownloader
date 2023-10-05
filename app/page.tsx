"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const [url, setUrl] = useState("");
  const [download, setDownload] = useState("");
  const [hidden, setHidden] = useState(false);
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
        setHidden(true);
        setDownload(fbresponse.data.links["Download High Quality"]);
      } else {
        console.log("data not fetched");
      }
    } else if (url.includes("instagram")) {
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
        setHidden(true);
        setDownload(instaresponse.data.media);
      } else {
        console.log("data not fetched");
      }
    } else if (url.includes("youtu.be") || url.includes("youtube")) {
      const encodedParams = new URLSearchParams();
      encodedParams.set("url", url);

      const Youtubeoptions = {
        method: "POST",
        url: "https://all-media-downloader.p.rapidapi.com/download",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_KEY,
          "X-RapidAPI-Host": "all-media-downloader.p.rapidapi.com",
        },
        data: encodedParams,
      };

      const youtuberesponse = await axios.request(Youtubeoptions);
      if (youtuberesponse) {
        setHidden(true);
        setDownload(youtuberesponse.data["720p"].url);
      } else {
        console.log("data not fetched");
      }
    } else {
      setText("Invalid URL");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center pb-10 items-center bg-[#C70039]">
      <Image
        src={"/fire.jpeg"}
        width={40}
        height={40}
        alt="logo"
        className="rounded-full"
      ></Image>
      <h1 className="text-3xl text-white font-bold mb-4">V-Downloader</h1>

      <div className="filecontainer border md:w-[60%] w-[80%] md:h-[60%] h-[80%] rounded-lg flex flex-col gap-10 justify-center items-center bg-[#F1F6F5] bg-opacity-90 shadow p-4 py-20">
        <Input onChange={getUrl} value={url} />
        {!hidden ? (
          <Button onClick={getDownload} text={text} />
        ) : (
          <Link download={download} href={download}>
            <Button text={"DOWNLOAD"} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Page;
