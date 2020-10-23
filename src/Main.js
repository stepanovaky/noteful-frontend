import React, { useContext } from 'react';
import NoteContext from './NoteContext';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import FolderContext from './FolderContext';
import './All.css';
import DeleteNote from './DeleteNote';
import AddNoteButton from './AddNoteButton';
import AddFolderButton from './AddFolderButton';


function Main(props) {
    const notes = useContext(NoteContext);
    const folders = useContext(FolderContext);

   const countNotesForFolders = (notes=[], folderId) => {
       return notes.filter(note => note.folderid === folderId).length

   }

    const notesList = notes.map(note => 
    <li key={note.id}><Link to={`/note/${note.id}`}>{note.name}</Link> <span className="date">Modified <Moment format="Do MMM YYYY">{note.modified}</Moment></span><DeleteNote setNotes={props.setNotes} noteId={note.id} /> </li>);

    const foldersList = folders.map(folder =>
        <li key={folder.id}><Link to={`/folder/${folder.id}`}>{folder.name} <span className="folder-note-count">{countNotesForFolders(notes, folder.id)}</span></Link></li>
        )
    

    return (<div className="lists">
        <ul className="main-folders">
            {foldersList}
        </ul>
        <ul className="main-notes">
            {notesList}
        </ul>
        <AddFolderButton />
        <AddNoteButton />
    </div>)
}

export default Main; 