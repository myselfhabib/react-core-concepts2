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
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>External Users</h3>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}
function User(props) {
  return (
    <div className='product'>
      <h2>Name: {props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handledecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handledecrease}>Decrease</button>
    </div>
  )
}

function Product(props) {

  return (
    <div className="product">
      <h2>Name: {props.name}</h2>
      <h4>Price: {props.price}</h4>
    </div>
  )
}



/* 
const products = [
    { name: 'mobile', price: 45000 },
    { name: 'laptop', price: 44000 },
    { name: 'camera', price: 40000 },
    { name: 'watch', price: 3000 },

  ]

*/



/* 

{
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }

      <Product name='mobile' price='15000'></Product>
      <Product name='laptop' price='150000'></Product>
      <Product name='camera' price='100000'></Product>
      <Product name='computer' price='115000'></Product>
      <Product name='mobile' price='15000'></Product>
*/

export default App;
