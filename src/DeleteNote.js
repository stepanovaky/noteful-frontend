import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import NoteContext from './NoteContext';


function DeleteNote(props) {
    const history = useHistory();

    const noteData = useContext(NoteContext);

    const { noteId } = props;

    const deleteData = async (noteId) => {
        const settings = {
            method: 'DELETE'
        }
        const deleted = await fetch(`https://notefulbackend.herokuapp.com/note/${noteId}`, settings);
        const newNoteList = noteData.filter(note => note.id !== noteId)
        props.setNotes(newNoteList);
       
        
       
    }


    return(
        <button type="button" className="delete side" onClick={() => deleteData(noteId)}><Link to="/">Remove</Link></button>
    )
}

export default DeleteNote;