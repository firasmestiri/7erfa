import { useState, useRef, useEffect } from "react";

export function useDropdown(options, onSelect) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [notFound, setNotFound] = useState(false);
  const inputRef = useRef(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowDropdown(false);
    setNotFound(false);
    onSelect(item); // Call the provided onSelect callback
  };

  const handleInputChange = (e) => {
    const value = e.currentTarget.value;
    setSearchTerm(value);

    const filteredOptions = options.filter((option) =>
      option.toLowerCase().startsWith(value.toLowerCase())
    );

    // Check if the entered text is not in the options
    setNotFound(filteredOptions.length === 0 && value.trim() !== "");
  };

  const handleBlur = () => {
    // Delay hiding the dropdown to allow item selection
    setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (showDropdown && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showDropdown]);

  return {
    showDropdown,
    selectedItem,
    searchTerm,
    notFound,
    inputRef,
    handleItemClick,
    handleInputChange,
    handleBlur,
    filteredOptions,
    setShowDropdown,
    setSelectedItem,
  };
}