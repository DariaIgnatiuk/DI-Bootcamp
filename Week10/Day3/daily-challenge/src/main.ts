type User = {
  type: 'user';
  name: string;
  age: number;
 };
 
type Product = {
  type: 'product';
  id: number;
  price: number;
 };
 
type Order = {
  type: 'order';
  orderId: string;
  amount: number;
 };


const handleData = (data: ( User | Product | Order)[]) =>{
    for (const item of data ) {
      if (item.type === 'user') console.log(`User's name: ${item.name}, age: ${item.age}`);
      else if (item.type === 'product') console.log(`Product ID: ${item.id}, Price: ${item.price}`);
      else if (item.type === 'order') console.log(`Order ID: ${item.orderId}, Amount: ${item.amount}`);
      else console.log('unknown type');
    }
}

const user:User = {
  type: 'user',
  name: 'John Doe',
  age: 30
}

const product:Product = {
  type: 'product',
  id: 123,
  price: 19.99
}

const order:Order = {
  type: 'order',
  orderId: '12345',
  amount: 100
}

const arr = [user, product, order]

handleData(arr);

