import React, { useState, useCallback } from 'react';
import './users.css'
import UserList from './UsersList/UserList';
import UserProfile from './UserProfile/UserProfile';
import Header from "../header";

const Users = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [userData, setUserData] = useState();
    const toggle = useCallback(tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }, [activeTab])

    const onClickHandler = useCallback((data) => {
        setUserData(data);
        toggle(2);
    }, [toggle])

    return (
        <div>
            <Header />
            <div className="tab">
                <button className={`tablinks ${activeTab === 1 && 'active'}`} onClick={() => toggle(1)}>Users List</button>
                <button className={`tablinks ${activeTab === 2 && 'active'}`} onClick={() => toggle(2)}>User Profile</button>
            </div>
            {
                activeTab === 1 && (
                    <div id="tab" className="tabcontent">
                        <UserList onClickHandler={onClickHandler} />
                    </div>
                )
            }
            {
                activeTab === 2 && (
                    <div id="tab" className="tabcontent">
                        <UserProfile userData={userData} />
                    </div>
                )
            }
        </div>
    )
}

export default Users;