import React, { useContext} from 'react'
import noteContext from "../context/noteContext";

const NoteItems = (props) => {
    const { note, editNote} = props;

    const context = useContext(noteContext);
    const { deleteNote } = context;

    return (
        <>

            <div className='col-12 col-sm-5 col-md-4 col-lg-3'>
                <div className="card m-3">
                    <div className="card-body">
                        <div className='card-content'>
                            <h5 className="card-title" >{note.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{note.tag}</h6>
                            <p className="card-text">{note.description}</p>
                        </div>
                        <div className='card-div'>
                            <button className="btn card-link1 " onClick={()=>deleteNote(note._id)}> <i className="fa-solid fa-trash"></i> delete</button>
                            <button className="btn card-link2" onClick={() => editNote(note)}> <i className=" fa-solid fa-file-pen"></i> update</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NoteItems