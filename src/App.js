import logo from './logo.svg';
import './App.css';



function App() {
  const products = [
    { name: "Laptoop", price: 53000 },
    { name: "Phone", price: 75000 },
    { name: "Watch", price: 33000 },
    { name: "Tablet", price: 3000 }
  ]
  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      {/* <Product name="Laptop" price="45000"></Product>
      <Product name="Phone" price="75000"></Product> */}
    </div>
  );
}

function Product(props) {
  return (
    <div className="products">
      <h3>Name : {props.name}</h3>
      <p>Price : {props.price}</p>
    </div>
  )
}

export default App;
