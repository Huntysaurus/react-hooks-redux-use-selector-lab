import React from "react";
import { useSelector } from "react-redux";

function Users() {

  const users = useSelector((state) => state.users)
  const userCount = useSelector((state) => state.users.length)
  
  return (
    <div>
      <ul>
        Users!
        {users.map(user => {
          return (<li>{user.username}</li>)
        })}
        {userCount}
      </ul>
    </div>
  );
}

export default Users;
