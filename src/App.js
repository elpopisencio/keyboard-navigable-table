import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Table from './components/Table';

const getUsers = setUsers =>
  axios
    .get('https://api.github.com/users')
    .then(({data}) => setUsers(data))
    .catch(err => console.log(err));

const HEADER = ['id', 'login'];

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    getUsers(setUsers);
  }, []);
  console.log(users);
  return (
    <Table
      items={users}
      attributes={HEADER}
      currentItem={currentUser}
      setCurrentItem={setCurrentUser}
    />
  );
}

export default App;
