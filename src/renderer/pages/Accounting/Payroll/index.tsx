import { useState, useEffect } from 'react';
import { Box, Stack, useTheme } from '@mui/material';
import PayrollTopContainer from './PayrollTopContainer';
import PayrollTable from './PayrollTable';
import { allUsersMock } from './mockData/payrollTablaData';

import { API_URL } from 'config';

export interface payrollType {
  employeeId: string,
  hourlyPay: string,
  commissionEarned: string,
  bonus: string,
  status: boolean,
  totalHours: string,
  totalPayment: number,
  createdAt?: string,
}

const HTTP_GET_OPTIONS = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

export default function Payroll() {
  const [allUsers, setAllUsers] = useState<any>([]);
  // const [allUsers, setAllUsers] = useState<any>([...allUsersMock]);
  const [allPayrolls, setAllPayrolls] = useState<payrollType[] | []>([]);
  const [filteredPayrolls, setFilteredPayrolls] = useState<payrollType[] | []>([])
  const [filteredUser, setFilteredUser] = useState<any[] | []>([])
  // const [filteredUser, setFilteredUser] = useState<any[] | []>([...allUsersMock])

  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';

  const getAllUsers = async () => {
    try {
      const response = await fetch(`${API_URL}/users`, HTTP_GET_OPTIONS);
      if (response.ok) {
        const data = await response.json();
        setAllUsers(data?.data);
        setFilteredUser(data?.data);
        console.log('get users Data:', data,);
      } else {
        console.error('Failed to get users');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getAllPayrolls = async () => {
    try {
      const response = await fetch(`${API_URL}/payroll`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const payroll = await response.json();
        setAllPayrolls(payroll?.data);
        setFilteredPayrolls(payroll?.data);
        console.log('All payrolls:', payroll);
      } else {
        console.error('Failed to get users');
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getAllUsers();
    getAllPayrolls()
  }, []);


  const filterPayrolls = (selectedFrequency: any, selectedRole: any, selectedStatus: any) => {
    //filter based on Roles
      if (selectedRole === 'Roles') {
        setFilteredUser(allUsers)
      }
      else {
        const userFilters = allUsers.filter((user: any) => user.role == selectedRole);
        setFilteredUser(userFilters)
      }

    // filter based on status
      if(selectedStatus === 'Status'){
        setFilteredPayrolls(allPayrolls)
       }else{
        const payrollFilters = allPayrolls.filter((payroll: any) => String(payroll.status) == String(selectedStatus));
        console.log(payrollFilters)
        setFilteredPayrolls(payrollFilters)
       }


  }

  return (
    <Box
      display="flex"
      gap="5px"
      padding={'6px'}
      sx={{ background: isDarkTheme ? '#121212' : 'white' }}
    >
      <Stack
        width={'100%'}
        padding={'10px'}
        sx={{
          background: isDarkTheme ? '#0c0c0c' : '#EAF1FF', borderRadius: '5px',
          marginTop: '30px'
        }}
      >
        <PayrollTopContainer allPayrolls={allPayrolls} filterPayrolls={filterPayrolls}/>
        <PayrollTable allUsers={filteredUser} allPayrolls={filteredPayrolls} setAllPayrolls={setFilteredPayrolls} />
      </Stack>
    </Box>
  );
}
