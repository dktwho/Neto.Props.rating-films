


import React from 'react'
import Star from './Star'
const Stars = (props) => {

  if (props.count < 1 || props.count > 5|| props.count ===isNaN ) {
    return null
  }

  let arr = Array(props.count).fill(props.count)
  
  return (
    <ul className="card-body-stars u-clearfix">
      {arr.map((item, id) => (
        <li key={id}><Star>{id}</Star></li>
      ))}
    </ul>
  );


}

export default Stars
