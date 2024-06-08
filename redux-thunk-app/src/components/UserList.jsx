// src/components/UserList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../actions/UserActions';
import './UserList.css';

const UserList = () => {
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.user);

    const handleFetchData = () => {
        dispatch(fetchUsers());
    };

    return (
        <div className="user-list">
            <button onClick={handleFetchData}>Fetch Data</button>
            {userState.loading && <p>Loading...</p>}
            {userState.error && <p>{userState.error}</p>}
            {userState.users.length > 0 && (
                <ul>
                    {userState.users.map((user) => (
                        <li key={user.id}>
                            <h2>{user.name}</h2>
                            <p>{user.email}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserList;
