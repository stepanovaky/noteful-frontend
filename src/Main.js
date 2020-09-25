import React, {useState, useContext } from 'react';
import NoteContext from './NoteContext';
import { Link } from 'react-router-dom';

function Main() {
    const notes = useContext(NoteContext)
    

    return (<div>
        {console.log(notes.map(note=><li>{note}</li>))}
    </div>)
}

export default Main;