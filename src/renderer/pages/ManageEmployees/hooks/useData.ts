import { ReactNode, useEffect, useState } from 'react';
import useQuery from 'renderer/hooks/useQuery';
import fetchReq from 'utils/fetch';

interface IAgencyList {
  text: string;
  isActive: boolean;
}
interface ISelectedAgency {
  id: string;
}

interface IEmployeeList {
  name: string;
  imageSrc: string;
  assignedCreators: ReactNode;
  role: string;
  activated: string;
  // activated: boolean;
  email: string;
  roleRaw: string;
  id: string;
}

const ROLE = {
  admin: 'Admin',
  manager: 'Manager',
  chatter: 'Chatter',
};

export interface ISelectedEmployee {
  name: string;
  email: string;
  role: string;
  id: string;
}

const useDataEmployees = () => {
  const [agencies, setAgencies] = useState<IAgencyList[]>([]);
  const [employees, setEmployees] = useState<IEmployeeList[]>([]);
  const [selectedEmployee, setSelectedEmployee] =
    useState<ISelectedEmployee | null>(null);
  const [selectedAgency, setSelectedAgency] = useState<ISelectedAgency | null>({
    id: localStorage.getItem('AgencyId') ?? '',
  });
  const { isLoading, data, refetch, setData } = useQuery({
    key: 'get-employee',
    params: selectedAgency,
  });

  useEffect(() => {
    // window.electron.ipcRenderer
    //   .invoke('get-store', 'agency')
    //   .then((res) => {
    //     const result = {
    //       text: res?.agencyName || '',
    //       isActive: true,
    //     };
    //     return setAgencies([result]);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  const handleSearch = (data: any) => {
    console.log(data, 'data:::::::::::::::::');
    const queryString = Object.keys(data)
      .map((key) => `${key}=${encodeURIComponent(data[key])}`)
      .join('&');
    console.log(queryString, 'queryString::::::::::::::::::::');
    let endpoint = `employee/search/data?${queryString}`;
    let options = {
      method: 'GET' as 'GET',
      headers: {
        'content-type': 'application/json',
      },
      withAuth: true,
    };
    fetchReq(endpoint, options)
      .then((response) => response.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log('Error occured: ', err);
      });
  };

  useEffect(() => {
    if (data?.data) {
      const employeesRes = data?.data?.map((item: any) => {
        return {
          name: item?.name || '',
          imageSrc: '',
          assignedCreators: item.assignedCreators.length
            ? item.assignedCreators.join(', ')
            : '+ Please click to set',
          role: item?.role
            ? ROLE[item?.role as 'admin' | 'manager' | 'chatter'] || ''
            : '',
          activated: item?.status,
          email: item?.email || '',
          roleRaw: item?.role || '',
          // eslint-disable-next-line no-underscore-dangle
          id: item?._id || '',
        };
      });
      setEmployees(employeesRes || []);
    }
  }, [data]);

  return {
    isLoading,
    data,
    agencies,
    refetch,
    employees,
    selectedEmployee,
    setEmployees,
    selectedAgency,
    setSelectedAgency,
    setSelectedEmployee,
    handleSearch,
  };
};

export default useDataEmployees;
