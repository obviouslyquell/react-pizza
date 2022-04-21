import React from 'react'

function UserChoiceButton({categories}) {
  let [activeItem, setActiveItem] = React.useState(null)
  const onSelectItem = (index) =>{
    setActiveItem(index);
  }
  return (<>
  <button className={activeItem===null?'dark-btn':'light-btn'} onClick={() => onSelectItem(null)}>Все</button>
        {categories.map((i,index)=>
        <button 
        onClick={()=>onSelectItem(index)} 
        className={activeItem===index? 'dark-btn' : 'light-btn'}
        key={`${i}_${index}`}>{i.category}</button>)}
  </>
    
  )
}

export default UserChoiceButton