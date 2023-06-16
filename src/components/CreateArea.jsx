import React, { useState } from "react";
import Input from "./Input";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  
  const [bool,setBool]=useState(false);
  const [row,setRow]=useState(1);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function displayNote(){
    setBool(true);
    setRow(3);
  }

  return (
    <div>
      <form className="create-note">
        
        <Input
          bool={bool}
          handleChange={handleChange} 
          value={note.title}
        />

        <textarea
          name="content"
          onClick={displayNote}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={row}
        />

        <Zoom in={bool}>
          <Fab onClick={submitNote}><NoteAddIcon></NoteAddIcon></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
