import React from 'react';
import AddNoteBar from './components/AddNoteBar';
import Note from './components/Note';


export default function Board({id, title, notes,handleAddNote,handleDeleteNote }) { //add some kind of token


    return (
        <div className='board-parent'>
        <div className='board'>
          
            {notes.map((note) => 
            (   
                
                <Note key={note.id}
                 id={note.id}
                 title={note.title}
                 content={note.content}
                 color= {note.color}
                 date={note.date}
                 posX = {note.posX}
                 posY={note.posY}
                    deleteNote = {handleDeleteNote}
                />
            )
            )}

        </div>
        
        <AddNoteBar handleAddNote={handleAddNote}></AddNoteBar>
       </div>
    )
}
