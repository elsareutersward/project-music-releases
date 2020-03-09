import React from 'react'
import data from './data.json'
import { Artist } from './Artist'
// import DotsSvg from '/project-music-releases/code

export const Album = (props) => {
    const {name} = props
    return (
      <div className="Card">
          <div className="Symbols">
              <div className="Like"><img src="heart.svg" alt="heart cion"/></div>
              <div className="Play"><img src="play.svg" alt="play icon"/></div>
              <div className="More"><img src="dots.svg" alt="dots icon"/></div>
          </div>
          <img src={props.image} alt="Album cover"></img>
          <div className="Title"><a href={props.url.external_urls.spotify}>{props.title}</a></div>
          <div className="Artist">
              {name.map(artist => {
            return <a key={artist.name} href={artist.external_urls.spotify}> {artist.name} &nbsp;&nbsp;&nbsp; </a>
        })}</div>

      </div>
)
}


/* export const Album = (props) => {
    return (
      <div className="Card">
          <div className="Symbols">
              <div className="Like"><img src="heart.svg" alt="heart cion"/></div>
              <div className="Play"><img src="play.svg" alt="play icon"/></div>
              <div className="More"><img src="dots.svg" alt="dots icon"/></div>
          </div>
          <img src={props.image} alt="Album cover"></img>
          <div className="Title">{props.title}</div>
          {<div className="Artist">{props.name}</div>}

      </div>
)
}
 */
/* export const Wherever = (props) => { 
  console.log(props) 
  return (
    <div>
    
      {props.item.artists.map(item => {
        return (
          <Artist key={item.id} item={item} />
        
        )
      })}
    </div>
    
  )
} */