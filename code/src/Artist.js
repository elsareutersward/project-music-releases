import React from 'react'

export const Artist = (props) => { 
    console.log(props)
    return (
        <div>
            Artist: {props.name}
        </div>
    )
} 

// export const Artist = (props) => {
//   return (
//     <span>{props.item.name} </span>
//   )
// }