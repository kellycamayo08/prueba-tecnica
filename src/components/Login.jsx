import React from 'react';
import { Link } from 'react-router-dom';
import { Box, TextField, Button } from '@mui/material';
import { useForm } from '../hooks/useForm';
import fb from '../img/fb.png'
import google from '../img/google.png'
import { Div1, Img } from '../styles/style';
import { FacebookLogin, GoogleLogin, loginAsync } from '../redux/actions/actionsRegister';
import { useDispatch } from 'react-redux';


const Login = () => {

  const dispatch = useDispatch()

  const [formValue, handleInputChange, reset] = useForm({
    email: '',
    pass: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValue)
    dispatch(loginAsync(formValue))
    reset()
  }

  return (
    <Box onSubmit={handleSubmit}
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        margin:'120px'
      }}

      noValidate
      autoComplete="off"
    >
      <h1>Login</h1>
      <TextField type="email" name="email" onChange={handleInputChange} label="Correo Electronico" variant="standard" />
      <TextField type="password" name="pass" onChange={handleInputChange} id="standard-basic" label="Contraseña" variant="standard" />
      <Button type='submit' sx={{ marginTop: '20px' }} variant="contained" size="medium">
        Entrar
      </Button>
      <Div1>
        <Img src={fb} onClick={()=> dispatch(FacebookLogin())} />
        <Img src={google} onClick={()=> dispatch(GoogleLogin())}/>
      </Div1>

      <h1>¿No estas registrado? <Link to='/register' underline="always">
        Ingresa aquí.
      </Link> </h1>
    </Box>
  );
};

export default Login;