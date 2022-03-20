import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increaseCount}>Incrase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

/*
const products = [
    { name: "Laptoop", price: 53000 },
    { name: "Phone", price: 75000 },
    { name: "Watch", price: 33000 },
    { name: "Tablet", price: 3000 }
  ]
*/

/* {
//   products.map(product => <Product name={product.name} price={product.price}></Product>)
{/* <Product name="Laptop" price="45000"></Product>
//       <Product name="Phone" price="75000"></Product>}
// }*/
// function Product(props) {
//   return (
//     <div className="products">
//       <h3>Name : {props.name}</h3>
//       <p>Price : {props.price}</p>
//     </div>
//   )
// }

export default App;


