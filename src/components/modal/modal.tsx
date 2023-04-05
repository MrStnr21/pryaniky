import { FC, useState } from "react";

import stylesModal from "./modal.module.css";

import { Box, Button, Modal } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";

import { DocumentForm } from "../document-form/document-form";

import { tableHeading } from "../utils/data";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 10,
  p: 4,
};

type TModal = { heading: string };

const BasicModal: FC<TModal> = ({ heading }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        <PostAddIcon />
        <h2 className={stylesModal.docControl}>{heading}</h2>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <DocumentForm documentInfo={tableHeading} onClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
};

export { BasicModal };
