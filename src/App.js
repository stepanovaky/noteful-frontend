import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import RenderFolder from './RenderFolder';
import RenderNote from './RenderNote';
import Main from './Main';
import { FolderProvider } from './FolderContext';
import { NoteProvider } from './NoteContext';
import Nav from './Nav';
import './All.css';
import AddNote from './AddNote';
import AddFolder from './AddFolder';

function App() {
  useEffect(() => {
    fetchData();
  }, []);

  const [notes, setNotes] = useState([]);
  const [folders, setFolders] = useState([])

const fetchData = async () => {
  const foldersData = await fetch('https://notefulbackend.herokuapp.com/foldersfetch');
  const folderItems = await foldersData.json();

  const notesData = await fetch('https://notefulbackend.herokuapp.com/notesfetch');
  const notesItems = await notesData.json();
  setNotes(notesItems);
  setFolders(folderItems);
}

  return (
    <div className="App">
      <NoteProvider value={notes}>
        <FolderProvider value={folders}>
          <Nav />
          <Route exact path="/" render={props => <Main  setNotes={setNotes} />} />
          <Route path="/folder/:id" render={props => <RenderFolder {...props} setNotes={setNotes} />} />
          <Route path="/note/:id" render={props => <RenderNote {...props} setNotes={setNotes} />} />
          <Route path="/addnote" render={props=> <AddNote setNotes={setNotes} />} />
          <Route path="/addfolder" component={AddFolder} />
        </FolderProvider>

      </NoteProvider>
      
    </div>
  );
}

export default App;
