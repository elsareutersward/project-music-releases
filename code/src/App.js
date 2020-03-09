import React from 'react'
import data from './data.json'
import { Album } from './Album'


export const App = () => {
  return (
    <div>
      <h1>New albums & singles</h1>
      <div className="Page">
        {data.albums.items.map((album) => {
          return ( <Album 
          image={album.images[1].url}
          key={album.artists}      
          name={album.artists}
          title={album.name}
          url={album}
          />
         
        )}
        )}
      </div>
    </div>
  )
}
