import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Chip,
  IconButton,
  Popover,
  Stack,
  TableCell,
  TableRow,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterListIcon from '@mui/icons-material/FilterList';
import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';
import SearchInput from 'renderer/components/SearchInput';

import FilterTable from 'renderer/components/Filter/FilterTable';
import theme from 'renderer/styles/muiTheme';

import AvatarSvg from 'renderer/assets/svg/AvatarSvg';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import classes from './styles.module.css';
import RoleManager from './Manager';

const roleMenu = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Admin',
    value: 'admin',
  },
  {
    label: 'Manager',
    value: 'manager',
  },
  {
    label: 'Employee',
    value: 'employee',
  },
];

const statusMenu = [
  {
    label: 'Inactive',
    value: 'inactive',
  },
  {
    label: 'Active',
    value: 'active',
  },
];
function Options(props: any) {
  const { menu, handlePopoverClose } = props;
  return (
    <div className={classes.optionWrapper} onMouseLeave={handlePopoverClose}>
      {menu.map((menuItem, index) => (
        <NavLink
          to={menuItem.link || '#'}
          className={classes.optionItem}
          key={menuItem.label}
        >
          {menuItem.label}
        </NavLink>
      ))}
    </div>
  );
}

const CustomButton = styled(Button)(() => ({
  borderRadius: '8px', // Adjust the border radius,
  padding: '8px 16px',
  color: 'white', // Set the text color
  backgroundColor: '#0F0F0F', // Set the background color
  '&:hover': {
    backgroundColor: '#292929', // Set the hover background color
  },
  textTransform: 'none', // Prevent text from being uppercase,
  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  border: '1px solid #292929',
}));

const CustomIconButton = styled(IconButton)(() => ({
  color: 'white',
}));

const employeesTableHeaders = ['Role', 'Users', 'Status', 'Operations'];

const employeesTableData = [
  {
    name: 'Joan Adams',
    status: 'Active',
    role: 'Admin',
    activated: true,
  },
  {
    name: 'Chris Jean-Baptiste',
    status: 'Inactive',
    role: 'Manager',
    activated: true,
  },
  {
    name: 'Joan Adams',
    status: 'Active',
    role: 'Employee',
    activated: false,
  },
];
interface TabProps {
  handleTabChange: (name: string) => void;
}


function RoleLanding(props:TabProps) {
  const {handleTabChange}=props;
  const [searchText, setSearchText] = useState('');
  const [anchorElRoleName, setAnchorElRoleName] =
    React.useState<HTMLButtonElement | null>(null);

  const [anchorElStatus, setAnchorElStatus] =
    React.useState<HTMLButtonElement | null>(null);

  const handleRoleNameClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElRoleName(event.currentTarget);
  };

  const handleStatusClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElStatus(event.currentTarget);
  };

  const handleRoleNameClose = () => {
    setAnchorElRoleName(null);
  };

  const handleStatusClose = () => {
    setAnchorElStatus(null);
  };

  const rolePopoverOpen = Boolean(anchorElRoleName);
  const roleNameId = rolePopoverOpen ? 'role-name' : undefined;

  const statusPopoverOpen = Boolean(anchorElStatus);
  const statusId = statusPopoverOpen ? 'status-name' : undefined;

  const handleRowClick=(name:string)=>{
    if(name==="Manager"){
      handleTabChange('RoleManager');
    }
  }
  return (
    <div className={classes.roleWrapper}>
      <div className={classes.titleWrapper}>
        <div className={classes.headingText}>Role Management</div>
        <Button variant="contained" sx={{ color: 'white' }}>
          Add role
        </Button>
      </div>

      <div className={classes.cardWrapper}>
        <div className={classes.headerWrapper}>
          <div className={classes.buttonWrapper}>
            <CustomButton
              aria-describedby={roleNameId}
              variant="contained"
              onClick={handleRoleNameClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Role Name
            </CustomButton>
            <Popover
              id={roleNameId}
              open={rolePopoverOpen}
              anchorEl={anchorElRoleName}
              onClose={handleRoleNameClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <Options menu={roleMenu} handleClose={handleRoleNameClose} />
            </Popover>
            <CustomButton
              aria-describedby={statusId}
              variant="contained"
              onClick={handleStatusClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Status
            </CustomButton>
            <Popover
              id={statusId}
              open={statusPopoverOpen}
              anchorEl={anchorElStatus}
              onClose={handleStatusClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <Options menu={statusMenu} handleClose={handleStatusClose} />
            </Popover>
            <CustomButton
              //   aria-describedby={id}
              variant="contained"
              //   onClick={handleClick}
              startIcon={<FilterListIcon />}
            >
              Filters
            </CustomButton>
          </div>
          <div className={classes.inputWrapper}>
            <SearchInput
              onSearch={() => {}}
              onUpdateSearch={(v) => setSearchText(v)}
              value={searchText}
              placeholder="Search employee name"
            />
          </div>
        </div>
      </div>

      <FilterTable tableHeaders={employeesTableHeaders}>
        <>
          {employeesTableData.map(({ role, status }, index) => (
            <TableRow
              key={index}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
              }}
              onClick={()=>handleRowClick(role)}
            >
              <TableCell
                sx={{
                  borderColor: theme.palette.primary.contrastText,
                  color: '#fff',
                }}
                scope="row"
              >
                {role}
              </TableCell>
              <TableCell
                sx={{
                  borderColor: theme.palette.primary.contrastText,
                }}
              >
                <Stack spacing={4} direction="row" alignItems="center">
                  <AvatarSvg />
                  <div className={classes.showUserText}>Show users</div>
                </Stack>
              </TableCell>

              <TableCell
                sx={{
                  borderColor: theme.palette.primary.contrastText,
                }}
              >
                {status === 'Inactive' ? (
                  <Chip label="Active" color="success" variant="outlined" />
                ) : (
                  <Chip
                    label="Inactive"
                    variant="outlined"
                    sx={{
                      border: '1px solid #750BB7',
                      color: '#750BB7',
                    }}
                  />
                )}
              </TableCell>
              <TableCell
                sx={{
                  borderColor: theme.palette.primary.contrastText,
                }}
                align="right"
              >
                <Stack spacing={1} direction="row" alignItems="center">
                  <div
                    className={
                      status === 'Active'
                        ? classes.deactivateTextCss
                        : classes.activateTextCss
                    }
                  >
                    {status === 'Active' ? 'Deactivate' : 'Activate'}
                  </div>
                  <CustomIconButton
                    aria-label="delete"
                    disabled
                    sx={{ color: 'white' }}
                  >
                    <DeleteOutlineOutlinedIcon sx={{ color: 'white' }} />
                  </CustomIconButton>
                  <IconButton aria-label="delete" disabled color="primary">
                    <EditOutlinedIcon sx={{ color: 'white' }} />
                  </IconButton>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </>
      </FilterTable>
    </div>
  );
}




function Role() {
  const [activeTab, setActiveTab] = useState('Role');

  const renderTab = (
    tabName: string,
    handleTabChange: (name: string) => void
  ) => {
    switch (tabName) {
      case 'Role':
        return <RoleLanding handleTabChange={handleTabChange} />;
      case 'RoleManager':
        return <RoleManager handleTabChange={handleTabChange} />;
      

      default:
        return <h5>Not found</h5>;
    }
  };

  const handleTabChange = (name: string) => {
    setActiveTab(name);
  };

  return <>{renderTab(activeTab, handleTabChange)}</>;
}

export default Role;
