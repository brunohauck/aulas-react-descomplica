import { useState } from "react"
import { Button, Form } from 'react-bootstrap';
import { addUser } from '../services/api';
const initalUser = {
    name: '',
    email: '',
    phone: '4343242332',
}
export default function Cadastro() {
    const [user, setUser] = useState(initalUser);
    const {name, email, phone} = user;

    const onValueChange = (e) => { setUser ({
       ...user, [e.target.name]: e.target.value
    }) 
        console.log(user)
    }
    const addUserInfo = async () => {
        console.log('entrou salvar')
        console.log(user)
        await addUser(user)
    }
    return (
        <div className='registerClass'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Informe seu nome"
                    onChange={(e) => onValueChange(e)} 
                        name="name"
                        value={name}  />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Inform seu email"
                        onChange={(e) => onValueChange(e)} 
                        name="email"
                        value={email}    
                        />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
       
                <Button
                    onClick={()=> addUserInfo()}  
                    variant="primary" 
                    type="submit">
                    Cadastrar
                </Button>
            </Form>
        </div>
    );
}