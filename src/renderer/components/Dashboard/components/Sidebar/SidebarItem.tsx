import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import classes from './styles.module.css';

function Options(props: any) {
  const { menu } = props;
  return (
    <div className={classes.optionWrapper}>
      {menu.map((menuItem) => (
        <div className={classes.optionItem}>{menuItem.label}</div>
      ))}
    </div>
  );
}
export default function SidebarItem(props: any) {
  const { name, icon, menu } = props;
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [menuHovered, setMenuHovered] = React.useState<boolean>(false);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    if (!menuHovered) {
      setAnchorEl(null);
    }
  };

  const open = Boolean(anchorEl);

  const handleMenuPopoverOpen = () => {
    setMenuHovered(true);
  };

  const handleMenuPopoverClose = () => {
    setMenuHovered(false);
  };

  return (
    <Stack
      alignItems="center"
      paddingBottom="32px"
      aria-owns={open ? 'mouse-over-popover' : undefined}
      aria-haspopup="true"
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
    >
      <div>{icon}</div>
      <Typography sx={{ fontSize: '11px', fontWeight: 600, marginTop: '4px' }}>
        {name}
      </Typography>
      <Popover
        id="mouse-over-popover"
        onMouseEnter={handleMenuPopoverOpen}
        onMouseLeave={handleMenuPopoverClose}
        sx={{
          pointerEvents: 'none',
        }}
        open={open || menuHovered}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 60,
          horizontal: 'left',
        }}
        disableRestoreFocus
      >
        <Options menu={menu} />
      </Popover>
    </Stack>
  );
}
