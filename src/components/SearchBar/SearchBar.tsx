import React from "react";
import { TextField } from "@mui/material";
import { useAppStore } from "../../store/AppStore";

const SearchBar: React.FC = () => {
  const setSearch = useAppStore((state) => state.setSearch);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <TextField
      fullWidth
      placeholder="Search stocks..."
      variant="outlined"
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;