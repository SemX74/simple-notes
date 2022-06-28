import React,{useState} from 'react';

const AllNotes = () => {
    const [titleValue, setTitleValue] = useState('');
    const [infoValue, setInfoValue] = useState('');
    const [error, setSrror] = useState('');

    const handleTitle = ({target}) => {
        setTitleValue(target.value)
    }
    const handleInfo = ({target}) => {
        setInfoValue(target.value)
    }


    const [notes, setNotes] = useState([]);

    const IfEmpty  = () =>{
        if(notes.length === 0){return(<h1>No notes yet. Add one !</h1>)}
}

    const handleAdd = () => {
        if (titleValue === ''){setSrror('title is empty!'); return}
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        setNotes((prev) => [...prev,{
            title:`${titleValue}`,
            info:`${infoValue}`,
            date:"today"+ ', ' + time
        }])
        setTitleValue('')
        setInfoValue('')
    };

    
    return (
        <>
            <input onChange={handleTitle} value={titleValue}/>
            <textarea onChange={handleInfo} value={infoValue}/>
        
            {IfEmpty()}
            <ul>
            {notes.map((note,id) => 
                <li id={id}key={note.id}className='note'>
                    <h1 className='note_title'><span># {id}</span>{note.title}</h1>
                    <p className='note_info'>{note.info}</p>
                    <p className='note_date'>{note.date}</p>
                </li>)}
            </ul>

        <button className='note_add' onClick={handleAdd}></button>
    
        </>
      );
}
 
export {AllNotes};