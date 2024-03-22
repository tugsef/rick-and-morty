
"use client"
import { selectSelectedItems } from '@/lib/features/characters/charactersSlice';
import { useAppSelector } from '@/lib/hook';
import React from 'react'
import SelectedItem from './SelectedItem';

function SelectList() {
  const selectedList = useAppSelector(selectSelectedItems);

  if(selectedList.length===0) return ;

  return (
    <div >
      <ul className='flex flex-wrap  gap-1 max-w-60'>
        {
          selectedList.map((item)=><SelectedItem key={item.id} item={item}/>)
        }
      </ul>
    </div>
  )
}

export default SelectList

