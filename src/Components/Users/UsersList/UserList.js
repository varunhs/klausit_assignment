import React, { useEffect, useState, useCallback } from "react";
import './usersList.css';
import axios from 'axios';

const UsersList = (props) => {
    const { onClickHandler } = props;
    const [users, setUsers] = useState([]);
    const getUserdetails = useCallback(async () => {
        try {
            const result = await axios(
                'https://reqres.in/api/users?page=2',
            );
            if(result) {
                setUsers(result.data.data)
            }
        } catch(error) {
            console.log(error);
        }
    }, []) 

    useEffect(() => {
        getUserdetails()
    }, [getUserdetails]);

    return (
        <table className='userslistTable'>
            <thead>
                <tr className='headingRow'>
                    <th className='heading'>Name</th>
                    <th className='heading'>Age</th>
                    <th className='heading'>Nickname</th>
                    <th className='heading'>Employee</th>
                </tr>
            </thead>

            <tbody>
            {
                users && users.map(user => (
                    <tr className='dataRow' key={user.id} onClick={()=> onClickHandler(user)}>
                        <td className='tableData'>{user.first_name}</td>
                        <td className='tableData'>{user.id}</td>
                        <td className='tableData'>{user.last_name}</td>
                        <td className='tableData'>Yes</td>
                    </tr>                    
                ))
            }
            </tbody>
        </table>
    )
}
 export default UsersList;