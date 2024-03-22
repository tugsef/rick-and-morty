"use client";
import {
  ITEMS_ALL_REMOVE,
  SELECTEDLIST_ALL_REMOVE,
  selectFiltredItems,
} from "@/lib/features/characters/charactersSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import React from "react";
import CharacterItem from "./CharacterItem";

function SearchCaracterList() {
  const dispacth = useAppDispatch();
  const filtredCharacters = useAppSelector(selectFiltredItems);
 
  if (filtredCharacters.length === 0) return;

  const handleOnClick = () => {
    dispacth(ITEMS_ALL_REMOVE());
    if (
      confirm(
        "Bu işlem görüntülenen karakter listesini siler. Seçili Karakterleride silmek ister misiniz?"
      )
    ) {
      dispacth(SELECTEDLIST_ALL_REMOVE());
    }
  };


  return (
    <div   className="relative ">
      <div className="  w-full f-full absolute max-h-96 top-0 right-0 bg-white px-4 rounded-lg pt-2 overflow-auto shadow-navbarShadow">
        <div  className="flex items-end sticky top-0 left-0  ">
          <button
            type="button"
            className="text-gray-400 backdrop-blur-sm bg-transparent  hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            onClick={handleOnClick}
          >
            <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
              Esc
            </kbd>
          </button>
        </div>
        <div className="border  border-[rgb(151,162,182)] rounded-md ">
          {" "}
          <ul className="flex flex-col gap-2  p-2 ">
            {filtredCharacters.map((item) => (
              <CharacterItem key={item.id} item={item} />
            ))}
          </ul>
        </div>

        <div className="sticky bottom-0 right-0 bg-white text-xs py-2 text-slate-500">
          Characters: {filtredCharacters.length} items
        </div>
      </div>
    </div>
  );
}

export default SearchCaracterList;
