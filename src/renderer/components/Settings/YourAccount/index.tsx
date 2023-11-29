import React, { useEffect, useState } from 'react';

import ChangepictureSvg from 'renderer/assets/svg/ChangePictureSvg';

import ProfilePic from 'renderer/assets/png/profile.jpg';
import EditSvg from 'renderer/assets/svg/EditSvg';
import { Box, Button, ButtonBase, IconButton, Stack, Typography, useTheme } from '@mui/material';
import classes from './styles.module.css';
import { InputWithLabel } from '../Wallet/Common/ModalComponents';
import fetchReq from 'utils/fetch';
import AddEmployeeModal from 'renderer/pages/ManageEmployees/AddEmployeeModal';
import ChangePasswordModal from './ChangePassowrdModal';
import ButtonEle from 'renderer/components/Button';

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
  const [OpenAddEmployee,setOpenAddEmployee]=useState<boolean>(false)
  const [password, setPassword] = useState({
    confirmPassword: '',
    newPassword: '',
    prevPassword: '',
  });
  const token = localStorage.getItem('Authorization');
  const [userData, setUserData] = useState({
    user: {
      firstName: '',
      email: '',
    },
    agency: {
      agencyName: '',
    },
  });

  const [editUserDetail, setEditUserDetail] = useState(false);
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

  const fetchUserDetail = () => {
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
    fetchUserDetail();
  }, []);

  const handelAccountDetail=()=>{
    console.log("hello");
    
  }
  console.log(userData, 'userDatauserData000000000000000000');

  return (
    <>
    {
      userData && (
    <div className={classes.wrapper}>
      <div className={classes.profilePicWrap}>
        {/* <img
          src={ProfilePic}
          alt="profile pic"
          className={classes.profilePicImage}
        /> */}

        {/* <div className={classes.changePictureTextWrapper}>
        <div className={classes.changePictureText}>Change Picture</div>
          <div className={classes.changePictureIcon}>
          <ChangepictureSvg />
          </div>
        </div> */}{
          !editUserDetail ?(
            <>
             <Button size="small" variant='outlined' sx={{textTransform:"capitalize"}}  onClick={()=>setOpenAddEmployee(!OpenAddEmployee)}>Change Password</Button>
             <Button variant='contained' sx={{color:"#fff"}} onClick={()=>setEditUserDetail(true)}>
            Edit
           </Button>
             </> 
          ):(
         <>
           <Button size="small" variant='outlined' className={classes.passwordheading} onClick={()=>setEditUserDetail(false)}>Cancle</Button>

           <Button size="small" variant='contained' sx={{color:"#fff"}} className={classes.savebutton} onClick={()=>handelAccountDetail()}>Save</Button>


           </>
          )
        }
       
      </div>
      {/* <div className={classes.nameWrap}>
        <div className={classes.profileNameText}>John Doe</div>
        <IconButton aria-label="edit" onClick={()=>setEditUserDetail(true)}>
       <EditSvg />
      </IconButton>
      </div> */}
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}
      >
        <Stack width={'100%'} gap={'10px'}>
          <Typography>Personal Info</Typography>
          <Stack gap={'10px'}>
            <Typography color={'gray'}>Picture</Typography>
            <div className={classes.changePictureTextWrapper}>
            <img src={ProfilePic} className={classes.profilePicImage} ></img>
        <div className={classes.changePictureText}>Change Picture
          <div className={classes.changePictureIcon}>
          <ChangepictureSvg />
          </div>
          </div>
        </div>
            <Typography color={'gray'}>User Name</Typography>
            <input
              placeholder="Enter group name"
              value={userData?.user?.firstName}
              disabled={!editUserDetail}
              onChange={(e) =>
                setUserData((prev: any) => {
                  return {
                    ...prev,
                    user: {
                      ...prev.user,
                      firstName: e.target.value,
                    },
                  };
                })
              }
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
              value={userData?.user?.email}
              disabled={!editUserDetail}
              onChange={(e) =>
                setUserData((prev: any) => {
                  return {
                    ...prev,
                    user: {
                      ...prev.user,
                      email: e.target.value,
                    },
                  };
                })
              }
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
            <div className={classes.changePictureTextWrapper}>
            <img src={ProfilePic} className={classes.profilePicImage} ></img>
        <div className={classes.changePictureText}>Change Picture
          <div className={classes.changePictureIcon}>
          <ChangepictureSvg />
          </div>
          </div>
        </div>
        <Typography color={'gray'}>Agency Name</Typography>
            <input
              placeholder="Enter group name"
              value={userData?.agency?.agencyName}
              disabled={!editUserDetail}
              onChange={(e) =>
                setUserData((prev: any) => {
                  return {
                    ...prev,
                    agency: {
                      ...prev.agency,
                      agencyName: e.target.value,
                    },
                  };
                })
              }
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
              value={userData?.user?.email}
                  disabled={!editUserDetail}
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
     
     <ChangePasswordModal
     open={OpenAddEmployee}
     setOpen={setOpenAddEmployee}
     handleOnChange={handleOnChange}
     password={password}
     enableButton={enableButton}
     setPassword={setPassword}
     />
    </div>
     )}
    </>
  );
}

export default YourAccount;
