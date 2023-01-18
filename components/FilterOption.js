import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Checkbox,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Rating,
} from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterActions } from "../store/filter-slice";

export default function FilterOption(props) {
  const dispatch = useDispatch();

  const [openCollapse, setOpenCollapse] = useState(false);
  const [checked, setChecked] = useState([0]);

  const handleCheckboxToggle = (option, type) => {
    const currentIndex = checked.indexOf(option); //returns -1 if not in array
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(option);
      dispatch(filterActions.addFilter({ option, filterType: type }));
    } else {
      newChecked.splice(currentIndex, 1);
      dispatch(filterActions.removeFilter({ option, filterType: type }));
    }

    setChecked(newChecked);
  };

  // creates path for category links
  const categoryPath = (option) => {
    let path = null;
    if (option === "Shirts" || option === "Sweaters" || option === "Hoodies") {
      return (path = `/products/tops/${option.toLowerCase()}`);
    }
    return (path = `/products/bottoms/${option.toLowerCase()}`);
  };

  const collapseOptions = props.options.map((option) => {
    const type = props.listTitle.toLowerCase();

    return (
      <ListItem key={option} sx={{ padding: "0 0 0 30px" }}>
        {props.listTitle === "Category" ? (
          <Box p="5px 0">
            <Link
              href={`${categoryPath(option)}`}
              style={{ textDecoration: "none", fontSize: "16px" }}
            >
              {option}
            </Link>
          </Box>
        ) : (
          <>
            <ListItemIcon>
              <Checkbox
                edge="start"
                onClick={() => handleCheckboxToggle(option, type)}
                checked={checked.indexOf(option) !== -1}
                tabIndex={-1}
              />
            </ListItemIcon>

            {props.listTitle === "Rating" ? (
              <Rating value={option} readOnly />
            ) : (
              <ListItemText edge="end" primary={option} />
            )}
          </>
        )}
      </ListItem>
    );
  });

  return (
    <>
      <ListItemButton onClick={() => setOpenCollapse(!openCollapse)}>
        <ListItemText primary={props.listTitle} />
        {openCollapse ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openCollapse} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {collapseOptions}
        </List>
      </Collapse>
    </>
  );
}
