export interface ListItemI {
    id: string;
    item: string;
    checked: boolean;
  }

export class ListItem implements ListItemI  {

    constructor(public id: string, public item: string, public checked: boolean) {}

    getId(): string { return this.id; }
    getItem(): string { return this.item; }
    getChecked(): boolean { return this.checked; }
    setId(value: string): void {this.id = value; }
    setItem(value: string): void { this.item = value; }
    setChecked(value: boolean): void { this.checked = value; }
}
