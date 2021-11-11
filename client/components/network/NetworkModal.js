import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import DenseTable from './DenseTable';

const NetworkModal = ({
  nodeName,
  nodeData,
  pointerLocation,
  modalOpen,
  setClosed,
}) => {
  const style = {
    position: 'absolute',
    top: pointerLocation.y,
    left: pointerLocation.x + 240,
    width: 400,
    bgcolor: 'background.paper',
    color: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <Modal
        aria-labelledby="data-modal"
        aria-describedby="data modal for selected Kubernetes object"
        open={modalOpen}
        onClose={setClosed}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          invisible: true,
        }}
      >
        <Grow in={modalOpen} style={{ transformOrigin: 'top left' }}>
          <Box sx={style}>
            <Typography
              id="data-modal"
              variant="h5"
              component="h5"
              sx={{ padding: '0.5em' }}
            >
              {nodeName}
            </Typography>
            <Divider />
            {nodeData && <DenseTable nodeData={nodeData} />}
          </Box>
        </Grow>
      </Modal>
    </div>
  );
};

export default NetworkModal;
