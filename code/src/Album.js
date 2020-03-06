import React from 'react'


export const Album = (props) => {
  console.log(props)
    return (
      <div className="Card">
          Artist: {props.name} - Title: {props.title}
          <img src={props.image} alt="hej"></img>
      </div>
)
}