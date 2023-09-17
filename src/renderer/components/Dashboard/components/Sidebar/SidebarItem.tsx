import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import classes from './styles.module.css';

function Options(props: any) {
  const { menu, handlePopoverClose } = props;
  return (
    <div className={classes.optionWrapper} onMouseLeave={handlePopoverClose}>
      {menu.map((menuItem, index) => (
        <div className={classes.optionItem} key={index}>
          {menuItem.label}
        </div>
      ))}
    </div>
  );
}
export default function SidebarItem(props: any) {
  const {
    name,
    icon,
    menu,
    index,
    currentNavItemHovered,
    handlePopoverOpen,
    handlePopoverClose,
  } = props;

  const currentElem = React.useRef(null);
  const open = currentNavItemHovered === index;

  const openPopOver = () => {
    if (Array.isArray(menu) && menu.length > 0) {
      handlePopoverOpen(index);
    } else {
      handlePopoverOpen(-1);
    }
  };
  return (
    <div
      className={
        open ? classes.sidebarItemWrapperActive : classes.sidebarItemWrapper
      }
    >
      <Stack
        alignItems="center"
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={openPopOver}
        ref={currentElem}
        onMouseLeave={handlePopoverClose}
        sx={{
          cursor: 'pointer',
        }}
      >
        <div>{icon}</div>
        <Typography
          sx={{ fontSize: '11px', fontWeight: 600, marginTop: '4px' }}
        >
          {name}
        </Typography>
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: 'cursor',
          }}
          open={open}
          elevation={20}
          anchorEl={currentElem.current}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 60,
            horizontal: -20,
          }}
          onClose={handlePopoverClose}
        >
          <Options menu={menu} handlePopoverClose={handlePopoverClose} />
        </Popover>
      </Stack>
    </div>
  );
}
