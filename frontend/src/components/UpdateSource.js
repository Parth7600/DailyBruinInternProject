import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';

function UpdateSource(props){

    let history = useHistory();
    const [Name, setName] = useState("")
    const [Organization, setOrganization] = useState("")
    const [Phones, setPhones] = useState("")
    const [Emails, setEmails] = useState("")
    const [Notes, setNotes] = useState("")
    const id = props.match.params.id;

    function UpdateForm(){

        axios.put(`http://localhost:4000/sources/AllSources/update/` + id,
        {
            name : Name,
            organization : Organization,
            phones : Phones,
            emails : Emails,
            notes : Notes
        }).then(
            (response) => {console.log(response)}
        ).catch(
            err => {
                console.log(err);
            }
        )
        history.push('/');
    }


    return (

        <div>
            <label>Name:</label> <input onChange={(e) => setName(e.target.value)}/>
            <label>Organization:</label> <input onChange={(e) => setOrganization(e.target.value)}/>
            <label>Phones:</label> <input onChange={(e) => setPhones(e.target.value)}/>
            <label>Emails:</label> <input onChange={(e) => setEmails(e.target.value)}/>
            <label>Notes:</label> <input onChange={(e) => setNotes(e.target.value)}/>
            <button onClick={UpdateForm}>Update Source info</button>
        </div>

    );

}

export default UpdateSource;