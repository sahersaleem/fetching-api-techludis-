"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { IBooks } from "@/types/books.types";
import { get_random_book } from "@/apis/randomBookApi";
import Wrapper from "../shared/Wrapper";
import { useRouter } from "next/navigation";

const Categories = () => {
  
  const [categories, setcategories] = useState<string[]>();
  const [query, setquery] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const get_books = async () => {
      const response = await get_random_book();
      const fetchCategories: string[] = response.data.data.map(
        (item: IBooks) => item.volumeInfo.categories
      );
      const newSetOfCategories = Array.from(new Set(fetchCategories.flat()));
      setcategories(newSetOfCategories);

    };
    get_books();
  }, []);

  useEffect(() => {
    if (query) {
      router.push(`/category-books?query=${encodeURIComponent(query)}`);
    }
  }, [query, router]);

  return (
    <Wrapper>
      <div className="w-full h-auto pb-10 mt-10">
        {categories?.map((item, index) => (
          <div
            key={index}
            className="border-t border-gray-500 py-10 cursor-pointer"
            onClick={() => {
              setquery(item);
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Categories;
