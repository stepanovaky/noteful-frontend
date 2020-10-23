import React from 'react';
import { Link } from 'react-router-dom';
import './AddFolderButton.css';

function AddFolderButton() {
    return(<Link to="/addfolder"><button id="add-button" type="button" value="add-folder">New Folder</button></Link>  )
}

export default AddFolderButton;