import { Typography } from "@mui/material";
import headerStyles from "../styles/Utils.module.css";

export default function ProductsTitle(props) {
  // category name, sort by, chips, grid/tile view, showing n1-n^n

  return (
    <>
      <Typography variant="h2" className={headerStyles.h2}>
        {props.categoryTitle}
      </Typography>
    </>
  );
}
