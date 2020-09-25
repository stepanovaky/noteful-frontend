import React, { useState, useEffect } from 'react';

function App() {
  useEffect(() => {
    fetchData();
  }, []);

const fetchData = async () => {
  const folders = await fetch('http://localhost:8000/foldersfetch');
  const folderItems = await folders.json();

  const notes = await fetch('http://localhost:8000/notesfetch');
  const notesItems = await notes.json();
  console.log(folderItems);
  console.log(notesItems);
}



  return (
    <div className="App">
     
    </div>
  );
}

export default App;
