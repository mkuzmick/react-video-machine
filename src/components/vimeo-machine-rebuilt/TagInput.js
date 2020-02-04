import React from 'react'

export default (props)=>{
  return (
    <div>
      <p>
        Type in a search term.
      </p>
      <input
        type="text"
        value={props.tagInput}
        onChange={event => props.addTag(event.target.value)}
      />
    </div>
  )
}
