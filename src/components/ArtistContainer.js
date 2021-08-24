import React, {useEffect, useState} from 'react'
import {BASE_URL} from '../constraints/index.js'
import Artist from './Artist.js'
import ArtistForm from './ArtistForm.js'

export default function ArtistContainer() {

const[artists, setArtists] = useState(null)

useEffect(() => {
    fetch(BASE_URL + 'artists')
    .then(res => res.json())
    .then(json => setArtists(json))
}, [])

function populateArtists() {
    return artists.map(artist => <Artist artist={artist} deleteArtist={deleteArtist} updateArtist={updateArtist} key={artist.id}/>)
}
function createArtist(artist) {
    fetch(BASE_URL + 'artist', {
        method: "POST",
        body: JSON.stringify(artist),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(json => setArtists([...artists, json]))
}
function updateArtist(artist) {
    fetch(BASE_URL + 'artists/' + artist.id, {
        method: "PATCH",
        body: JSON.stringify(artist),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
    const newArtists = artists.map(a => {
        if (a.id === artist.id) {
            a = artist
        }
        return a
    })
    setArtists(newArtists)
}
function deleteArtist(artist) {
    fetch(BASE_URL + 'artists/' + artist.id, {
        method: "DELETE"
    })
    const newArtists = artists.filter(a => a.id !== artist.id)
    setArtists(newArtists)
}
    return (
        <div>
            {artists && populateArtists()}
            <ArtistForm createArtist={createArtist} />
        </div>
    )
}