import React,{useState} from 'react';
import {AllNotes} from './components/AllNotes';
import './App.css';


const App = () => {

  return (
  <div className='background'>
    <h1 className='title'>Simple Notes!</h1>
    <div className='app-wrapper'>
      <AllNotes />
    </div>
  </div>  );
}
 
export {App};
