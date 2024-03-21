import React from "react";
import MultiSelectNav from "./MultiSelectNav";
import SelectList from "./MultiSelectNav/SelectList";
import SearchCaracterList from "./SearchCaracterList";

function MultiSelect() {
  return (
    <>
    <main className="w-96 max-h-96  flex flex-col gap-2 relative">
      <MultiSelectNav />
      <SearchCaracterList />
    </main>
   

    </>
    
  );
}

export default MultiSelect;
