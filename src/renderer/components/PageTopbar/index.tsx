import { ReactNode } from 'react';
import { Box, Button, Typography } from '@mui/material';
import theme from 'renderer/styles/muiTheme';
import styles from './styles.module.css';

interface $Props {
  children: ReactNode | ReactNode[];
}

function PageTopbar({ children }: $Props) {
  return (
    <Box component={'header'} className={styles.header}>
      {children}
    </Box>
  );
}

function HeaderText({ children }: $Props) {
  return (
    <Typography
      variant="h1"
      color={'#fff'}
      fontSize={'22px'}
      fontWeight={600}
      margin={0}
    >
      {children}
    </Typography>
  );
}

interface $ButtonProps {
  endIcon?: ReactNode | ReactNode[];
  onClick?: () => void;
  text: string;
  color?: 'primary' | 'secondary';
  isLink?: boolean;
  isActiveLink?: boolean;
  tabButton?:boolean
}

function ButtonElement({
  onClick,
  tabButton = false,
  text,
  color = 'primary',
  endIcon,
  isLink = false,
  isActiveLink = false,
}: $ButtonProps) {
  const getWidth = ()=>{
    let width = 'max-content';
    if(tabButton){
      width = '200px';
    }
    return width
  }
  const getBackgroundColor = () => {
    let backgroundColor = '';
    if (isLink) {
      backgroundColor = 'transparent !important';
    }
    if (isActiveLink) {
      backgroundColor = '#0f0f0f !important';
    }
    if(isActiveLink && tabButton){
      backgroundColor = `${theme.palette.primary.main}`
    }
    return backgroundColor;
  };

  const getBorderRadius = () => {
    let borderRadius = '3px';
    if (isLink) {
      borderRadius = '0 !important';
    }
    if (isActiveLink) {
      borderRadius = '3px 3px 0px 0px !important';
    }
    return borderRadius;
  };

  const getActiveBorder = () => {
    if (isActiveLink && !tabButton) {
      return {
        '&::before': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          border: `2px solid ${theme.palette.primary.main}`,
        },
      };
    }
    return {};
  };

  return (
    <Button
      variant="contained"
      color={color}
      sx={{
        width: getWidth(),
        height: '32px',
        borderRadius: getBorderRadius(),
        boxShadow: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        backgroundColor: getBackgroundColor(),
        position: 'relative',
        ...getActiveBorder(),
      }}
      endIcon={endIcon}
      onClick={onClick}
    >
      <Typography
        sx={{
          fontSize: '10px',
          fontWeight: 500,
          color: '#fff',
          marginTop: '2px',
          textTransform: 'unset',
        }}
      >
        {text}
      </Typography>
    </Button>
  );
}

PageTopbar.HeaderText = HeaderText;
PageTopbar.Button = ButtonElement;

export default PageTopbar;
