import React, { useState, useEffect } from 'react';
import {
  Autocomplete,
  Box,
  Chip,
  FormControlLabel,
  OutlinedInput,
  Switch,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from '@mui/material';
import {
  DropdownWithLabel,
  InputWithLabel,
} from 'renderer/components/Settings/Wallet/Common/ModalComponents';
import { antyBrowserProfileStatusList } from '../ManageEmployees/constant';

interface $props {
  open: boolean;
  type: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: () => void;
  onFormSubmit: (data: any) => void;
  handleCreate: (data: any) => void;
  handleFormSubmitRef: any;
  increaseFetchIndex: () => any;
}

const General = ({
  open,
  type,
  setOpen,
  refetch,
  onFormSubmit,
  handleCreate,
  handleFormSubmitRef,
  increaseFetchIndex,
}: $props) => {
  const [selectedPlatform, setSelectedPlatform] = React.useState('Win32');
  const [alignment2, setAlignment2] = React.useState('web');
  const [selectedproxy, setselectedproxy] = React.useState('web');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [selectedProxyProtocol, setSelectedProxyProtocol] =
    React.useState('http');
  const [newData, setNewData] = useState({
    name: '',
    status: 'ready',
    platform: selectedPlatform,
    tags: [],
  });
  const [errors, setErrors] = useState({
    name: '',
    status: '',
  });

  const handleNameChange = (name: string, value: string) => {
    setNewData((prevData) => ({
      ...prevData,
      name: value,
    }));
  };

  const handleProxyChange = (proxy: string, value: string) => {
    setNewData((prevData) => ({
      ...prevData,
      proxy: value,
    }));
  };

  const handlechangeIPURLChange = (changeIPURL: any, value: any) => {
    setNewData((prevData) => ({
      ...prevData,
      changeIPURL: value,
    }));
  };

  const handleTagsChange = (value: []) => {
    setNewData((prevData) => ({
      ...prevData,
      tags: value,
    }));
  };
  const handleproxyNameChange = (proxyName: any, value: any) => {
    setNewData((prevData) => ({
      ...prevData,
      proxyName: value,
    }));
  };
  const handleUserAgentChange = (userAgent: any, value: any) => {
    setNewData((prevData) => ({
      ...prevData,
      userAgent: value,
    }));
  };

  const handleStatusChange = (status: any, value: any) => {
    setNewData((prevData) => ({
      ...prevData,
      [status]: value,
    }));
  };

  const validateFields = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!newData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else {
      newErrors.name = '';
    }

    if (!newData.status.trim()) {
      newErrors.status = 'Status is required';
      isValid = false;
    } else {
      newErrors.status = '';
    }

    if (!newData?.tags || !newData.tags?.length) {
      newErrors.tags = 'Tags are required';
      isValid = false;
    } else {
      newErrors.status = '';
    }

    // Validate other fields similarly if needed

    setErrors(newErrors);
    return isValid;
  };

  const handleFormSubmit = async () => {
    // event.preventDefault(); // Prevents default form submission behavior

    // Validate fields before submission
    const isValid = validateFields();

    if (!isValid) {
      alert('Form is invalid');
      return;
    }

    await window.electron.ipcRenderer.invoke(
      'anty-browser:create-profile',
      newData
    );
    increaseFetchIndex();
    setOpen(false);

    // // onFormSubmit(newData);
    // // Clear form data after submission (if needed)
    // setNewData({
    //   name: '',
    //   status: '',
    //   tags: '',
    //   proxy: '',
    //   changeIPURL: '',
    //   proxyName: '',
    // });
    // handleCreate(newData);
  };

  handleFormSubmitRef.current = { handleFormSubmit: handleFormSubmit };

  const handleOSChange = (
    event: React.MouseEvent<HTMLElement>,
    platform: string
  ) => {
    setNewData((prevData) => ({
      ...prevData,
      platform: platform,
    }));
    setSelectedPlatform(platform);
  };

  const handleProxySelect = (
    event: React.MouseEvent<HTMLElement>,
    proxy: string
  ) => {
    setNewData((prevData) => ({
      ...prevData,
      proxy: proxy,
    }));
    setselectedproxy(proxy);
  };

  const handleProxyProtocolChange = (
    event: React.MouseEvent<HTMLElement>,
    selectedProxyProtocol: string
  ) => {
    setNewData((prevData) => ({
      ...prevData,
      proxyProtocol: selectedProxyProtocol,
    }));
    setSelectedProxyProtocol(selectedProxyProtocol);
  };

  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';

  return (
    <form onSubmit={handleFormSubmit}>
      <Box
        bgcolor={isDarkTheme ? '#0C0C0C' : '#fff'}
        display={'flex'}
        flexDirection={'column'}
        gap={'20px'}
      >
        <Box
          sx={{
            marginInline: '5px',
            justifyContent: 'space-between',
            display: 'flex',
            color: isDarkTheme ? '#fff' : '#000',
            gap: '20px',
            width: '940px',
          }}
        >
          <InputWithLabel
            label="Name"
            inputIdentifierName="name"
            placeholder="Enter name"
            handleOnChange={handleNameChange}
          />
          <Box
            sx={{
              width: '443px',
            }}
          >
            <DropdownWithLabel
              label="Status"
              options={antyBrowserProfileStatusList}
              handleOnChange={handleStatusChange}
            />
          </Box>
        </Box>

        <Typography color={isDarkTheme ? '#fff' : '#000'}> Tags</Typography>
        <Box
          sx={{
            marginInline: '5px',
            display: 'flex',
            color: isDarkTheme ? '#fff' : '#000',
            gap: '20px',
          }}
        >
          <Autocomplete
            onChange={(event, newValue) => {
              handleTagsChange(newValue, event);
            }}
            sx={{ width: '100%' }}
            clearIcon={false}
            options={[]}
            freeSolo
            multiple
            renderTags={(value, props) =>
              value.map((option, index) => (
                <Chip label={option} {...props({ index })} />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                InputLabelProps={{
                  shrink: false,
                }}
              />
            )}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            color: isDarkTheme ? '#fff' : '#000',
            gap: '14px',
          }}
        >
          <ToggleButtonGroup
            color="primary"
            value={selectedPlatform}
            exclusive
            onChange={handleOSChange}
            aria-label="Platform"
          >
            <ToggleButton value="Win32">WINDOWS</ToggleButton>
            <ToggleButton value="MacIntel">MACOS</ToggleButton>
            <ToggleButton value="Linux x86_64">LINUX</ToggleButton>
          </ToggleButtonGroup>

          {/*  <ToggleButtonGroup
            color="primary"
            value={selectedproxy}
            exclusive
            onChange={handleProxySelect}
            aria-label="Platform"
          >
            <ToggleButton value="no_proxy">NO PROXY</ToggleButton>
            <ToggleButton value="new_proxy">NEW PROXY</ToggleButton>
            <ToggleButton value="saved_proxies">SAVED PROXIES</ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            color="primary"
            value={selectedProxyProtocol}
            exclusive
            onChange={handleProxyProtocolChange}
            aria-label="Platform"
            sx={{ height: '31px', borderRadius: '8px' }}
          >
            <ToggleButton value="http">HTTP</ToggleButton>
            <ToggleButton value="socks4">SOCKS4</ToggleButton>
            <ToggleButton value="socks5">SOCKS5</ToggleButton>
            <ToggleButton value="ssh">SSH</ToggleButton>
          </ToggleButtonGroup> */}
        </Box>

        {/*   <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            color: isDarkTheme ? '#fff' : '#000',
            gap: '14px',
          }}
        >
          <InputWithLabel
            label="Proxy"
            inputIdentifierName="proxy"
            placeholder="Proxy"
            handleOnChange={handleProxyChange}
          />
          <InputWithLabel
            label="Change IP URL"
            inputIdentifierName="Change IP URL"
            placeholder="Change IP URL"
            handleOnChange={handlechangeIPURLChange}
          />
          <InputWithLabel
            label="Proxy Name"
            inputIdentifierName="Proxy Name"
            placeholder="Proxy Name"
            handleOnChange={handleproxyNameChange}
          />
        </Box> 
        <Box
          sx={{
            marginInline: '5px',
            justifyContent: 'space-between',
            display: 'flex',
            color: isDarkTheme ? '#fff' : '#000',
            gap: '20px',
          }}
        ></Box>
        <Box
          sx={{
            marginInline: '5px',
            justifyContent: 'space-between',
            display: 'flex',
            color: isDarkTheme ? '#fff' : '#000',
            gap: '20px',
          }}
        >
          <InputWithLabel
            label="User Agent"
            inputIdentifierName="User Agent"
            placeholder="User Agent"
            handleOnChange={handleUserAgentChange}
          />
        </Box>
        */}
      </Box>
    </form>
  );
};

export default General;
