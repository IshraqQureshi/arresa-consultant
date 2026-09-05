import { useEffect, useRef, useState } from "react";

export default function SearchableSelect({ id, name, label, placeholder, options, required }) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const rootRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setIsOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = options.filter((option) => option.toLowerCase().includes(query.toLowerCase()));

  const handleSelect = (option) => {
    setSelected(option);
    setQuery("");
    setIsOpen(false);
  };

  return (
    <div className="search-select" ref={rootRef}>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <div className="search-select-control" role="combobox" aria-expanded={isOpen} aria-haspopup="listbox">
        <input
          id={id}
          type="text"
          autoComplete="off"
          placeholder={placeholder}
          value={isOpen ? query : selected}
          onFocus={() => {
            setIsOpen(true);
            setQuery("");
          }}
          onChange={(event) => {
            setQuery(event.target.value);
            setIsOpen(true);
          }}
        />
        <input type="hidden" name={name} value={selected} required={required} />
      </div>
      {isOpen ? (
        <ul className="search-select-list" role="listbox">
          {filtered.length > 0 ? (
            filtered.map((option) => (
              <li key={option}>
                <button
                  type="button"
                  role="option"
                  aria-selected={option === selected}
                  className={`search-select-option ${option === selected ? "is-selected" : ""}`}
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </button>
              </li>
            ))
          ) : (
            <li className="search-select-empty">No matches found</li>
          )}
        </ul>
      ) : null}
    </div>
  );
}
