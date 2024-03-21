import { fetchCaracters } from "./charactersApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface Character {
  id?: number | string;
  name: string;
  status: string;
  type: string;
  gender: string;
  origin: object;
  location: object;
  image: string;
  episode: string[];
  url: string;
  created: string;
  added: boolean;
}

export const caractersState = {
  items: [] as Character[],
  success: false,
  isLoading: false,
  error: null as any,
  selectedCharacters: [] as Character[],
  searchText: "",
};

export const getSearchCharactersAsync = createAsyncThunk(
  "todos/getSearchCharactersAsync",
  async ({ text }: { text: string }) => {
    const response: Character[] = await fetchCaracters({ text });
    return response.map((ch) => {
      return { ...ch, added: false };
    });
  }
);
