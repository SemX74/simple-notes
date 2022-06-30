import React from 'react';

const AddNote = ({handleTitle,handleInfo,infoValue, titleValue,setIsAdding,handleAdd,error}) => {
    return (
        <>
            <div className='note-add_btnwrapper'>
                <button className='note-add_goBack' onClick={() => handleAdd()} >← Save & Back</button>
                <p style={{color:'red'}}>{error}</p>
                <button className='note-add_delete' onClick={() => setIsAdding(false)} > Delete note</button>
            </div>

            <h2 style={{color:'gray',marginTop:'1em'}}>Title</h2>
            <input className='note-add_title' value={titleValue} onChange={handleTitle}/>
            <h3 style={{color:'gray'}}>Information</h3>
            <textarea className='note-add_info' value={infoValue} onChange={handleInfo} rows={10}/>
        </>
      );
}
 
export {AddNote};