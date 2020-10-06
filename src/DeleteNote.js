import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import NoteContext from './NoteContext';


function DeleteNote(props) {

    const noteData = useContext(NoteContext);

    const [ note, setNote ] = useState();

    const { noteId } = props;

    const deleteData = async (noteId) => {
        const settings = {
            method: 'DELETE'
        }
        const deleted = await fetch(`http://localhost:8000/note/${noteId}`, settings);
        const newNoteList = noteData.filter(note => note.id !== noteId)
        setNote(newNoteList);
        return deleted;
       
    }


    return(
        <button type="button" className="delete side" onClick={() => deleteData(noteId)}><Link to="/">Remove</Link></button>
    )
}

export default DeleteNote;