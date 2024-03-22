"use client"
import React, { useEffect, useRef } from "react";
import SelectList from "./SelectList";
import FormInput from "./FormInput";
import { selectSelectedItems } from "@/lib/features/characters/charactersSlice";
import { useAppSelector } from "@/lib/hook";

function MultiSelectNav() {
  const listRef = useRef<HTMLDivElement>(null);
  const list = useAppSelector(selectSelectedItems);
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [list]);

  return (
    <div
      ref={listRef}
      className="w-full flex flex-wrap p-2  bg-[rgb(255,255,255)] rounded-xl  border border-[rgb(151,162,182)] shadow-navbarShadow  relative max-h-40 overflow-x-auto"
    >
      <SelectList />
      <FormInput />
    </div>
  );
}

export default MultiSelectNav;
