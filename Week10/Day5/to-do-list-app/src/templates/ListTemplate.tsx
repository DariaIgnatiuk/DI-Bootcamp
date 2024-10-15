import { FullList } from "../model/FullList"
import { ListItem } from "../model/ListItem"

export class ListTemplate {
        private list: FullList
    constructor (list: FullList){
        this.list = list
    }

    private removeItem(item:ListItem):void {
        this.list.removeItem(item);
        this.renderList();
        
    }

    renderList():void {
        const listElement = document.getElementById('listItems') as HTMLElement;
        listElement.innerHTML = '';
        const items = this.list.getItems()
        items.forEach((item) => {          
            const listItemElement = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = item.checked;
            checkbox.addEventListener('change', () => {
              this.list.checkItem(item);
              this.renderList();   
            });
            const label = document.createElement('label');
            label.textContent = item.item;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
              this.removeItem(item);   
            });
            listItemElement.appendChild(checkbox);
            listItemElement.appendChild(label);
            listItemElement.appendChild(deleteButton);
            listElement.appendChild(listItemElement);



        })
    }
}