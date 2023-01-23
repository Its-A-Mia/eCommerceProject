import { Grid, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Search() {
  const hiddenOnMobile = {
    display: { xs: "none", sm: "none", md: "flex" },
  };

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const searchDB = async (query) => {
    const results = await axios.get("/api/product", {
      params: { title: query, category: query },
    });

    return results.data.queriedProducts;
  };

  useEffect(() => {
    (async () => {
      if (!query) {
        return;
      }
      const data = await searchDB(query);
      setSuggestions(data);
      console.log(data);
    })();
  }, [query]);

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
