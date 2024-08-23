import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import UserCard from './components/UserCard/UserCard';

import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        `https://random-data-api.com/api/v2/users?size=20&`
      );
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users', error);
    }
  };

  const fetchMoreUsers = async () => {
    try {
      const response = await axios.get(
        `https://random-data-api.com/api/v2/users?size=20&page=${page}`
      );
      setUsers([...users, ...response.data]);
      if (response.data.length === 0) setHasMore(false);
      setPage(page + 1);
    } catch (error) {
      console.error('Error fetching users', error);
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>USERS</h1>
      </header>
      <InfiniteScroll
        dataLength={users.length}
        next={fetchMoreUsers}
        hasMore={hasMore}
        loader={<h3>Loading...</h3>}
        endMessage={<p>No more users to load</p>}
      >
        <div className='user-grid'>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default App;
