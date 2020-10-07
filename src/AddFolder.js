// Create a new component AddFolder that implements a form to capture the name of a new folder from the user. This form should submit the name of the new folder to the POST /folders endpoint on the server. Ensure that any errors are properly handled. Add a button to the navigation to invoke the new form.
// Create a new component AddNote that implements a form to capture the name, content and folder for a new Note. Submit to the POST /notes endpoint on the server. Add validation to ensure that the name of the note is not left blank. The folder should be selected from a list of existing folders. Ensure that errors are properly handled. Add a button to the note list page to invoke this new form.
// Define an error boundary component. Add this component to specific points in your component structure.
// Review each of the components that you have built so far for this project. Any component that receives props from its parent should be refactored to define PropType

import React from 'react';
import uuid from 'react-uuid';
import './AddFolder.css';

function AddFolder(props) {

 


    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const newFolder = {
            id: uuid(),
            name: event.target['folder-name'].value
        }

        

        const addFolder = await fetch(`http://localhost:8000/foldersfetch/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFolder)
        })

        return addFolder;

    }

       

    return(
        <form className="add-folder" onSubmit={handleSubmit}  >
            <label>
                Add Folder:
                <input type="text" name="folder-name" />
            </label>
            <button type="submit" value="submit" >Submit</button>
        </form>
    )
}

export default AddFolder;