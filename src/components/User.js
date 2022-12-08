import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux/slice/usersSlice";

const User = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.users);
  
    useEffect(() => {
      dispatch(getUsers());
    }, [dispatch]);
  
    return (
      <div className="App">
        <h1>Users details :</h1>
        {users && users.map((user, i) => <p key={i}>{user.name}</p>)}
      </div>
    );
  }

export default User