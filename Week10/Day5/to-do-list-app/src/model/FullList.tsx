import { ListItem} from "./ListItem";

const item1 = new ListItem('1', "finish project", true)
let localStorage:ListItem[] = [item1]

export class FullList {
    private items: ListItem[];

    constructor() {
        this.items = this.loadFromStorage();
    }

    private loadFromStorage():ListItem[] {
        if (localStorage) {
            return localStorage
        }
        else return []
    }

    saveToLocalStorage(): void {
        localStorage = this.items;
    }

    addItem (item: ListItem): void {
        if (this.items) {
            this.items.push(item);
            this.saveToLocalStorage();
        }
    }

    removeItem (item: ListItem): void {
        if (this.items) {
            this.items = this.items.filter((i) => i.getId()!== item.getId());
            this.saveToLocalStorage();
        }
    }

    checkItem (item: ListItem):void {
        item.checked = !item.checked;    }

    cleatList () {
        this.items = [];
        this.saveToLocalStorage();
    }

    getItems(): ListItem[] {
    if (this.items) {return this.items}
    else return []
    }

}
