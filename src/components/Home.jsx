import { Button, Checkbox, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Modal, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { actionLogoutAsyn } from '../redux/actions/actionsRegister';
import { useDispatch, useSelector } from 'react-redux';
import { actionAddAsync, actionDeleteAsync, listAsync } from '../redux/actions/actionIng';
import { Box } from '@mui/system';
import { useForm } from '../hooks/useForm';
import Editar from './Editar';

//estilos modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Home = () => {

  //modal edit
  const [datos, setDatos] = useState([])
  const [modal, setModal] = useState(false)

  const handleEdit = (ingred) => {

    setDatos(ingred)
    setModal(true)
  }

  const dispatch = useDispatch()

  const { ing } = useSelector(store => store.listarPlatoStore)

  //checkbox
  const [checked, setChecked] = useState([]);

  const handleToggle = (value) => () => {
    let varr = [];
    const currentIndex = checked.indexOf(value);

    const newChecked = [...checked];
    console.log(newChecked)
    checked.map((item, index) =>
      <div key={index}>
        {
          varr = Number(item.price)

          //  varr = Number(ing[item].price )

        }


      </div>
    )
    console.log(varr)

    // const arrayDat = [];

    // const decl = arrayDat.push(varr)
    // console.log(arrayDat)
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  //listar ing
  useEffect(() => {
    dispatch(listAsync())
  }, [dispatch])

  //modal agg
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [formValue, handleInputChange, reset] = useForm({
    product: '',
    items: '',
    quantity: '',
    price: ''
  })

  //agg ing
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValue)
    dispatch(actionAddAsync(formValue))
    reset()
  }
  //delete ing
  const handleDelete = (product) => {
    console.log('vammos elimianr', product)
    dispatch(actionDeleteAsync(product))
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '25px' }}>

        <Button onClick={handleOpen}>Agregar nuevo ingrediente</Button>
        <Button onClick={() => dispatch(actionLogoutAsyn())}>Cerrar Sesion</Button>

      </div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '25px' }}>

        <p>INGREDIENTES</p>

      </div>

      {/* modal agregar ingrediente */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Agregar nuevo ingrediente
          </Typography>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
            <TextField sx={{ margin: '5px 0' }} type="text" name="product" value={formValue.product} onChange={handleInputChange} label="Product" variant="standard" />
            <TextField sx={{ margin: '5px 0' }} type="number" name="items" value={formValue.items} onChange={handleInputChange} label="Items" variant="standard" />
            <TextField sx={{ margin: '5px 0' }} type="text" name="quantity" value={formValue.quantity} onChange={handleInputChange} label="Quantity" variant="standard" />
            <TextField sx={{ margin: '5px 0' }} type="number" name="price" value={formValue.price} onChange={handleInputChange} label="price" variant="standard" />
            <Button type='submit'>guardar</Button>
          </form>

        </Box>
      </Modal>



      <h1>Rissoto</h1>

      <Divider />
      <List sx={{ width: '100%', maxWidth: 1060, bgcolor: 'background.paper' }}>
        {ing.map((value, index) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem
              key={index}
              secondaryAction={
                <div style={{ display: 'flex', fontSize: '10px' }} edge="end" aria-label="comments">
                  <h1 style={{ margin: '0 10px' }}>{value.price}</h1>
                  <Button variant="outlined" color="error" onClick={() => handleDelete(value.product)}>eliminar</Button>
                  <Button variant="outlined" onClick={() => handleEdit(value)} style={{ margin: '0 10px' }}>Editar</Button>
                </div>


              }
              disablePadding
            >
              <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={` ${value.product} - - ${value.quantity}`} />

              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      {


        < div style={{display:'flex', flexDirection:'column'}}>
          <h4>items: {checked.length}</h4>
          <h4>Subtotal: 2.95</h4>
          <h4>Gastos de envio : 7.00</h4>
          <h4>Total: 9.95</h4>

          <Button variant="contained" color="success">Comprar Ingredientes: 9.95</Button>
        </div>

      }

      {
        modal === true ? <Editar datos={datos} /> : ''
      }



    </div>
  );
};

export default Home;