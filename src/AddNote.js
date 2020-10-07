// Create a new component AddFolder that implements a form 
// to capture the name of a new folder from the user. This form 
// should submit the name of the new folder to the POST /folders 
// endpoint on the server. Ensure that any errors are properly 
// handled. Add a button to the navigation to invoke the new form.
// Create a new component AddNote that implements a form to 
// capture the name, content and folder for a new Note. Submit 
// to the POST /notes endpoint on the server. Add validation 
// to ensure that the name of the note is not left blank. The 
// folder should be selected from a list of existing folders. 
// Ensure that errors are properly handled. Add a button to 
// the note list page to invoke this new form.
// Define an error boundary component. Add this component to 
// specific points in your component structure.
// Review each of the components that you have built so far 
// for this project. Any component that receives props from its
//  parent should be refactored to define PropType

import React, { useContext } from 'react';
import uuid from 'react-uuid';
import FolderContext from './FolderContext';
import NoteContext from './NoteContext';
import { useHistory } from 'react-router-dom';
import './AddNote.css';


function AddNote(props) {
    const history = useHistory();
    const noteData = useContext(NoteContext);
    const folderData = useContext(FolderContext);
    

    const folderList = folderData.map(folder => <option value={folder.id} key={folder.id} name="folder-id">{folder.name}</option>)

    

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('this worked');
        // const e = document.getElementbyId

        
        // console.log(event.target['folder-id'].value)
        const newNote = {
            id: uuid(),
            name: event.target['note-name'].value, 
            modified: new Date(),
            content: event.target['note-content'].value,
            folderid: event.target['folders'].value
        }
        props.setNotes(noteData.concat(newNote))
        console.log(noteData.concat(newNote));
        

        const addNote = await fetch(`http://localhost:8000/notesfetch/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newNote)
        })

        history.push('/')

        

        return addNote;

    }

    return(
        <form className="add-note" onSubmit={handleSubmit}   >
            
            <label>
                Name:
                <input type="text" name="note-name" />
            </label>
            <label>
                Folder:
            <select name="folders" id="folders">
                {folderList}
            </select>
            </label>
            <label>
                Content:
                <input id="large-box" type="text" name="note-content" />
            </label>
            <button type="submit" value="submit">Submit</button>
        </form>
    )
}

export default AddNote;