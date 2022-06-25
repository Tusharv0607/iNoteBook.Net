import noteContext from "./noteContext";
import React, { useState } from "react";

const NoteState = (props) => {

    const host = 'https://inotebook-serv.herokuapp.com';
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial);

    //------------------------------------------------------------------------------------------------------------------------------//
    //Get all notes
    const getNotes = async () => {

        const response = await fetch(`${host}/api/notes/fetchAll`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem("token")
            }
        });
        const json = await response.json();
        setNotes(json);
    };

    //------------------------------------------------------------------------------------------------------------------------------//
    //Add note
    const addNote = async (title, description, tag) => {

        const response = await fetch(`http://localhost/api/notes/addNotes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem("token")
            }, body: JSON.stringify({ title, description, tag })
        })

        const newNote = await response.json();
        if (response.status === 200) {
            props.showAlert("Added Successfully", "success")
            setNotes(notes.concat(Object.values(newNote)));
        }
        else if (response.status === 400) {
            props.showAlert("Enter all the details correctly!", "warning")
        }
        else {
            props.showAlert("Note wasn't added", "danger")
        }
    };
    //------------------------------------------------------------------------------------------------------------------------------//
    //Delete note

    const deleteNote = async (id) => {

        const response = await fetch(`${host}/api/notes/deleteNote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        if (response.status === 200) {
            const newNotes = notes.filter((note) => { return note._id !== id });
            setNotes(newNotes);
            props.showAlert("Note Deleted Successfully", "success")
        }
        else if (response.status === 401) {
            props.showAlert("Note not found", "warning")
        }
        else if (response.status === 404) {
            props.showAlert("Access Denied! Unable to delete.", "danger")
        }
        else {
            props.showAlert("Note not deleted", "danger")
        }
    }

    //------------------------------------------------------------------------------------------------------------------------------//
    //Update note

    const updateNote = async (id, title, tag, description) => {
        // -----------------------
        const response = await fetch(`${host}/api/notes/updateNote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }, body: JSON.stringify({ title: title, tag: tag, description: description })
        });

        console.log(response.status);
        if (response.status === 200) {
            props.showAlert("Note Updated Successfully", "success")
            const newNotes = JSON.parse(JSON.stringify(notes));
            for (let i = 0; i < notes.length; i++) {
                const element = notes[i];

                if (element._id === id) {

                    if (title !== "")
                        newNotes[i].title = title;

                    if (description !== "")
                        newNotes[i].description = description;

                    if (tag !== "")
                        newNotes[i].tag = tag;

                    break;
                }
            }
            setNotes(newNotes);
        }
        else if (response.status === 401) {
            props.showAlert("Note not found", "warning")
        }
        else if (response.status === 404) {
            props.showAlert("Access Denied! Unable to delete.", "danger")
        }
        else {
            props.showAlert("Note not deleted", "danger")
        }

    }

    return (
        <noteContext.Provider value={{ notes, getNotes, addNote, deleteNote, updateNote, setNotes }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;