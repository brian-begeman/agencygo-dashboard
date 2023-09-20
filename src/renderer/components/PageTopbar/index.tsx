import { ReactNode } from 'react';
import { Button, Typography } from '@mui/material';
import styles from './styles.module.css';

interface $Props {
  children: ReactNode | ReactNode[];
}

function PageTopbar({ children }: $Props) {
  return <header className={styles.header}>{children}</header>;
}

function HeaderText({ children }: $Props) {
  return <h1 className={styles.headerText}>{children}</h1>;
}

interface $ButtonProps {
  endIcon?: ReactNode | ReactNode[];
  onClick?: () => void;
  text: string;
  color?: 'primary' | 'secondary';
  isLink?: boolean;
  isActiveLink?: boolean;
}

function ButtonElement({
  onClick,
  text,
  color = 'primary',
  endIcon,
  isLink = false,
  isActiveLink = false,
}: $ButtonProps) {
  const getBackgroundColor = () => {
    let backgroundColor = '';
    if (isLink) {
      backgroundColor = 'transparent !important';
    }
    if (isActiveLink) {
      backgroundColor = '#0f0f0f !important';
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

  return (
    <Button
      variant="contained"
      color={color}
      sx={{
        width: 'max-content',
        height: '32px',
        borderRadius: getBorderRadius(),
        boxShadow: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        backgroundColor: getBackgroundColor(),
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
