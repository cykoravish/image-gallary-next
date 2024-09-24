"use client";
import axios from "axios";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

const Page = () => {
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<
    {
      image_url: string;
      public_id: string;
      _id: string;
    }[]
  >([]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const FetchAllImages = async () => {
    try {
      const {
        data: { images },
      } = await axios.get("/api/upload-image");
      setImages(images);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const OnSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!image) return;
      const formData = new FormData();
      formData.append("image", image);
      await axios.post("/api/upload-image", formData);
      await FetchAllImages();
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("Error: ", error.message); // Safe to access message here
      } else {
        console.log("An unknown error occurred");
      }
    }
  };
  const deleteImage = async (e: string) => {
    setLoading(true);
    try {
      const { data } = await axios.delete(
        "/api/upload-image/" + e.replace("nextjs-imagegallary/", "")
      );
      await FetchAllImages();
      console.log("delete data:", data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("Error: ", error.message); // Safe to access message here
      } else {
        console.log("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    FetchAllImages();
  }, []);

  return (
    <>
      <form onSubmit={OnSubmitHandler} className="w-1/2 mx-auto py-10">
        <input onChange={onChangeHandler} type="file" name="" id="" />
        <button className="bg-black px-4 py-2 rounded-sm text-white">
          upload
        </button>
      </form>
      <div className="px-10 flex flex-wrap gap-x-5">
        {images.map((cur, i) => {
          return (
            <div key={i} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={cur.image_url}
                />
              </a>
              <div className="mt-4">
                <button
                  disabled={loading}
                  onClick={() => deleteImage(cur.public_id)}
                  className="bg-black text-white rounded-sm px-5 py-2 disabled:bg-gray-600"
                >
                  {loading ? "loading..." : "Delete"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Page;
