import {useEffect, useState} from 'react';
import Header from '../components/header';
import { getAllUsers } from '../service/api'
export function Listar(){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        getUsers()
    },[])
    const getUsers = async () => {
        const response = await getAllUsers();
        setUsers(response.data)
        console.log(users)
    }
    return (
        <>
        <Header />
        <ul>
            {
                users.map((data)=>(
                   <li>{data.name}</li> 
                ))
            }
        </ul>
        </>
    );
}