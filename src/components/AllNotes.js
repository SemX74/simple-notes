import React,{useState} from 'react';

const AllNotes = ({IfEmpty,notes,setIsAdding,handleDelete}) => {
    return (
        <>
            {IfEmpty()}
            <ul>
            {notes.map((note,id) => 
                <li id={note.id} key={id} className='note'>
                    <h1 className='note_title'><span># {id}</span>{note.title}</h1>
                    <p className='note_info'>{note.info}</p>
                    <div className='note_btnwrapper'>
                        <p className='note_date'>{note.date}</p>
                        <button className='note_edit'>Edit</button>
                        <button className='note_delete' onClick={() => handleDelete(id)}>Delete</button>
                    </div>

                </li>)}
            </ul>

        <button onClick={() => setIsAdding(true)}className='note_add'></button>
    
        </>
      );
}
 
export {AllNotes};