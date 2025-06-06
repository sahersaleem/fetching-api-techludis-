"use server";
import axios from "axios";
export default async function getBooksByQuery(query: string) {
  try {
    const response = await axios.get(
      `https://api.freeapi.app/api/v1/public/books?page=1&limit=10&inc=kind%252Cid%252Cetag%252CvolumeInfo&query=${query}`
    );
    return response.data
  } catch (error:any) {
    return error.message

  }
}
