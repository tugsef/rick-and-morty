"use client";
import { SELECTEDLIST_REMOVE } from "@/lib/features/characters/charactersSlice";
import { Character } from "@/lib/features/characters/initialStateCharacters";
import { useAppDispatch } from "@/lib/hook";
import React from "react";

function SelectedItem({ item }: { item: Character }) {
  const dispacth = useAppDispatch();
  console.log(item.added);

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
      <div className="flex gap-1 text-xs text-white justify-center items-center bg-blue-500 px-1 rounded-lg p-2">
        <span className="truncate">{item.name}</span>
        <button
          onClick={() => handleOnClick({ item })}
          className="text-white text-center  bg-slate-600 px-1  rounded-sm"
          tabIndex={-1}
        >
          x
        </button>
      </div>
    </div>
  );
}

export default SelectedItem;
