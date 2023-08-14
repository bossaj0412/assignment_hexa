import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
    <div className='table-container'>
      
      <table  border="2px">
        <thead>
          <tr >
            <th rowSpan="3">ID</th>
            <th rowSpan={3}>Name</th>
            <th rowSpan={3}>Email</th>
            <th colSpan="6">Address</th>
            <th rowSpan={3}>Phone</th>
            <th rowSpan={3}>Website</th>
            <th colSpan={3}>Company</th>
            {/* Add more headers here */}
          </tr>
          <tr >
            <th rowSpan={2}>Street</th>
            <th rowSpan={2}>Suite</th>
            <th rowSpan={2}>City</th>
            <th rowSpan={2}>Zipcode</th>
            <th colSpan={2}>Geo</th>
            <th rowSpan={2}>Name</th>
            <th rowSpan={2}>catchPhrase</th>
            <th rowSpan={2}>bs</th>
            {/* Add more headers here */}
          </tr>
          <tr >
            <th>lat</th>
            <th>lng</th>
          </tr>

        </thead>
        <tbody>


          {/* <tr> 
            <td> </td>
            <td></td>
            <td></td>
            <td>street</td>
            <td>suite</td>
            <td>city</td>
            <td>zipCode</td>
            <td colSpan={2}>Geo</td>
          </tr> */}
          {users.map(user => (
            <tr className='details_container' key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.street}</td>
              <td>{user.address.suite}</td>
              <td>{user.address.city}</td>
              <td>{user.address.zipcode}</td>
              <td>{user.address.geo.lat}</td>
              <td>{user.address.geo.lng}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
              <td>{user.company.catchPhrase}</td>
              <td>{user.company.bs}</td>
              {/* Add more data cells here */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default App;
