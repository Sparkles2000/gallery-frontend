import React, {useState} from 'react'

export default function ArtistForm({createArtist}) {
    const [artist, setArtist] = useState({name: "", interests: "", established: ""})
    
    function handleChange(e) {
        const updatedValue = {...artist}
        updatedValue[e.target.name] = e.target.Value
        setArtist(updatedValue)
    }
    function handleSubmit(e) {
        e.preventDefault()
        createArtist(artist)
    }
    return (
        <div>
            <h2>Add New Artist To Display On Venue</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" value={artist.name} onChange={handleChange} />
                <input name="interests" value={artist.interests} onchange={handleChange} />
                <input name="established" value={artist.established} />
                <button type="submit">Update Venue</button>
            </form>

        </div>
    )
}