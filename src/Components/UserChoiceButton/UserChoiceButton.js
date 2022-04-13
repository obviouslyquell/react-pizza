import React from 'react'

function UserChoiceButton(props) {
    let {category} = props
    console.log(category)
  return (
    <button className='Light'>{category}</button>
  )
}

export default UserChoiceButton