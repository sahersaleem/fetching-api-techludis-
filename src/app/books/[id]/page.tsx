"use client";
import React from "react";
import { useState, useEffect } from "react";
import { IBooks } from "@/types/books.types";
import { useParams } from "next/navigation";
import { getBooksById } from "@/apis/getbooksbyId";
import Image from "next/image";
import Wrapper from "@/components/shared/Wrapper";
import Loader from "@/components/shared/Loader";
import Link from "next/link";

const Page = () => {
  const { id } = useParams();

  const [books, setbooks] = useState<IBooks>();
  const [isLoading, setisLoading] = useState<boolean>(false);
  useEffect(() => {
    const get_book = async () => {
      setisLoading(true);
      const booksData = await getBooksById(Number(id));
      setbooks(booksData.data);
      setisLoading(false);
    };
    get_book();
  }, []);
  return (
    <Wrapper>
      {isLoading && (
        <div className="w-full h-screen flex justify-center items-center">
          <Loader />
        </div>
      )}
      <div className="mt-20 xs:p-10 sm:p-0 font-poppins h-auto lg:pb-10">
        <div className="flex w-full flex-col lg:flex-row items-center justify-center p-3 lg:p-0 ">
          <div className="w-full lg:w-[50%] ">
            <span className="bg-white p-2 text-black font-poppins capitalize font-bold">
              {books?.salesInfo?.saleability === "FOR_SALE"
                ? "For sale"
                : "not for sale"}
            </span>
            <Image
              src={books?.volumeInfo?.imageLinks?.smallThumbnail || ""}
              width={300}
              height={300}
              alt="image"
            />
          </div>
          <div className="w-full lg:w-[50%]">
            <h1 className="text-h1 font-bold mt-4 text-center lg:text-left">
              {books?.volumeInfo?.title}
            </h1>
            <h2 className="text-h2 text-white text-center lg:text-left">
              {books?.volumeInfo.subtitle}
            </h2>

            <div className="border border-gray-600/50 w-full p-4 mt-4">
              <h3 className="text-h3 font-semibold">Book Details:</h3>
              <p className="text-paragraph text-white">
                <span className="text-h4"> Pages :</span>{" "}
                {books?.volumeInfo.pageCount}
              </p>
              <p className="text-paragraph text-white">
                <span className="text-h4"> Published Date :</span>{" "}
                {books?.volumeInfo.publishedDate}
              </p>
              <p className="text-paragraph text-white">
                <span className="text-h4"> Publisher :</span>{" "}
                {books?.volumeInfo.publisher}
              </p>
              <p className="text-paragraph text-white">
                <span className="text-h4"> Authors :</span>
                <div className="flex flex-col ml-3">
                  {books?.volumeInfo.authors.map((item, index) => (
                    <ul key={index}>
                      <li className="list-disc text-paragraph">{item}</li>
                    </ul>
                  ))}
                </div>
              </p>
              <p className="text-paragraph text-white">
                <span className="text-h4">Language :</span>{" "}
                {books?.volumeInfo.language}
              </p>
            </div>
            <div className="border border-gray-600/50 w-full p-4 mt-4">
              <h4 className="text-h4">Description :</h4>
              <p className="text-paragraph">{books?.volumeInfo.description}</p>
            </div>
            <div className="flex flex-col gap-y-1 border border-gray-600/50 w-full p-4 mt-4">
              <h4 className="text-h4">Links :</h4>
              <Link
                href={books?.volumeInfo?.infoLink || ""}
                className="underline text-link hover:text-link-hover"
              >
                Book Information link
              </Link>
              <Link
                href={books?.volumeInfo?.previewLink || ""}
                className="underline text-link hover:text-link-hover"
              >
                Book Preview link
              </Link>
            </div>

            <div className="flex  gap-3 mt-7">
              <button className="bg-white text-black  w-[300px] py-6">
                Add to Cart
              </button>
              <button className=" text-white border border-white w-[300px] py-6">
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </Wrapper>
  );
};

export default Page;
