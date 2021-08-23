import React, {useEffect, useState} from 'react'
import {BASE_URL} from '../constraints/index.js'

export default function ArtistContainer() {

const[artists, setArtists] = useState(null)

useEffect(() => {
    fetch(BASE_URL + 'artists')
    .then(res => res.json())
    .then(json => setArtists(json))
}, [])

useEffect(() => {
    console.log("Artists: ")
    console.log(artists)
}, [artists])

    return (
        <div>
       
        </div>
    )
}