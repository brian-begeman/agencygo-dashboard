import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import classes from './styles.module.css';

function Options(props: any) {
  const { menu, handlePopoverClose } = props;
  return (
    <div className={classes.optionWrapper} onMouseLeave={handlePopoverClose}>
      {menu.map((menuItem, index) => (
        <div className={classes.optionItem} key={menuItem.label}>
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
    link,
    index,
    currentNavItemHovered,
    handlePopoverOpen,
    handlePopoverClose,
  } = props;

  const currentElem = React.useRef(null);
  const open = currentNavItemHovered === index;
  const location = useLocation();
  const isActive = location.pathname === link;

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
        open || isActive
          ? classes.sidebarItemWrapperActive
          : classes.sidebarItemWrapper
      }
    >
      <NavLink to={link || '#'} className={classes.sidebarItemNav}>
        <Stack
          alignItems="center"
          sx={{ '&:hover': { filter: 'brightness(0.5)' }, cursor: 'pointer' }}
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={openPopOver}
          ref={currentElem}
          onMouseLeave={handlePopoverClose}
        >
          <div>{icon}</div>
          <Typography
            sx={{
              fontSize: '11px',
              fontWeight: 600,
              marginTop: '4px',
              color: '#fff',
            }}
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
      </NavLink>
    </div>
  );
}
