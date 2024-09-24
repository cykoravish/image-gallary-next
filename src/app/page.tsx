"use client";
import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";

const Page = () => {
  const [image, setImage] = useState<File | null>(null);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const OnSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!image) return;
      const formData = new FormData();
      formData.append("image", image);

      const response = await axios.post("/api/upload-image", formData);
      const data = await response.data;
      console.log("data:", data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("Error: ", error.message); // Safe to access message here
      } else {
        console.log("An unknown error occurred");
      }
    }
  };

  return (
    <>
      <form onSubmit={OnSubmitHandler} className="w-1/2 mx-auto py-10">
        <input onChange={onChangeHandler} type="file" name="" id="" />
        <button className="bg-black px-4 py-2 rounded-sm text-white">
          upload
        </button>
      </form>
    </>
  );
};

export default Page;
