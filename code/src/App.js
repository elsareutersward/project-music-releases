import React from 'react'
import data from './data.json'
import { Album } from './Album'

console.log(data)

export const App = () => {
  return (
    <div>
      {data.albums.items.map((album) => {
        return ( <Album key={album.artists[0].name} name={album.artists[0].name} 
        title={album.name}
        image={album.images[1].url}/>
        
      )})}
      
      console.log(album)
    </div>
  )
}
