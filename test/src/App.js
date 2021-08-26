
import './App.css';
import TodoItem from './component/TodoItem'
import { Component } from 'react';

class App extends Component{
  constructor(){
    super()
    this.ItemList = [
      {title:'go to School'},
      {title:'Go to Work'},
      {title:'Go to the supermarket'},
    ]
  }
  
  render(){
    return(
      <div className='App'>
        {this.ItemList.map((item) => <TodoItem item={item}/>)}
      </div>
    )
  }
}

export default App;
