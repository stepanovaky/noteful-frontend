import React, { useState, useEffect, useContext } from 'react';
import FolderContext from './FolderContext';


function RenderFolder(props) {

    const [ folder, setFolder ] = useState([]);
    const folderData = useContext(FolderContext);
    
    
    const folderId = props.match.params.id;
    
    useEffect(() => {
        retrieveData()

    }, [folder])

    const retrieveData = () => {
        const findFolder = folderData.find(f => f.id === folderId);
        console.log(findFolder);
        useMemo(() => {return setFolder(findFolder)})
    }

    // folder ? folder.name:'No folder name'

    return(
        <div>
            {console.log(folder)}
        </div>
    )
}

export default RenderFolder;