import React from 'react'
import classNames from 'classnames'


function Card({title, price, url,types,id, sizes}) {
  const typeNames = ['тонкое', 'толстое']
  const sizeNames = ['26cм', '30см' ,'45см']
  const [activeType, setActiveType] = React.useState(types[0])
  const [activeSize, setActiveSize] = React.useState(sizes[0]);
  const onSelectType = (index) =>{
    setActiveType(index);
  }
  const onSelectSize = (index)=>{
    setActiveSize(index)
  }
  return (
    <li className="pizza-item">
            <img src={url} alt="" className="pizza-item__img" />
            <p className='pizza-item__title'>{title}</p>
            <div className="pizza-item__toggle">
              <ul className="pizza-item__toggle-dough">
                {typeNames.map((i,index)=><li 
                onClick={()=>onSelectType(index)} 
                className={
                  classNames({
                    'active':activeType===index,
                    'disabled':!types.includes(index)
                  })
                }
                key={`${index}_${id}`}
                >{i}</li>)}
              </ul>
              <ul className="pizza-item__toggle-diametr">
                {sizeNames.map((i,index)=>
                  <li
                  onClick={()=>onSelectSize(parseInt(i.match(/\d+/)))}    // regex вытаскивает число из строки в sizeNames
                  className={                                             // можно было сделать sizeNames массивом чисел [26,30,45],
                    classNames({                                          // и выводить в li число с добавлением см. ,
                      'active':activeSize===parseInt(i.match(/\d+/)),     // но так впадлу
                      'disabled':!sizes.includes(parseInt(i.match(/\d+/)))
                    })
                  }>{i}</li>
                )}
              </ul>
            </div>
            <div className="pizza-item__bottom">
            <div className="pizza-item__price">
              <p>от {price}Р</p>
            </div>
            <button className="pizza-item__amount-btn">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="#EB5A1E"/>
            </svg>
            <p className='pizza-item__amount__add-btn'>Добавить</p>
            <div className="pizza-item__amount-btn__amount">
              2
            </div>
            </button>
            </div>
          </li>
  )
}

export default Card



