import React from 'react';

const UserCard = ({ user }) => {
  const { first_name, last_name, email, phone_number } = user;
  const imageUrl = `https://robohash.org/${user.id}?set=set5`;

  return (
    <div className='user-card'>
      <img src={imageUrl} alt={`${first_name} ${last_name}`} />
      <h2>{`${first_name} ${last_name}`}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone_number}</p>
    </div>
  );
};

export default UserCard;
