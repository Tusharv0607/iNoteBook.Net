import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from "../context/noteContext";
import AddNote from './AddNote';
import NoteItems from './NoteItems';
import { useNavigate } from 'react-router-dom';

const Notes = () => {

  const context = useContext(noteContext);
  const { notes, getNotes, updateNote } = context;
  let navigate = useNavigate();


  useEffect(() => {
    if(localStorage.getItem('token')){
    getNotes();
    }
    else{
    navigate('/Login');
  }
    // eslint-disable-next-line
  }, [])

  const [note, setNote] = useState({upTitle: "", upDescription: "", upTag: "" })
  const ref = useRef(null);
  const refClose = useRef(null);

  const editNote = (currentNote) => {
    ref.current.click();
    setNote({id: currentNote._id, upTitle: currentNote.title, upDescription: currentNote.description, upTag:currentNote.tag})
  }

  const handleSubmit = (e) => {
    updateNote(note.id, note.upTitle, note.upTag, note.upDescription );
    refClose.current.click();
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <>
      <AddNote />
      <div className='container allNotes my-3'>
        <div className='row'>
          <h3 className='subHead m-3'>Your Notes</h3>
          <div className='mx-3 nullCase'>
          {notes.length === 0 && 'Add your first note ;)'}
          </div>
          {notes.map((note) => {
            return <NoteItems key={Math.random()} editNote={editNote} note={note} />;
          })}
        </div>
      </div>
      <div>
        <div className="btn" ref={ref} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        </div>

        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Update Note</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="upTitle" className="form-label">Title</label>
                    <input type="text" className="form-control" id="upTitle" name="upTitle" aria-describedby="emailHelp" value={note.upTitle} onChange={onChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="upDesc" className="form-label">Description</label>
                    <input type="text" className="form-control" id="upDescription" name="upDescription" value={note.upDescription} onChange={onChange} />
                  </div>
                  <div className='mb-3'>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="upTag" id="inlineRadio1" value="Priority"  onChange={onChange} />
                      <label className="form-check-label" htmlFor="upTag">Priority</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="upTag" id="inlineRadio2" value="Work" onChange={onChange} />
                      <label className="form-check-label" htmlFor="upTag">Work</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="upTag" id="inlineRadio3" value="Personal" onChange={onChange} />
                      <label className="form-check-label" htmlFor="upTag">Personal</label>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Notes