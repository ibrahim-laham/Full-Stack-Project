import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import {useDispatch} from "react-redux"
import {albumsActions} from "../../redux/slices/albums"
import Button from "@mui/material/Button";


type Prop = {
  userInput: string
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
}

export default function AlbumsForm({userInput,setUserInput}:Prop) {
  const dispatch = useDispatch();

  function searchChangeHandler (e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(e.target.value)
  }

  function searchClickHandler () {
    dispatch(albumsActions.searchAlbums(userInput))
  }
  
  
  return (
    <Box component="form" noValidate autoComplete="off" sx={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%"}} >
      <TextField
        id="filled-search"
        label="Search Album"
        type="search"
        value={userInput}
        variant="filled"
        onChange={searchChangeHandler}
        sx={{marginRight: "5%"}}
      />
      <Button onClick={searchClickHandler} size="large" variant="contained">Search</Button>
    </Box>
  );
}
