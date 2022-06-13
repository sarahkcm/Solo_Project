import { Button, Input } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useStateContext } from "../../StateContext";




const User = () => {
    const navigate = useNavigate();
    const {email, setEmail, password, setPassword} = useStateContext();
    useEffect(()=>{
        const postUser = async ()=>{
            const result = await axios.post('/api/weed-choco/products/user');
            setEmail(result.data.email);
            setPassword(result.data.password);
            navigate('/')
        };
        postUser();
    }, [navigate])



  return (
    <div>
      <div className="App">
        <form className="form">
          <Input
            labelText="Email"
            id="email"
            formControlProps={{
              fullWidth: true
            }}
            onChange={(e)=> setEmail(e.target.value)}
            type="text"
          />
          <Input
            labelText="Password"
            id="password"
            formControlProps={{
              fullWidth: true
            }}
            onChange={(e)=> setPassword(e.target.value)}
            type="password"
          />

          <Button type="button" color="primary" className="form__custom-button">
            Log in
          </Button>
        </form>
      </div>
    </div>
  )
}

export default User
