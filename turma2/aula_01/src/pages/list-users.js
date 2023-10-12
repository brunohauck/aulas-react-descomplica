import React, { useEffect, useState } from "react";
import { getAllUsers } from '../services/api';
import Table from 'react-bootstrap/Table';

export default function ListUsers(){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        getUsers();
    }, [])
    const getUsers = async () => {
        const response = await getAllUsers();
        setUsers(response.data)
        console.log(users)
    }

    return (
        <>
            <h2>Lista de Usuários</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((data) => (
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </>
    );
}