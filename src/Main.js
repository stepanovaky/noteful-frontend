import React, { useContext } from 'react';
import NoteContext from './NoteContext';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import FolderContext from './FolderContext';

function Main() {
    const notes = useContext(NoteContext);
    const folders = useContext(FolderContext);

   

    const notesList = notes.map(note => 
    <li key={note.id}><Link to={`/note/${note.id}`}>{note.name}</Link> date modified <Moment format="MM/DD">{note.modified}</Moment> </li>);

    const foldersList = folders.map(folder =>
        <li key={folder.id}><Link to={`/folder/${folder.id}`}>{folder.name}</Link></li>
        )
    

    return (<div>
        <ul>
            {foldersList}
        </ul>
        <ul>
            {notesList}
        </ul>
    </div>)
}

export default Main;