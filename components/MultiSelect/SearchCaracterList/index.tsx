"use client";
import {
  ITEMS_ALL_REMOVE,
  SELECTEDLIST_ALL_REMOVE,
  selectFiltredItems,
} from "@/lib/features/characters/charactersSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import React from "react";
import CharacterItem from "./CharacterItem";
const CloseSVG = () => (
  <>
    <svg
      className="w-3 h-3"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
      />
    </svg>
    <span className="sr-only">Close modal</span>
  </>
);
function SearchCaracterList() {
  const dispacth = useAppDispatch();
  const filtredCharacters = useAppSelector(selectFiltredItems);

  if (filtredCharacters.length === 0) return;

  const handleOnClick = () => {
    dispacth(ITEMS_ALL_REMOVE());
    if(    confirm("Bu işlem görüntülenen karakter listesini siler. Seçili Karakterleride silmek ister misiniz?")
    ){
    dispacth(SELECTEDLIST_ALL_REMOVE())
    }
  };
  return (
    <div className="relative  ">
      <div className="  w-full f-full absolute max-h-96 top-0 right-0 bg-white px-4 rounded-lg pt-2 overflow-auto shadow-navbarShadow">
        <div className="flex items-end sticky top-0 left-0  ">
          <button
            type="button"
            className="text-gray-400 backdrop-blur-sm bg-transparent  hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            onClick={handleOnClick}
          >
            <CloseSVG />
          </button>
        </div>
      <div className="border rounded-md "> <ul className="flex flex-col gap-2  p-2 ">
          {filtredCharacters.map((item) => (
            <CharacterItem  key={item.id} item={item} />
          ))}
        </ul></div>
       
        <div className="sticky bottom-0 right-0 bg-white text-xs py-2 text-slate-500">Characters: {filtredCharacters.length} items</div>

      </div>

    </div>
  );
}

export default SearchCaracterList;
