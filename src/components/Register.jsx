import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import fb from '../img/fb.png'
import google from '../img/google.png'
import { Div1, Img } from '../styles/style';
import { actionRegisterAsync, FacebookLogin, GoogleLogin} from '../redux/actions/actionsRegister';
import { useDispatch } from 'react-redux';


const Register = () => {

  const dispatch = useDispatch()

  const [formValue, handleInputChange, reset] = useForm({
    nombre: '',
    email: '',
    pass: '',
    telefono: ''

  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValue)
    dispatch(actionRegisterAsync(formValue))
    reset()
  }

  return (
    <Box 
      
      sx={{
        display: 'flex',
        flexDirection: 'column',

        margin: '90px 500px '
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
      <TextField type="text" name="nombre" onChange={handleInputChange} label="Nombre Completo" variant="standard" />
      <TextField type="email" name="email" onChange={handleInputChange} id="standard-basic" label="Correo Electronico" variant="standard" />
      <TextField type="password" name="pass" onChange={handleInputChange} id="standard-basic" label="Contraseña" variant="standard" />
      <TextField type="tel" name="telefono" onChange={handleInputChange} id="standard-basic" label="Telefono" variant="standard" />
      <Button sx={{ marginTop: '20px' }} type="submit" variant="contained" size="medium">
        Registrar
      </Button>
      </form>
      <Div1>
        <Img src={fb} onClick={()=> dispatch(FacebookLogin())} />
        <Img src={google} onClick={()=> dispatch(GoogleLogin())}/>
      </Div1>
      <h1>¿Ya estas registrado? <Link to='/' underline="always">
        Ingresa aquí.
      </Link> </h1>

    </Box>
  );
};

export default Register;