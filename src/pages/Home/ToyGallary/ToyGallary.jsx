import React, { useEffect, useState } from 'react';

const ToyGallary = () => {
    const [heros, setHeros] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/allHeors')
        .then(res => res.json())
        .then(data => {
            setHeros(data)
        })
    } ,[])

    console.log(heros);




    return (
        <div>
            
        </div>
    );
};

export default ToyGallary;