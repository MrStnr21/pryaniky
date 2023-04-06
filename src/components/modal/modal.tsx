import { FC } from "react";

import stylesModal from "./modal.module.css";

import { Box, Button, Modal as ModalContainer } from "@mui/material";

type TModal = {
  heading: string;
  children: JSX.Element;
  open: boolean;
  onClose: () => void;
};

const Modal: FC<TModal> = ({ heading, children, open, onClose }) => {
  return (
    <div>
      <ModalContainer
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={stylesModal.modal}>
          <h2 className={stylesModal.title}>{heading}</h2>
          {children}
          <div className={stylesModal.buttonClose}>
            <Button
              style={{ width: 425 }}
              variant="outlined"
              color="error"
              onClick={onClose}
            >
              закрыть
            </Button>
          </div>
        </Box>
      </ModalContainer>
    </div>
  );
};

export { Modal };
