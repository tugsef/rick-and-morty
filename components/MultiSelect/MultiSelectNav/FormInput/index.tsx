"use client";
import { Loading, SearchSVG } from "@/components/SVGComponents";
import {
  ITEMS_ALL_REMOVE,
  SEARCH_TEXT,
  SELECTEDLIST_ALL_REMOVE,
} from "@/lib/features/characters/charactersSlice";
import { getSearchCharactersAsync } from "@/lib/features/characters/initialStateCharacters";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import React, { ChangeEvent } from "react";

function FormInput() {
  const dispatch = useAppDispatch();
  const isloading = useAppSelector((state) => state.characters.isLoading);
  const text = useAppSelector((state) => state.characters.searchText);
  const error = useAppSelector((state) => state.characters.error);

  const handleOnChange = async (event: ChangeEvent<HTMLInputElement>) => {
    let text = event.target.value;
    dispatch(SEARCH_TEXT({ text }));
    await dispatch(getSearchCharactersAsync({ text }));
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(event.key);

    if (event.key === "Escape") {
      dispatch(ITEMS_ALL_REMOVE());
      if (
        confirm(
          "Bu işlem görüntülenen karakter listesini siler. Seçili Karakterleride silmek ister misiniz?"
        )
      ) {
        dispatch(SELECTEDLIST_ALL_REMOVE());
      }
    }
  };
  return (
    <div className="flex flex-auto">
      <input
        onChange={handleOnChange}
        value={text}
        className="w-full focus:outline-none ps-1"
        type="text"
        onKeyDown={handleKeyDown}
      />
      {!isloading && !error && <SearchSVG />}
      {isloading && <Loading />}
      {error && (
        <div className="text-xs text-red-600 text-center p-1">{error}</div>
      )}
    </div>
  );
}

export default FormInput;
