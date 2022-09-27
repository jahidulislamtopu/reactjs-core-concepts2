import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>

    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  // useEffect(()=>{},[])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h1>External User</h1>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div style={{ border: '2px solid red', margin: '20px' }
    }>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div >
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  const inCreaseCount = () => setCount(count + 1);
  const deCreaseCount = () => setCount(count - 1)


  /*
// const [count, setCount] = useState(0);
// const inCreaseCount = () => {
//   const newCount = count + 1;
//   setCount(newCount);
// }
*/

  return (
    <div className="topu">
      <h1 id="baby">Count:{count} </h1>
      <button onClick={inCreaseCount}>Increase</button>
      <button onClick={deCreaseCount}>Decrease</button>
    </div>
  )

}





/*
const products = [
    { name: 'laptop', price: 54000 },
    { name: 'phone', price: 50000 },
    { name: 'watch', price: 5400 },
    { name: 'tablet', price: 20000 },
  ]
*/

/* {
//   products.map(product => <Product name={product.name} price={product.price}></Product>)
// }
// {/* <Product name="laptop"></Product>
// <Product name="phone" price="12330"></Product>}
*/


function Product(props) {
  return (
    <div className="product">
      <h3>Name:{props.name} </h3>
      <p>Price:{props.price} </p>
    </div>
  )
}
export default App;
