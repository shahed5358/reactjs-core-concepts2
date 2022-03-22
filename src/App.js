import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}
function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);
  return (
    <div >
      <h2>External Users</h2>
      <p>{users.lengths}</p>
      {
        users.map(user => <User name={user.name} email={user.email} username={user.username} phone={user.phone} website={user.website} address={user.address}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div style={{ border: "2px solid red", margin: '10px', backgroundColor: "khaki" }}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
      <p>UserName: {props.username}</p>
      <p>Phone : {props.phone}</p>
      <p>Website : {props.website}</p>
      <p>Address : {props.address.street}, {props.address.suite}, {props.address.city}, {props.address.zipcode}</p>

    </div>
  )
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


