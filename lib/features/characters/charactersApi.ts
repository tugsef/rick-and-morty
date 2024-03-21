import axios from "axios";
import { Character } from "./initialStateCharacters";

export const fetchCaracters = async ({ text }: { text: string }) => {
  const response = await axios(
    `${process.env.NEXT_PUBLIC_BASE_URL}/character/?name=${text}`
  );
  if(!text) return [] as Character[];
  return response.data.results;
};
