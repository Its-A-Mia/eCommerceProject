import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileActions } from "../store/profile-slice";

export default function PersonalInformation() {
  const dispatch = useDispatch();

  const showNewNameError = useSelector((state) => state.profile.showNewNameError);
  const newNameHelperText = useSelector((state) => state.profile.newNameHelperText);

  const [newName, setNewName] = useState(null);

  return (
    <Box display="flex" flexDirection="column" gap="10px" width="60%">
      <Typography>Update Your Name</Typography>
      <Divider />
      <FormControl size="small">
        <InputLabel>Name</InputLabel>
        <OutlinedInput
          id="update-name"
          label="Name"
          aria-label="Update your name"
          error={showNewNameError}
          onKeyUp={(e) => setNewName(e.target.value)}
          onBlur={() => dispatch(profileActions.newNameValidation({ newName }))}
        ></OutlinedInput>
        <FormHelperText disabled={showNewNameError} error>
          {newNameHelperText}
        </FormHelperText>
      </FormControl>
      <Button variant="contained" sx={{ width: "100px" }}>
        Update
      </Button>
    </Box>
  );
}
