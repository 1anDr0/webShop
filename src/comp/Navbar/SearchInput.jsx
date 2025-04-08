import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { BiSearch } from "react-icons/bi";

const SearchInput = () => {
  const [showSearch, setShowSearch] = useState(false);
  const inputRef = useRef(null);

  const navigate = useNavigate();

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
          onBlur={() => setShowSearch(false)} //stängs när man klickar utanför
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const query = e.target.value.trim();
              if (query) {
                navigate(`/search?q=${encodeURIComponent(query)}`)
              }
            
              setShowSearch(true);
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
