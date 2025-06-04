"use client";
import React from "react";
import { useState, useEffect } from "react";
import { IBooks } from "@/types/books.types";
import { useParams } from "next/navigation";
import { getBooksById } from "@/apis/getbooksbyId";
import Image from "next/image";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Page = () => {
  const { id } = useParams();

  const [books, setbooks] = useState<IBooks>();
  useEffect(() => {
    const get_book = async () => {
      const booksData = await getBooksById(Number(id));
      setbooks(booksData.data);
    };
    get_book();
  }, []);
  return (
    <Wrapper>
      <div className="mt-20 xs:p-10 sm:p-0 bg-black">
        <div>
          <Image
            src={books?.volumeInfo?.imageLinks?.smallThumbnail || ""}
            width={400}
            height={400}
            alt="image"
          />
          <div className="">
            <h1 className="text-h1 font-bold mt-4">
              {books?.volumeInfo?.title}
            </h1>
            <h2 className="text-h2 text-white">{books?.volumeInfo.subtitle}</h2>
            <h3 className="text-h3 text-white">Page Count : {books?.volumeInfo.pageCount}</h3>
            <h3 className="text-h3 text-white">Published Date : {books?.volumeInfo.publishedDate}</h3>
            <div className="flex flex-col gap-y-1">
            <Link href={books?.volumeInfo?.infoLink||""} className="underline text-link hover:text-link-hover" >Book Information link</Link>
            <Link href={books?.volumeInfo?.previewLink||""} className="underline text-link hover:text-link-hover">Book Preview link</Link>
            </div>
            
            <p className="text-paragraph" >{books?.volumeInfo.description}</p>
            <div></div>
          </div>
        </div>
        <div></div>
      </div>
    </Wrapper>
  );
};

export default Page;
