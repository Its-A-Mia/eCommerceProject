import {
  Alert,
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileActions } from "../store/profile-slice";

export default function PersonalInformation() {
  const dispatch = useDispatch();

  // grab states from redux
  const showNewNameError = useSelector((state) => state.profile.showNewNameError);
  const newNameHelperText = useSelector((state) => state.profile.newNameHelperText);

  // grab name input
  const [newName, setNewName] = useState(null);

  // catch error output states
  const [updateErr, setUpdateErr] = useState(null);
  const [errSeverity, setErrSeverity] = useState(null);

  const handleUpdate = async () => {
    try {
      const response = await axios.patch("/api/user", {
        newName,
        toUpdate: "name",
      });

      setTimeout(() => location.reload(), 2000);
      setUpdateErr("Update Successful!");
      setErrSeverity("success");
    } catch (error) {
      setUpdateErr(error.request.response);
      setErrSeverity("error");
    }
  };

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
      <Button variant="contained" onClick={() => handleUpdate()} sx={{ width: "100px" }}>
        Update
      </Button>
      {!updateErr ? null : <Alert severity={errSeverity}>{updateErr}</Alert>}
    </Box>
  );
}
