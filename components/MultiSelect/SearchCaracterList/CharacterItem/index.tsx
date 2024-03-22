import {
  SELECTEDLIST_ADD,
  SELECTEDLIST_REMOVE,
} from "@/lib/features/characters/charactersSlice";
import { Character } from "@/lib/features/characters/initialStateCharacters";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function CharacterItem({ item }: { item: Character }) {
  const searchTerm = useAppSelector((state) => state.characters.searchText);
  const parts = item.name.split(new RegExp(`(${searchTerm})`, "gi"));

  const dispacth = useAppDispatch();
  const [check, setCheck] = useState<boolean>(false);
  const handleOnChange = ({ item }: { item: Character }) => {
    if (check) {
      dispacth(SELECTEDLIST_REMOVE({ item }));
      setCheck(!check);
    }
    if (!check) {
      dispacth(SELECTEDLIST_ADD({ item }));
      setCheck(!check);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      dispacth(SELECTEDLIST_ADD({ item }));
    }
    if (event.key === "Backspace") {
      dispacth(SELECTEDLIST_REMOVE({ item }));
    }
  };
  
  return (
    <>
      <div onClick={() => handleOnChange({ item })} className="flex gap-2 p-2 border border-[rgb(151,162,182)] rounded-lg hover:cursor-pointer duration-150 transform hover:scale-105 transition ease-linear " tabIndex={(2*Number(item.id))} onKeyDown={handleKeyDown}>
        <input
          type="checkbox"
          name=""
          checked={item.added}
          id=""
          readOnly
        />
        <div className="flex items-center justify-center object-cover">
          <Image
            className="rounded-xl h-10 w-10"
            src={item.image}
            width={30}
            height={30}
            alt={item.name}
            blurDataURL="data:image/png;base64, iVBORw0KGgoAAAAANSUhEUgAAAAEAAAABCAYAAAAAfFcSJAAAADULEQVR42mP8/5/hPwAIAgL/4d1j8wAAAABJRU5ErkJggg== "
          />
        </div>
        <div>
          <div className="text-sm">
            {" "}
            {parts.map((part, index) => {
              if (part.toLowerCase() === searchTerm.toLowerCase()) {
                return (
                  <span key={index} className="font-extrabold">
                    {part}
                  </span>
                );
              } else {
                return <span key={index}>{part}</span>;
              }
            })}
          </div>
          <div className="text-xs font-light">
            {item.episode.length}&nbsp;
            {item.episode.length <= 1 ? "Episode" : "Episodes"}{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default CharacterItem;
