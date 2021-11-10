import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import cateStores from "../Stores/cateStores";
import { Category } from '@material-ui/icons';
import authStore from '../Stores/authStore';
import { TextField } from "@mui/material";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CategoryModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [category, setCategory] = useState({
    name: "",
    image: "",
  });
  

  const handleChange = (event) =>
    setCategory({ ...category, [event.target.name]: event.target.value });

  const handleImage = (event) =>
    setCategory({ ...category, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    cateStores.createCategory(category);
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen}> ADD CATEGORY </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography 
          id="modal-modal-title" 
          variant="h6" 
          component="h2"
          >
        Add Category
    </Typography>
          
          <form onSubmit={handleSubmit}>
              <TextField
                label="Name of Category"
                name="name"
                type = "text"
                variant="outlined"
                color="secondary"
                required
                onChange={handleChange}
              />
               <TextField
                label="Image"
                name="image"
                type="file"
                variant="outlined"
                color="secondary"
                
                onChange={handleImage}
              />
               <Button
              onClose={handleClose}
              type="sumit" 
              color="secondary" 
              variant="contained"
              mx="auto"
              display="flex"
              style={{margin: "4px"}}
              >
                Add Category
              </Button>
              </form>
        </Box>
      </Modal>
    </div>
  );
}