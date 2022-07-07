import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { actionEditAsync} from '../redux/actions/actionIng';

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


const Editar = ({ datos }) => {

    const dispatch= useDispatch()

    const [show, setShow] = useState(true)
    const handleClose = () => setShow(false)

    const [formValue, handleInputChange] = useForm({
        product: datos.product,
        items: datos.items,
        quantity: datos.quantity,
        price: datos.price,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValue)
        dispatch(actionEditAsync(formValue))
        handleClose()
    }
  

    return (
        <div>
            <Modal
                open={show}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h5" component="h2">
                        Agregar nuevo ingrediente
                    </Typography>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
                        <TextField sx={{ margin: '5px 0' }} type="text" name="product" value={formValue.product} onChange={handleInputChange} label="Productos" variant="standard" />
                        <TextField sx={{ margin: '5px 0' }} type="number" name="items" value={formValue.items} onChange={handleInputChange} label="Items" variant="standard" />
                        <TextField sx={{ margin: '5px 0' }} type="text" name="quantity" value={formValue.quantity} onChange={handleInputChange} label="Quantity" variant="standard" />
                        <TextField sx={{ margin: '5px 0' }} type="number" name="price" value={formValue.price} onChange={handleInputChange} label="price" variant="standard" />
                        <Button type='submit'>Editar</Button>
                    </form>

                </Box>
            </Modal>
        </div>
    );
};

export default Editar;