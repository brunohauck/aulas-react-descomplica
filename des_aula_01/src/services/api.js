import axios from "axios";

const url = "http://localhost:3004/users"


export const getAllUsers = async () => {
    return await axios.get(`${url}`) 
}
export const addUser = async (user) => {
    console.log(url)
    return await axios.post(`${url}`,user)
}