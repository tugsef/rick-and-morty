"use client";
import { SELECTEDLIST_REMOVE } from "@/lib/features/characters/charactersSlice";
import { Character } from "@/lib/features/characters/initialStateCharacters";
import { useAppDispatch } from "@/lib/hook";
import React from "react";

function SelectedItem({ item }: { item: Character }) {
  const dispacth = useAppDispatch();
  const handleOnClick = ({ item }: { item: Character }) => {
    dispacth(SELECTEDLIST_REMOVE({ item }));
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Backspace") {
      dispacth(SELECTEDLIST_REMOVE({ item }));
    }
  };
  return (
    <div tabIndex={1} onKeyDown={handleKeyDown}>
      <div className="flex gap-1 text-xs  justify-center items-center bg-[rgb(227,231,239)] px-1 rounded-lg p-2">
        <span className="truncate">{item.name}</span>
        <button
          onClick={() => handleOnClick({ item })}
          className=" text-center  bg-[rgb(151,162,182)] px-1  rounded-sm"
          tabIndex={-1}
        >
          x
        </button>
      </div>
    </div>
  );
}

export default SelectedItem;
