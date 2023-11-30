import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Alert, Button, Typography } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import { useEffect, useState } from 'react';
import { deleteById } from 'services/timeline';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  borderRadius: '10px',
  bgcolor: '#121212',
  color: '#fff',
  boxShadow: 24,
  p: 2,
};

export default function TimesheetEditModal({
  showEdit,
  handleClose,
  editData,
}) {
  const [snakbarOpen, setSnackbarOpen] = useState(false);
  const [timeSheetData, setTimeSheetData] = useState(editData);
  useEffect(() => {
    setTimeSheetData(editData);
  }, [editData]);

  const onChange = (e) => {
    setTimeSheetData((prevState) => {
      let { name, value } = e.target;
      return { ...prevState, [name]: value };
    });
  };

  const deleteTimeline = async (timelineId) => {
    try {
      const response = await deleteById(timelineId);
      if (response.ack === 1) {
        handleClose();
      }
    } catch (err) {
      console.log('Error', err);
    }
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={snakbarOpen}
        autoHideDuration={3000} // Adjust this duration as needed
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity="success" onClose={() => setSnackbarOpen(false)}>
          {'Time Sheet Updated Successfully'}
        </Alert>
      </Snackbar>
      <Modal
        sx={{ backdropFilter: 'blur(4px)' }}
        open={showEdit}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <h2 style={{ textAlign: 'center' }}>Edit Timesheet Report</h2>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              padding: '0px 20px 15px 20px',
            }}
          >
            <input
              placeholder="Total Hours"
              value={timeSheetData?.total}
              name="totalHours"
              style={{ padding: 10 }}
              onChange={onChange}
            />
            <input
              placeholder="Break Hours"
              name="breakHours"
              value={timeSheetData?.total}
              style={{ padding: 10 }}
              onChange={onChange}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0px 20px',
            }}
          >
            <Button
              variant="contained"
              color="success"
              onClick={() => setSnackbarOpen(true)}
            >
              <Typography
                style={{
                  textTransform: 'none',
                  color: '#fff',
                  fontSize: '14px',
                }}
              >
                Save
              </Typography>
            </Button>

            <Button variant="contained" onClick={handleClose}>
              <Typography
                style={{
                  textTransform: 'none',
                  color: '#fff',
                  fontSize: '14px',
                }}
              >
                Cancel
              </Typography>
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button
              variant="contained"
              color="error"
              onClick={() => deleteTimeline(timeSheetData?._id)}
            >
              <Typography
                style={{
                  textTransform: 'none',
                  color: '#fff',
                  fontSize: '14px',
                }}
              >
                Delete
              </Typography>
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export const countryList = [
  {
    label: 'India',
    value: 'india',
  },
  {
    label: 'Nepal',
    value: 'nepal',
  },
];
