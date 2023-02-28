import { Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useDebouncer from './customHooks/useDebouncer';

export default function Search() {
  const hiddenOnMobile = {
    display: { xs: 'none', sm: 'flex', md: 'flex' },
  };

  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState('none');
  const debouncedQuery = useDebouncer(query);

  const searchDB = async (query) => {
    const results = await axios.get('/api/product', {
      params: { title: query, category: query },
    });
    return results.data.queriedProducts;
  };

  useEffect(() => {
    let ignore = false;
    (async () => {
      if (!debouncedQuery) {
        setSuggestions([]);
        return;
      }
      const data = await searchDB(debouncedQuery);
      if (data.length === 0) {
        setSuggestions([{ title: 'No Results Available', category: ' ' }]);
      } else {
        setSuggestions(data);
      }
    })();

    return () => {
      ignore = true;
    };
  }, [debouncedQuery]);

  return (
    <>
      <Grid item sm={6} md={6} lg={5} sx={hiddenOnMobile}>
        <Box width="100%" position="relative" zIndex="1">
          <TextField
            onFocus={() => setShowSuggestions('block')}
            onChange={(e) => setQuery(e.target.value)}
            onBlur={() => setTimeout(() => setShowSuggestions('none'), 100)} //ensures links will work
            id="filled-basic"
            label="Enter Item ID"
            fullWidth
            sx={{ background: 'white' }}
          />
          {suggestions.length !== 0 ? (
            <Box
              display={showSuggestions}
              position="absolute"
              top="100%"
              width="100%"
              maxHeight="440px"
              gap="18px"
              pb="8px"
              border="solid gray 1px"
              borderRadius="5px"
              sx={{ background: 'white', overflowY: 'scroll' }}
            >
              {suggestions.map((suggestion) => (
                <Box pl="8px" key={suggestion.id}>
                  {suggestion.id ? (
                    <Link href={`/products/${suggestion.id}`} style={{ textDecoration: 'none', color: '#5D82B3' }}>
                      <Typography>{suggestion.title}</Typography>
                      <Typography fontSize="small" color="gray">
                        {suggestion.category}
                      </Typography>
                    </Link>
                  ) : (
                    <>
                      <Typography>{suggestion.title}</Typography>
                      <Typography fontSize="small" color="gray">
                        {suggestion.category}
                      </Typography>
                    </>
                  )}
                </Box>
              ))}
            </Box>
          ) : null}
        </Box>
      </Grid>
    </>
  );
}
