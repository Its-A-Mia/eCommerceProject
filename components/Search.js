import { Grid, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import useDebouncer from "./customHooks/useDebouncer";

export default function Search() {
  const hiddenOnMobile = {
    display: { xs: "none", sm: "none", md: "flex" },
  };

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const debouncedQuery = useDebouncer(query);

  const searchDB = async (query) => {
    const results = await axios.get("/api/product", {
      params: { title: query, category: query },
    });
    return results.data.queriedProducts;
  };

  useEffect(() => {
    (async () => {
      if (!debouncedQuery) {
        return;
      }
      const data = await searchDB(debouncedQuery);
      setSuggestions(data);
      console.log(data);
    })();
  }, [debouncedQuery]);

  return (
    <>
      <Grid item md={5} sx={hiddenOnMobile}>
        <TextField
          onChange={(e) => setQuery(e.target.value)}
          id="filled-basic"
          label="Enter Item ID"
          fullWidth
          sx={{ background: "white" }}
        />
      </Grid>
    </>
  );
}
