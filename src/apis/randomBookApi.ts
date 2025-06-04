"use server";
import axios from "axios";

export async function get_random_book() {
  try {
    const randomBooksData = await axios.get(
      "https://api.freeapi.app/api/v1/public/books?page=1&limit=10"
    );

    if (randomBooksData.data.data.data) {
      return randomBooksData.data;
    }
  } catch (error: any) {
    return error.message;
  }
}
