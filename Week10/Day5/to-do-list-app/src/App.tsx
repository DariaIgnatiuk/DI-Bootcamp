import { ListTemplate } from './templates/ListTemplate'
import { FullList } from './model/FullList';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import { ListItem } from './model/ListItem';

function App() {

  const fullList = new FullList;

  const render = (): void => {
    const listTemplate = new ListTemplate(fullList);
    listTemplate.renderList();
  }

  useEffect( ()=> {
    render()
}, [])

const clearList = ():void => {
  fullList.cleatList();
  render()
}

const addItem = (event: React.FormEvent<HTMLFormElement>): void => {
  event.preventDefault();
  const form = event.target as HTMLFormElement
  const text:string = form.newItem.value;
  if (text) {
    const newItem = new ListItem(uuidv4(), text, false);
    fullList.addItem(newItem);
    render();
  }
}

  

  return (
    <>
    <form id="itemEntryForm" onSubmit={(event) => addItem(event)}>
      <input type="text" name="newItem" placeholder="Enter new item..." />
      <button type="submit">Add Item</button>
    </form>

    <ul id="listItems">
    </ul>

    <button id="clearItemsButton" onClick={clearList}>Clear All</button>
    
    </>
  )
}

export default App
