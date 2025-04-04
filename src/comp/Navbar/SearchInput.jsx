import { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";

const SearchInput = () => {
  const [showSearch, setShowSearch] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (showSearch) inputRef.current?.focus();
  }, [showSearch]);

  return (
    <li>
      {showSearch ? (
        <input
          ref={inputRef}
          type="text"
          placeholder="Sök produkter..."
          className="border-b border-black focus:outline-none px-2 py-1 transition"
          onBlur={() => setShowSearch(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              console.log("Söker efter:", e.target.value);
              setShowSearch(false);
            }
          }}
        />
      ) : (
        <BiSearch
          className="cursor-pointer hover:opacity-70"
          onClick={() => setShowSearch(true)}
        />
      )}
    </li>
  );
};

export default SearchInput;
