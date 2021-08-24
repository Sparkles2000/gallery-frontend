import React, {useState} from 'react'

export default function Artist({artist, deleteArtist, updateArtist}) {
    const [newArtist, setNewArtist] = useState({...artist})
    const [editMode, setEditMode] = useState(false)

    function handleChange(e) {
        const updatedValue = {...newArtist}
        updatedValue[e.target.name] = e.target.Value
        setNewArtist({...updatedValue})
    }

    function toggleEdit() {
        setEditMode(!editMode)
    }

    function handleUpdate(e) {
        e.preventDefault()
        updateArtist(newArtist)
    }

    return (
        <div>
            <br />
                <p>{artist.name}</p>
                <p>{artist.interests}</p>
                <p>{artist.Established}</p>

                {
                    editMode &&
                     <>
                        <button onClick={() =>deleteArtist(artist)}>Delete Artist</button>
                
                        <form onSubmit={handleUpdate}>
                            <input name="name" value={newArtist.name} onChange={handleChange}/>
                            <input name="interests" value={newArtist.interests} onChange={handleChange}/>
                            <input name="established" value={newArtist.established} onChange={handleChange}/>
                            <button type="submit">Update Artist</button>
                        </form>
                    </>
                }
            <br />
        </div>
    )
}