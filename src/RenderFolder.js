import React, { useState, useEffect, useContext } from 'react';
import FolderContext from './FolderContext';


function RenderFolder(props) {

    const [ folder, setFolder ] = useState([]);
    const folderData = useContext(FolderContext);
    
    
    const folderId = props.match.params.id;
    
    useEffect(() => {
        retrieveData()

    }, [])

    const retrieveData = () => {
        const findFolder = folderData.find(folder => folder.id === folderId);
        console.log(findFolder);
        setFolder(findFolder);
    }

    return(
        <div>
            {console.log(folder)}
            {console.log(folderData)}
            {console.log(folderId)}
        </div>
    )
}

export default RenderFolder;