import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateToys = () => {
    const {id} = useParams()
    console.log(id);

    const [toys, setToys] = useState({})
    useEffect( () =>{
        fetch(`http://localhost:5000/update/${id}`)
        .then(res=> res.json())
        .then(data => {
            console.log(data);
        })
    } ,[])

    return (
        <div>
            <h2>Updatinggggggggg</h2>
        </div>
    );
};

export default UpdateToys;