import axios from 'axios';
import React, {useState, useEffect} from 'react';

function DeleteSource(props){

    const id = props.match.params.id;

    function DeleteForm(){

        axios.delete(`http://localhost:4000/sources/AllSources/delete/` + id).then(
            (response) => {console.log(response)}
        ).catch(
            err => {
                console.log(err);
            }
        )
    }


    return (

        <div>
            <button onClick={DeleteForm}>Delete Source info</button>
        </div>

    );

}

export default DeleteSource;