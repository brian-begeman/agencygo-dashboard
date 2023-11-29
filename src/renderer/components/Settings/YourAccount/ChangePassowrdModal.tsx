import React, { useState, useEffect, useContext } from 'react';
import { Box, Button, Typography, useTheme,Input  } from '@mui/material';
import styles from 'renderer/components/Settings/Wallet/Common/Modal/styles.module.css';
import {
  InputWithLabel,
  ModalFooter,
} from 'renderer/components/Settings/Wallet/Common/ModalComponents';
import { Stack } from '@mui/system';
// import { roleList, groupList, frequencyList, scheduleList } from './constant';
// import fetchReq from 'utils/fetch';
// import { useEmployee } from './hooks/useForm';
// import { AuthContext } from 'renderer/contexts/AuthContext';
import Overlay from '../Wallet/Common/Modal';
import { useFormEmployee } from 'renderer/pages/ManageEmployees/hooks/useForm';
// import Input from 'renderer/components/Input';
import classes from './styles.module.css';


interface $Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleOnChange: (value: string, name: string) => void;
  password:any;
  enableButton:any;
  setPassword:any;
}

export default function ChangePasswordModal({
  open,
  setOpen,
  handleOnChange,
  password,
  enableButton,
  setPassword
}: $Props) {
  

  const cancelHandler = () => {
    setOpen(false);
    setPassword({
        confirmPassword: '',
        newPassword: '',
        prevPassword: '',
      });
  
  };

  const submitPassword=()=>{
    console.log("password Changed");
    setOpen(false);
    setPassword({
        confirmPassword: '',
        newPassword: '',
        prevPassword: '',
      });
  }

  const handleModalClose = () => {
    setOpen(false);

  };

//   useEffect(() => {
//     getAgencie();
//     getCreators();
//   }, []);

//   const getAgencie = () => {
//     const endpoint = 'agency';
//     let options = {
//       method: 'GET' as 'GET',
//       headers: {
//         'content-type': 'application/json',
//       },
//       withAuth: true,
//     };
//     fetchReq(endpoint, options)
//       .then((response) => response.json())
//       .then((res) => {
//         setagencies([]);
//         console.log(res);
//         res.data.map((item: any) => {
//           let tempdata = {
//             value: item._id,
//             label: item.agencyName,
//           };
//           setagencies((previousdata) => [...previousdata, tempdata]);
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   const getCreators = () => {
//     const endpoint = `creators/${userData?.agency?._id}`;
//     let options = {
//       method: 'GET' as 'GET',
//       headers: {
//         'content-type': 'application/json',
//       },
//       withAuth: true,
//     };
//     fetchReq(endpoint, options)
//       .then((response) => response.json())
//       .then((res) => {
//         setcreators([]);
//         res.data?.creators?.map((item: any) => {
//           let tempdata = {
//             value: item._id,
//             label: item.creatorName,
//           };
//           setcreators((previousdata) => [...previousdata, tempdata]);
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';

  return (
    <Overlay
      heading={"Change Password"}
      open={open}
      handleClose={handleModalClose}
    >
        <Box  sx={{
          padding:"20px",
          backgroundColor: isDarkTheme ? '#4B4B4B' : '#fff',
          borderBottomLeftRadius:"10px",
          borderBottomRightRadius:"10px",

        }}>
         <div className={classes.passwordChangeWrapper}>
        <div className={classes.inputListWrapper}>
          <Input
            placeholder="Previous password"
            name="prevPassword"
            onChange={(e) => handleOnChange(e.target.value, "prevPassword")}
            value={password.prevPassword}
    
          />
          <Input
            placeholder="New password"
            name="newPassword"
            onChange={(e) => handleOnChange(e.target.value, "newPassword")}
            value={password.newPassword}
          />
          <Input
            placeholder="Confirm password"
            name="confirmPassword"
            onChange={(e) => handleOnChange(e.target.value, "confirmPassword")}
            value={password.confirmPassword}
          />
        </div>
       
      </div> 
      <div className={classes.buttonWrapper}>
          <Button
          onClick={cancelHandler}
            variant="outlined"
            fullWidth
            sx={{
              backgroundColor: 'your-desired-color-here',
              '&.Mui-disabled': {
                backgroundColor: 'rgba(4, 161, 255, 0.32)',
              },
            }}
          >
            <Typography fontWeight={500} fontSize="14px" sx={{ color: '#fff' }}>
              Cancle
            </Typography>
          </Button>
          <Button
          onClick={submitPassword}
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: 'your-desired-color-here',
              '&.Mui-disabled': {
                backgroundColor: 'rgba(4, 161, 255, 0.32)',
              },
            }}
          >
            <Typography fontWeight={500} fontSize="14px" sx={{ color: '#fff' }}>
              Save
            </Typography>
          </Button>
        </div>
        </Box>
      {/* <Box
        sx={{
          backgroundColor: isDarkTheme ? '#4B4B4B' : '#fff',
        }}
      >
        <form
          className={styles.modalBody}
          id="addEmployee"
        //   onSubmit={handleSubmit}
        >
          <Stack
            gap="10px"
            sx={{
              marginInline: '30px',
              paddingTop: '31px',
              paddingBottom: '50px',
            }}
            className={styles.inputListWrapper}
          >
            <Box>
              <InputWithLabel
                label="Previous Password"
                inputIdentifierName="password"
                placeholder="Enter previous password"
                // register={register as any}
              />
              <InputWithLabel
                label="New Password"
                inputIdentifierName="password"
                placeholder="Enter new password"
                // register={register as any}
              />
                <InputWithLabel
                label="Confirm new Password"
                inputIdentifierName="password"
                placeholder="Confirm new password"
                // register={register as any}
              />
            </Box>
          </Stack>
        </form>
      </Box> */}

      {/* <ModalFooter
        addHandler={addHandler}
        cancelHandler={cancelHandler}
        addText={'Save'}
        // isLoading={isLoading}
        id="changepassword"
      /> */}
    </Overlay>
  );
}
