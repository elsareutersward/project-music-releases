import React from 'react'
import data from './data.json'
import { Artist } from './Artist'
// import DotsSvg from '/project-music-releases/code



export const Album = (props) => {
    return (
      <div className="Card">
          <div className="Symbols">
              <div className="Like"><img src="heart.svg" alt="heart cion"/></div>
              <div className="Play"><img src="play.svg" alt="play icon"/></div>
              <div className="More"><img src="dots.svg" alt="dots icon"/></div>
          </div>
          <img src={props.image} alt="Album cover"></img>
          <div className="Title">{props.title}</div>
          <div className="Artist">{props.name}</div>       
      </div>
)
}