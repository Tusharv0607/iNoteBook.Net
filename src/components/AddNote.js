import React, { useContext, useState } from 'react'
import noteContext from "../context/noteContext";

const AddNote = () => {

    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const handleSubmit = (e) => {
       e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""});
        
        document.getElementById('title').value = "";
        document.getElementById('description').value ="";
        document.getElementById('radioBtn0').checked=false;
        document.getElementById('radioBtn1').checked=false;
        document.getElementById('radioBtn2').checked=false;
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="accordion my-3" id="accordionExample">

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <h3 className='subHead mt-3'>Add Note</h3>
                        {/* <button className="accordion-button collapsed accordianBtn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        </button> */}
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapsed" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body mx-3">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="desc" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="description" name="description" onChange={onChange} />
                                </div>
                                <div className='mb-3'>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="tag" id="radioBtn0" value="Priority" onChange={onChange} />
                                        <label className="form-check-label" htmlFor="tag">Priority</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="tag" id="radioBtn1" value="Work" onChange={onChange} />
                                        <label className="form-check-label" htmlFor="tag">Work</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="tag" id="radioBtn2" value="Personal" onChange={onChange} />
                                        <label className="form-check-label" htmlFor="tag">Personal</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary submitBtn" onClick={handleSubmit}>Add Note</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddNote