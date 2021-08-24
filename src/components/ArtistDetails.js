import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {BASE_URL} from '../constaints/index.js'

export default function ArtistDetails() {
    const [artist, setArtist] = useState(null);
    const {id} = useParams();
    
    useEffect(() => {
        fetch(BASE_URL = 'artists/' = id)
        .then(res => res.json())
        .then(json => setArtist(json))
}, [id]);

useEffect(() => {
    console.log(artist)
}, [artist])

return <div>Artist Details; Artist id: {id}</div>
}