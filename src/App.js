import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import RenderFolder from './RenderFolder';
import RenderNote from './RenderNote';
import Main from './Main';
import { FolderProvider } from './FolderContext';
import { NoteProvider } from './NoteContext';
import Nav from './Nav';

function App() {
  useEffect(() => {
    fetchData();
  }, []);

  const [notes, setNotes] = useState({});
  const [folders, setFolders] = useState({})

const fetchData = async () => {
  const foldersData = await fetch('http://localhost:8000/foldersfetch');
  const folderItems = await foldersData.json();

  const notesData = await fetch('http://localhost:8000/notesfetch');
  const notesItems = await notesData.json();
  console.log(folderItems);
  console.log(notesItems);
  setNotes(notesItems);
  setFolders(folderItems);
}

  return (
    <div className="App">
      <NoteProvider value={notes}>
        <FolderProvider value={folders}>
          <Nav />
          <Route exact path="/" component={Main} />
          <Route path="/folder/:id" component={RenderFolder} />
          <Route path="/note/:id" component={RenderNote} />
        </FolderProvider>

      </NoteProvider>
      
    </div>
  );
}

export default App;
