import React, { useEffect, useState } from 'react';

import ChangepictureSvg from 'renderer/assets/svg/ChangePictureSvg';

import ProfilePic from 'renderer/assets/png/profile.jpg';
import EditSvg from 'renderer/assets/svg/EditSvg';
import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import classes from './styles.module.css';
import { InputWithLabel } from '../Wallet/Common/ModalComponents';
import fetchReq from 'utils/fetch';

interface InputProps {
  placeholder: string;
  name: string;
  value: string;
  handleOnChange: (value: string, name: string) => void;
}
function Input(props: InputProps) {
  const { placeholder, name, handleOnChange, value } = props;
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';

  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={(e) => handleOnChange(e.target.value, name)}
      className={classes.inputWrap}
      value={value}
      style={{ color: isDarkTheme ? '#fff' : '#000' }}
    />
  );
}
function YourAccount() {
  const [password, setPassword] = useState({
    confirmPassword: '',
    newPassword: '',
    prevPassword: '',
  });
  const token = localStorage.getItem('Authorization');
  const [userData, setUserData] = useState();
  const handleOnChange = (value: string, name: string) => {
    setPassword((prevPassword) => ({
      ...prevPassword,
      [name]: value,
    }));
  };
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';

  const enableButton =
    password.confirmPassword &&
    password.newPassword &&
    password.confirmPassword === password.newPassword;

  const userDetail = () => {
    let endpoint = 'verify';
    let options = {
      method: 'GET' as 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      withAuth: true,
    };
    fetchReq(endpoint, options)
      .then((response) => response.json())
      .then((res) => {
        if (res.message == 'verify') {
          setUserData(res.data);
        }
      })
      .catch((err) => {
        console.log('Error occured: ', err);
      });
  };

  useEffect(() => {
    userDetail();
  }, []);

  console.log(userData, 'userDatauserData000000000000000000');

  return (
    <div className={classes.wrapper}>
      <div className={classes.profilePicWrap}>
        <img
          src={ProfilePic}
          alt="profile pic"
          className={classes.profilePicImage}
        />

        <div className={classes.changePictureTextWrapper}>
          <div className={classes.changePictureText}>Change Picture</div>
          <div className={classes.changePictureIcon}>
            <ChangepictureSvg />
          </div>
        </div>
      </div>
      <div className={classes.nameWrap}>
        <div className={classes.profileNameText}>John Doe</div>
        <EditSvg />
      </div>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}
      >
        <Stack width={'100%'} gap={'10px'}>
          <Typography>Personal Info</Typography>
          <Stack gap={'10px'}>
            <Typography color={'gray'}>Picture</Typography>
            <img src="" width={'100ppx'} height={'100px'}></img>
            <Typography color={'gray'}>User Name</Typography>
            <input
              placeholder="Enter group name"
              // value={groupName}
              // onChange={(e) => setGroupName(e.target.value)}
              style={{
                borderRadius: '3px',
                border: '1px solid #aaa',
                padding: '12px',
                width: '100%',
                marginTop: '2px',
                boxSizing: 'border-box',
                backgroundColor: isDarkTheme ? '#000' : '#EAF1FF',
                color: isDarkTheme ? '#fff' : '#000',
              }}
            />
            <Typography color={'gray'}>E-mail</Typography>
            <input
              placeholder="Enter group name"
              // value={groupName}
              // onChange={(e) => setGroupName(e.target.value)}
              style={{
                borderRadius: '3px',
                border: '1px solid #aaa',
                padding: '12px',
                width: '100%',
                marginTop: '2px',
                boxSizing: 'border-box',
                backgroundColor: isDarkTheme ? '#000' : '#EAF1FF',
                color: isDarkTheme ? '#fff' : '#000',
              }}
            />
          </Stack>
        </Stack>
        <Stack width={'100%'} gap={'10px'}>
          <Typography>Agency Info</Typography>
          <Stack gap={'10px'}>
            <Typography color={'gray'}>Picture</Typography>
            <img src="" width={'100ppx'} height={'100px'}></img>
            <Typography color={'gray'}>Agency Name</Typography>
            <input
              placeholder="Enter group name"
              // value={groupName}
              // onChange={(e) => setGroupName(e.target.value)}
              style={{
                borderRadius: '3px',
                border: '1px solid #aaa',
                padding: '12px',
                width: '100%',
                marginTop: '2px',
                boxSizing: 'border-box',
                backgroundColor: isDarkTheme ? '#000' : '#EAF1FF',
                color: isDarkTheme ? '#fff' : '#000',
              }}
            />
            <Typography color={'gray'}>E-mail</Typography>
            <input
              placeholder="Enter group name"
              // value={groupName}
              // onChange={(e) => setGroupName(e.target.value)}
              style={{
                borderRadius: '3px',
                border: '1px solid #aaa',
                padding: '12px',
                width: '100%',
                marginTop: '2px',
                boxSizing: 'border-box',
                backgroundColor: isDarkTheme ? '#000' : '#EAF1FF',
                color: isDarkTheme ? '#fff' : '#000',
              }}
            />
          </Stack>
        </Stack>
      </Box>
      {/* <div className={classes.passwordChangeWrapper}>
        <div className={classes.inputListWrapper}>
          <Input
            placeholder="Previous password"
            name="prevPassword"
            handleOnChange={handleOnChange}
            value={password.prevPassword}
    
          />
          <Input
            placeholder="New password"
            name="newPassword"
            handleOnChange={handleOnChange}
            value={password.newPassword}
          />
          <Input
            placeholder="Confirm password"
            name="confirmPassword"
            handleOnChange={handleOnChange}
            value={password.confirmPassword}
          />
        </div>
        <div className={classes.buttonWrapper}>
          <Button
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
      </div> */}
    </div>
  );
}

export default YourAccount;
