import React from 'react'
import UserChoiceButton from '../Components/UserChoiceButton/UserChoiceButton';
import Card from '../Components/Card/Card';

import SortPopup from '../Components/SortPopup/SortPopup';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';

function Home() {

  const dispatch = useDispatch();

  const items = useSelector(({pizzas}) => pizzas.items);
  console.log(items)


      const flags = new Set();
     const newCategories = items.filter(entry => {   // новый массив с уникальными категориями для UserChoiceButton
         if (flags.has(entry.category)) {
             return false;
         }
         flags.add(entry.category);
         return true;
     });
  return (<>
    <div className="user-choice">
        <div className="user-choice__btns">
          <UserChoiceButton categories={newCategories} />
        </div>
        <SortPopup items={[
        {name:'популярности', type: 'popular'}, 
        {name:'цене', type: 'price'}, 
        {name:'алфавиту', type:'alphabet'}]}/>
      </div>

      <div className="content">
          <ul className="pizza-list">
          {items && items.map(item=>
          <Card 
          id={item.id}
          title={item.title} 
          price={item.price} 
          url={item.url}
          key={`${item.title}_${item.price}`}
          types={item.types}
          sizes={item.sizes}
          />)}
          </ul>

    </div>
    </>
  )
}

export default Home