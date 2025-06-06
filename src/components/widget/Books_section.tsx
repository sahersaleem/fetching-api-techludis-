"use client";
import { useEffect, useState } from "react";
import React from "react";
import { get_random_book } from "@/apis/randomBookApi";
import { IBooks } from "@/types/books.types";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import Link from "next/link";
import Loader from "../shared/Loader";

const Books_section = () => {
  const [books, setbooks] = useState<IBooks[]>();
  const [isLoading, setisLoading] = useState<boolean>(true);

  useEffect(() => {
    const get_books = async () => {
      setisLoading(true);
      const response = await get_random_book();
      console.log(response);
      setbooks(response.data.data);
      setisLoading(false);
    };
    get_books();
  }, []);

  return (
    <Wrapper>
      {isLoading && (
        <div className="w-full h-[60vh] flex justify-center items-center">
          <Loader />
        </div>
      )}
      <div className="flex gap-9 justify-center items-center flex-wrap mt-28 font-poppins">
        {books &&
          books.map((item, index) => (
            <div
              className="w-[300px] h-[400px] bg-[#282828] flex flex-col items-center justify-center"
              key={index}
            >
              <Image
                src={item.volumeInfo.imageLinks.thumbnail}
                width={200}
                height={200}
                alt="image"
                className="object-center"
              />
              <Link
                href={`/books/${item.id}`}
                className="text-link font-poppins mt-6 hover:text-link-hover text-center "
              >
                {item.volumeInfo.title}
              </Link>
            </div>
          ))}
      </div>
    </Wrapper>
  );
};

export default Books_section;
