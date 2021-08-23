import React from 'react'

export default function Artist({artist}) {
    return (
        <div>
            <br />
                {artist.name}
                {artist.interests}
                {artist.date}
            <br />
        </div>
    )
}