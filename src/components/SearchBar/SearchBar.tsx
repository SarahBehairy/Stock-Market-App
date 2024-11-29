import React from "react";
import { IconButton, TextField } from "@mui/material";
import { useAppStore } from "../../store/AppStore";
import { useDebounce } from "../../hooks/useDebounce";
import CloseIcon from '@mui/icons-material/Close';

const SearchBar: React.FC = () => {
  const setSearch = useAppStore((state) => state.setSearch);
  const [searchInput, setSearchInput] = React.useState("");
  const debouncedSearch = useDebounce(searchInput, 300);

  React.useEffect(() => {
    setSearch(debouncedSearch); 
  }, [debouncedSearch, setSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchInput("");
    setSearch("");
  };

  
  return (
    <TextField    
      fullWidth
      placeholder="search"
      variant="outlined"
      onChange={handleInputChange}
      value={searchInput}
      InputProps={{
        endAdornment: searchInput && (
          <IconButton
            aria-label="clear-search-btn"
            edge="end"
            sx={{ visibility: searchInput ? 'visible' : 'hidden' }}
            onClick={handleClearSearch}
          >
            <CloseIcon  />
          </IconButton>
        ),
      }}
      sx={{
        input: { color: 'inherit' },
        '& .MuiOutlinedInput-root': {
          backgroundColor: (theme) => theme.palette.background.paper,
          borderRadius: '8px',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: (theme) => theme.palette.primary.main,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: (theme) => theme.palette.primary.main,
            borderWidth: '2px',
          }
        },
        '& .MuiOutlinedInput-input': {
          padding: '14px',
          fontSize: '1rem',
          '&::placeholder': {
            color: (theme) => theme.palette.text.primary,
            opacity: 0.8,
          }
        },
        width: { xs: '100%', md: '50%' }      }}
    />
  );
};

export default SearchBar;