import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CardMedia } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { handleClose, handleOpen } from "../../Redux/ModalSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ catName }) {
  // console.log(catName);
  const open = useSelector((state) => state.modal.open)
  const dispatch = useDispatch()
  // console.log(open);
  const imgId = useSelector((state) => state.modal.value)
  // console.log(Number(imgId));
  const { id,Name, Price, path } = catName[imgId];
  return (
    <div>
      {/* {console.log(id)} */}
      <Modal
        open={open}
        onClose={() => dispatch(handleClose())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardMedia
            component="img"
            height="140"
            image={path}
            id={id}
          />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {Name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {Price}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
