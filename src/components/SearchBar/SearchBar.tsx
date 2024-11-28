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
      placeholder="Search stocks..."
      variant="outlined"
      onChange={handleInputChange}
      value={searchInput}
      InputProps={{
        endAdornment: searchInput && (
          <IconButton
            onClick={handleClearSearch}
            edge="end"
            sx={{ visibility: searchInput ? 'visible' : 'hidden' }}
          >
            <CloseIcon />
          </IconButton>
        ),
      }}
      sx={{
        margin: '20px 0',
        '& .MuiOutlinedInput-root': {
          backgroundColor: '#ffffff', 
          borderRadius: '8px',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#1976d2',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#1976d2',
            borderWidth: '2px',
          }
        },
        '& .MuiOutlinedInput-input': {
          padding: '14px',
          fontSize: '1rem',
          '&::placeholder': {
            color: '#666',
            opacity: 0.8,
          }
        },
        width: { xs: '100%', md: '50%' }
      }}
    />
  );
};

export default SearchBar;