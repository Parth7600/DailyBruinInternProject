import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';

function SourceDetail(props){

    const source = props.source;
    return (
        <div className="row">
            <div className="column"><h3>Name</h3><p>{source.name}</p></div>
            <div className="column"><h3>Organization</h3><p>{source.organization}</p></div>
            <div className="column"><h3>Phones</h3><p>{source.phones}</p></div>
            <div className="column"><h3>Emails</h3><p>{source.emails}</p></div>
            <div className="column"><h3>Notes</h3><p>{source.notes}</p></div>
            <div className="column"><h3>ID</h3><p>{source.id}</p></div>
            <Link to={`/update/${source.id}`}>Update</Link>
            <br/>
            <Link to={`/delete/${source.id}`}>Delete</Link>
        </div>
    )

}


function AllSources(props){

    const [sources, setSources] = useState([])
    useEffect(
        () => {axios.get('http://localhost:4000/sources/AllSources').then(
            (response)=>{setSources(response.data)}
        )
    }, []
    )

    return(
        <div>
            <h1>Sources</h1>
            <div>
                <Link to="/create"> New Source</Link>
            </div>
            {sources.map(source => <SourceDetail source={source}/>)}
            
        </div>
    )

}

export default AllSources;