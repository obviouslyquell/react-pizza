import './App.css';
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';
import UserChoiceButton from './Components/UserChoiceButton/UserChoiceButton';
import SortPopup from './Components/SortPopup/SortPopup';


function App() {

  const arr = [
    {title:'Чизбургер-пицца',
    price:395,
    url:'img/1.png',
    category:'Мясные'},
    {title:'Сырная',
    price:456,
    url:'img/2.png',
    category:'Вегетерианская'},
    {title:'Креветки по-азиатски',
    price:745,
    url:'img/3.png',
    category:'Мясные'},
    {title:'Сырный цыпленок',
    price:444,
    url:'img/4.png',
    category:'Гриль'}
  ]

  let curCategories = arr.filter(function(entry) {    // создается новый отфильтрованный массив с уникальными категориями
    if (arr[entry.category]) {
        return false;
    }
    arr[entry.category] = true;
    return true;
    
});
  return (
    <div className="container">
      <Header/>

      <div className="user-choice">
        <div className="user-choice__btns">
          <UserChoiceButton categories={curCategories}/>
        </div>
        <SortPopup items={['популярности', 'цене', 'алфавиту']}/>
      </div>

      <div className="content">
        <ul className="pizza-list">
          {arr.map(item=>
          <Card 
          title={item.title} 
          price={item.price} 
          url={item.url}
          key={`${item.title}_${item.price}`}/>)}
        </ul>
      </div>
    </div>
  );
}

export default App;




