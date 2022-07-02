import React,{useState} from 'react';
import { AllNotes } from './components/AllNotes';
import { AddNote } from './components/AddNote';
import Switch from "react-switch";
import './App.css';


const App = () => {
  // Theme switcher
  const [theme, setTheme] = useState('light');
  const toggleTheme = () =>{
    setTheme((prev) => prev === 'light' ? 'dark' : 'light')
  }

  const [isAdding, setIsAdding] = useState(false); // what`s the page
  
  const [titleValue, setTitleValue] = useState(''); // value of titleInput
  const handleTitle = ({target}) => setTitleValue(target.value);
  
  const [infoValue, setInfoValue] = useState(''); // value of textInput
  const handleInfo = ({target}) => setInfoValue(target.value);
  
  const [error, setError] = useState(''); // if title is empty
  const IfEmpty  = () =>{
    if(notes.length === 0){return(<h1>No notes yet. Add one !</h1>)}
  } 
  
  const [notes, setNotes] = useState([]); //all notes
  const handleAdd = () => {
    if (titleValue === '' && infoValue){setError('title is empty!'); return} // if title is empty
    if (titleValue === ''&& infoValue === ''){setIsAdding(false);setError('');return}
    if (titleValue.length > 27 ){setError('title is too long!');return} // if title is empty
      const today = new Date();      //getting date
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

      setNotes((prev) => [...prev,{
          title:`${titleValue}`,
          info:`${infoValue}`,
          date:"today"+ ', ' + time
      }])
      setIsAdding(() => false)
      setTitleValue('') //reseting 
      setInfoValue('')  // inputs
      setError('')
  };

  const handleDelete = (ID) => {
    let filteredNotes = notes.filter((item,index) => index !== ID) //new array
    setNotes(() => filteredNotes)
  }
  const handleEdit = (ID) => {
    let editNote = notes[ID]; // gets this element
    setTitleValue(editNote.title) // remembers info
    setInfoValue(editNote.info)
    notes.splice(ID); // deleting element
    setIsAdding(() => true) // opens adding menu
    //when you exit adding menu the note saves as new by default(watch line 30)
  }
  return(
    <div className='background' id={theme}>
      <h1 className='title'>Simple Notes!</h1>
      <label>{theme} theme</label>
      <Switch className='switch' onChange={toggleTheme} checked={theme==='dark'}/>
      <div className='app-wrapper'>
        {isAdding && 
        <AddNote 
        handleTitle={handleTitle}
        titleValue={titleValue}
        handleInfo={handleInfo}
        infoValue={infoValue}
        setIsAdding={setIsAdding}
        handleAdd={handleAdd}
        error={error}/>}  

        {!isAdding &&<AllNotes
        IfEmpty={IfEmpty}
        notes={notes}
        handleAdd={handleAdd}
        setIsAdding={setIsAdding}
        handleDelete={handleDelete}
        handleEdit={handleEdit}/>}
      </div>
    </div>
  )  ;
}
 
export {App};
