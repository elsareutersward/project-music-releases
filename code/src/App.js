import React from 'react'
import data from './data.json'
import { Album } from './Album'
import { Artist } from './Artist'

console.log(data)

export const App = () => {
  return (
    <div>
    <h1>New albums & singles</h1>
    <div className="Page">
      {data.albums.items.map((album) => {
        return ( <Album 
        image={album.images[1].url}
        key={album.artists[0].name}      
        name={album.artists[0].name}
        title={album.name}
        />
      )}
      )}
       </div>
      </div>
  )
}
