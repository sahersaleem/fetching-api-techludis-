import axios from "axios";

export async function getBooksById(id: number) {
  try {
    const response = await axios.get(
      `https://api.freeapi.app/api/v1/public/books/${id}`
    );
    console.log(response.data);

    return response.data;
  } catch (error: any) {
    console.log(error);
  }
}
