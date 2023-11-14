import React, { useState, useEffect } from 'react';
import { Box, FormControlLabel, OutlinedInput, Switch, ToggleButton, ToggleButtonGroup, Typography, useTheme } from '@mui/material';
import Overlay from 'renderer/components/Settings/Wallet/Common/Modal';
import styles from 'renderer/components/Settings/Wallet/Common/Modal/styles.module.css';
import {
  DropdownWithLabel,
  InputWithLabel,
  ModalFooter,
} from 'renderer/components/Settings/Wallet/Common/ModalComponents';
import { Stack } from '@mui/system';
import fetchReq from 'utils/fetch';
import useFormEmployee from '../ManageEmployees/hooks/useForm';
import Dropzone from 'react-dropzone';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';

interface $props {
  open: boolean;
  type: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: () => void;
}

const General = ({ open, type, setOpen, refetch }: $props) => {
  const [alignment, setAlignment] = React.useState('web');
  const [alignment2, setAlignment2] = React.useState('web');
  const [alignment3, setAlignment3] = React.useState('web');
const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [alignment4, setAlignment4] = React.useState('web');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  const handleChange1 = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment2(newAlignment);
  };

  const handleChange2 = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment3(newAlignment);
  };

  const handleChange3 = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment4(newAlignment);
  };
  const onDrop = (acceptedFiles: File[]) => {
    setSelectedFiles(acceptedFiles);
    console.log('Selected Files:', acceptedFiles);
  };

  const handleFileSelect = (e: any) => {
    setSelectedFiles(e.target.files[0]);
  };
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';

  return (
    <Box
      bgcolor={isDarkTheme ? '#292929' : '#fff'}
      display={'flex'}
      flexDirection={'column'}
      gap={'20px'}
    >
      <Box
        sx={{
          marginInline: '5px',
          justifyContent: 'space-between',
          display: 'flex',
          color: '#fff',
          gap: '20px',
          width: '940px',
        }}
      >
        <InputWithLabel
          label="Name"
          inputIdentifierName="name"
          placeholder="Enter name"
        />
        <Box
          sx={{
            width: '443px',
          }}
        >
          <DropdownWithLabel
            label="Status"
            inputIdentifierName="agencyId"
            placeholder="status"
          />
        </Box>
      </Box>
      <Box
        sx={{
          marginInline: '5px',
          display: 'flex',
          color: '#fff',
          gap: '20px',
        }}
      >
        <DropdownWithLabel
          label="Tags"
          inputIdentifierName="agencyId"
          placeholder="Tags"
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          color: '#fff',
          gap: '14px',
        }}
      >
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="web">WINDOWS</ToggleButton>
          <ToggleButton value="android">MACOS</ToggleButton>
          <ToggleButton value="ios">LINUX</ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          color="primary"
          value={alignment2}
          exclusive
          onChange={handleChange1}
          aria-label="Platform"
        >
          <ToggleButton value="web">NONE</ToggleButton>
          <ToggleButton value="android">FACEBOOK</ToggleButton>
          <ToggleButton value="ios">GOOGLE</ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          color="primary"
          value={alignment3}
          exclusive
          onChange={handleChange2}
          aria-label="Platform"
        >
          <ToggleButton value="web">NO PROXY</ToggleButton>
          <ToggleButton value="android">NEW PROXY</ToggleButton>
          <ToggleButton value="ios">SAVED PROXIES</ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          color="primary"
          value={alignment4}
          exclusive
          onChange={handleChange3}
          aria-label="Platform"
          sx={{ height: '31px', borderRadius: '8px' }}
        >
          <ToggleButton value="web">HTTP</ToggleButton>
          <ToggleButton value="android">SOCKS4</ToggleButton>
          <ToggleButton value="ios">SOCKS5</ToggleButton>
          <ToggleButton value="ios">SSH</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          color: '#fff',
          gap: '14px',
        }}
      >
        <InputWithLabel
          label="Proxy"
          inputIdentifierName="Proxy"
          placeholder="Proxy"
        />
        <InputWithLabel
          label="Change IP URL"
          inputIdentifierName="Change IP URL"
          placeholder="Change IP URL"
        />
        <InputWithLabel
          label="Proxy Name"
          inputIdentifierName="Proxy Name"
          placeholder="Proxy Name"
        />
      </Box>
      <Box>
        <Dropzone maxSize={104857600} onDrop={onDrop}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input
                  type="file"
                  id="file-upload"
                  style={{ display: 'none' }}
                  onChange={handleFileSelect}
                />
                <Box
                  sx={{
                    border: '1px solid #0C0C0C',
                    borderRadius: '5px',
                    padding: '10px',
                    textAlign: 'center',
                    marginTop: '10px',
                    width: '100%',
                    height: '120px',
                  }}
                >
                  <BackupOutlinedIcon
                    style={{ fontSize: '36px', color: '#fff' }}
                  />
                  <Typography variant="body1">
                    {selectedFiles.length === 0
                      ? 'Click to upload file from your computer or drag your file here'
                      : `${selectedFiles.length} image selected`}
                  </Typography>
                </Box>
              </div>
            </section>
          )}
        </Dropzone>
      </Box>
      <Box
        sx={{
          marginInline: '5px',
          justifyContent: 'space-between',
          display: 'flex',
          color: '#fff',
          gap: '20px',
        }}
      >
        <InputWithLabel
          label="Login"
          inputIdentifierName="Login"
          placeholder="Login"
        />
        <InputWithLabel
          label="Password"
          inputIdentifierName="Password"
          placeholder="Password"
          type="password"
        />
      </Box>
      <Box
        sx={{
          marginInline: '5px',
          justifyContent: 'space-between',
          display: 'flex',
          color: '#fff',
          gap: '20px',
        }}
      >
        <InputWithLabel
          label="User Agent"
          inputIdentifierName="User Agent"
          placeholder="User Agent"
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          color: '#fff',
          gap: '14px',
        }}
      >
        <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>
          {' '}
          WEBRTC
        </Typography>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          sx={{ height: '31px', borderRadius: '8px' }}
        >
          <ToggleButton value="web" sx={{ fontSize: '12px' }}>
            OFF
          </ToggleButton>
          <ToggleButton value="android" sx={{ fontSize: '12px' }}>
            REAL
          </ToggleButton>
          <ToggleButton value="ios" sx={{ fontSize: '12px' }}>
            ALTERED
          </ToggleButton>
          <ToggleButton value="ios" sx={{ fontSize: '12px' }}>
            MANUAL
          </ToggleButton>
        </ToggleButtonGroup>
        <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>
          {' '}
          Canvas
        </Typography>
        <ToggleButtonGroup
          color="primary"
          value={alignment2}
          exclusive
          onChange={handleChange1}
          aria-label="Platform"
          sx={{ height: '31px', borderRadius: '8px' }}
        >
          <ToggleButton value="web" sx={{ fontSize: '12px' }}>
            OFF
          </ToggleButton>
          <ToggleButton value="android" sx={{ fontSize: '12px' }}>
            REAL
          </ToggleButton>
          <ToggleButton value="ios" sx={{ fontSize: '12px' }}>
            NOISE
          </ToggleButton>
        </ToggleButtonGroup>
        <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>
          {' '}
          WEBGL
        </Typography>
        <ToggleButtonGroup
          color="primary"
          value={alignment3}
          exclusive
          onChange={handleChange2}
          aria-label="Platform"
          sx={{ height: '31px', borderRadius: '8px', fontSize: '10px' }}
        >
          <ToggleButton value="web" sx={{ fontSize: '12px' }}>
            OFF
          </ToggleButton>
          <ToggleButton value="android" sx={{ fontSize: '12px' }}>
            REAL
          </ToggleButton>
          <ToggleButton value="ios" sx={{ fontSize: '12px' }}>
            NOISE
          </ToggleButton>
        </ToggleButtonGroup>
        <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>
          {' '}
          Client Rects
        </Typography>
        <ToggleButtonGroup
          color="primary"
          value={alignment4}
          exclusive
          onChange={handleChange3}
          aria-label="Platform"
          sx={{ height: '31px', borderRadius: '8px' }}
        >
          <ToggleButton value="web" sx={{ fontSize: '12px' }}>
            REAL
          </ToggleButton>
          <ToggleButton value="android" sx={{ fontSize: '12px' }}>
            NOISE
          </ToggleButton>
        </ToggleButtonGroup>
        <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>
          {' '}
          Timezone
        </Typography>
        <ToggleButtonGroup
          color="primary"
          value={alignment4}
          exclusive
          onChange={handleChange3}
          aria-label="Platform"
          sx={{ height: '31px', borderRadius: '8px' }}
        >
          <ToggleButton value="web" sx={{ fontSize: '12px' }}>
            AUTO
          </ToggleButton>
          <ToggleButton value="android" sx={{ fontSize: '12px' }}>
            MANUAL
          </ToggleButton>
        </ToggleButtonGroup>
        <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>
          {' '}
          Language
        </Typography>
        <ToggleButtonGroup
          color="primary"
          value={alignment4}
          exclusive
          onChange={handleChange3}
          aria-label="Platform"
          sx={{ height: '31px', borderRadius: '8px' }}
        >
          <ToggleButton value="web" sx={{ fontSize: '12px' }}>
            AUTO
          </ToggleButton>
          <ToggleButton value="android" sx={{ fontSize: '12px' }}>
            MANUAL
          </ToggleButton>
        </ToggleButtonGroup>
        <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>
          {' '}
          GioLocation
        </Typography>
        <ToggleButtonGroup
          color="primary"
          value={alignment4}
          exclusive
          onChange={handleChange3}
          aria-label="Platform"
          sx={{ height: '31px', borderRadius: '8px' }}
        >
          <ToggleButton value="web" sx={{ fontSize: '12px' }}>
            REAL
          </ToggleButton>
          <ToggleButton value="android" sx={{ fontSize: '12px' }}>
            AUTO
          </ToggleButton>
          <ToggleButton value="android" sx={{ fontSize: '12px' }}>
            AUTO
          </ToggleButton>
        </ToggleButtonGroup>
        <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>
          {' '}
          CPU
        </Typography>
        <ToggleButtonGroup
          color="primary"
          value={alignment4}
          exclusive
          onChange={handleChange3}
          aria-label="Platform"
          sx={{ height: '31px', borderRadius: '8px' }}
        >
          <ToggleButton value="web" sx={{ fontSize: '12px' }}>
            REAL
          </ToggleButton>
          <ToggleButton value="android" sx={{ fontSize: '12px' }}>
            MANUAL
          </ToggleButton>
        </ToggleButtonGroup>
        <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>
          {' '}
          Memory
        </Typography>
        <ToggleButtonGroup
          color="primary"
          value={alignment4}
          exclusive
          onChange={handleChange3}
          aria-label="Platform"
          sx={{ height: '31px', borderRadius: '8px' }}
        >
          <ToggleButton value="web" sx={{ fontSize: '12px' }}>
            REAL
          </ToggleButton>
          <ToggleButton value="android" sx={{ fontSize: '12px' }}>
            MANUAL
          </ToggleButton>
        </ToggleButtonGroup>
        <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>
          {' '}
          Screen
        </Typography>
        <ToggleButtonGroup
          color="primary"
          value={alignment4}
          exclusive
          onChange={handleChange3}
          aria-label="Platform"
          sx={{ height: '31px', borderRadius: '8px' }}
        >
          <ToggleButton value="web" sx={{ fontSize: '12px' }}>
            REAL
          </ToggleButton>
          <ToggleButton value="android" sx={{ fontSize: '12px' }}>
            MANUAL
          </ToggleButton>
        </ToggleButtonGroup>
        <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>
          {' '}
          Media Devices
        </Typography>
        <ToggleButtonGroup
          color="primary"
          value={alignment4}
          exclusive
          onChange={handleChange3}
          aria-label="Platform"
          sx={{ height: '31px', borderRadius: '8px' }}
        >
          <ToggleButton value="web" sx={{ fontSize: '12px' }}>
            REAL
          </ToggleButton>
          <ToggleButton value="android" sx={{ fontSize: '12px' }}>
            MANUAL
          </ToggleButton>
        </ToggleButtonGroup>
        <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>
          {' '}
          Ports
        </Typography>
        <ToggleButtonGroup
          color="primary"
          value={alignment4}
          exclusive
          onChange={handleChange3}
          aria-label="Platform"
          sx={{ height: '31px', borderRadius: '8px' }}
        >
          <ToggleButton value="web" sx={{ fontSize: '12px' }}>
            REAL
          </ToggleButton>
          <ToggleButton value="android" sx={{ fontSize: '12px' }}>
            PROTECT
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box sx={{ color: '#fff' }}>
        <FormControlLabel
          value="start"
          control={<Switch color="primary" />}
          label="Ports"
          labelPlacement="start"
        />
      </Box>
      <Box sx={{ color: '#fff' }}>
        <FormControlLabel
          value="start"
          control={<Switch color="primary" />}
          label="Command Line Switches"
          labelPlacement="start"
        />
      </Box>
      <Box>
        <Typography
          sx={{
            color: '#fff',
            fontSize: '14px',
            fontWeight: '500',
            marginBottom: '10px',
          }}
        >
          Notes
        </Typography>
        <OutlinedInput
          sx={{ width: '100%' }}
          id="outlined-adornment-weight"
          multiline
          maxRows={8}
          rows={4}
        />
      </Box>
    </Box>
  );
};

export default General;
