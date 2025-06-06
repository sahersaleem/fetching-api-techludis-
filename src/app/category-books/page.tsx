"use client";
import getBooksByQuery from "@/apis/getBooksByQuery";
import { IBooks } from "@/types/books.types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Loader from "@/components/shared/Loader";
import Wrapper from "@/components/shared/Wrapper";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Suspense } from "react";

const BooksByQuery = () => {
  const search = useSearchParams();
  const query = search.get("query");
  const [books, setBooks] = useState<IBooks[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getBooks = async (query: string) => {
      setLoading(true);
      if (query) {
        const booksData = await getBooksByQuery(query);
        // console.log(booksData.data.data);
        setBooks(booksData.data.data);
        setLoading(false);
      }
    };
    getBooks(query!);
  }, [query]);

  return (
    <Suspense fallback={<Loader/>}>
    <Wrapper>
      <div className="flex mt-10 items-center justify-center gap-x-5 flex-col lg:flex-row">
        <h1 className="text-h1 text-center ">Books By Category</h1>
        <Link href={"/"} className="text-link text-center flex justify-center items-center">
         <IoIosArrowRoundBack className="inline"/> Go Back
        </Link>
      </div>
      {loading && (
        <div className="w-full h-screen flex justify-center items-center">
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
    </Suspense>
  );
};

export default BooksByQuery;
