import React from "react";
import SelectList from "./SelectList";
import FormInput from "./FormInput";


function MultiSelectNav() {
  return (
    <div className="w-full flex p-2 h-min bg-white rounded-xl focus:bg-red-400 border-2 shadow-navbarShadow border-gray-600 relative">
      <SelectList />
      <FormInput />
    </div>
  );
}

export default MultiSelectNav;
