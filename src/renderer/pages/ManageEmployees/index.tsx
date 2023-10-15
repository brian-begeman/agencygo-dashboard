import { Box, Stack } from '@mui/material';
import Dashboard from 'renderer/components/Dashboard';
import PageTopbar from 'renderer/components/PageTopbar';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import styles from './styles.module.css';
import AddIcon from '@mui/icons-material/Add';
import { KeyboardArrowDown } from '@mui/icons-material';
import AddEmployeeModal from './AddEmployeeModal';
import useDataEmployees from './hooks/useData';
import { useEffect, useState } from 'react';
import fetchReq from 'utils/fetch';
import LifestyleGroup from './LifestyleGroup';



export default function ManageEmployees() {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
  const [OpenAddEmployee, setOpenAddEmployee] = useState(false);
  const [formType, setFormType] = useState<'add' | 'edit'>('add');
  const [links,setLinks] = useState([
    { text: 'Diamond Lifestyle Group', link: 'lifestyle-group',name:'diamondLifeStyle' },
    { text: 'Hot n Spicy Group', link: 'spicy-group',name:'Hot & Spicy group' },
    { text: 'Gud Energy Group', link: 'energy-group',name:'' },
  ]);
  const {
    refetch,
    selectedEmployee,
  } = useDataEmployees();
  // const { mutate: mutateDelete } = useMutation({
  //   key: 'delete-employee',
  // });

  useEffect(()=>{
    let endpoint = 'agency';
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
        res.data.map(({agencyName,_id}:any,i:number)=>{
          const updatedData = links.map((item,index) =>{
            if(agencyName===item.name){
              return{
                ...item,
                agencyId: _id,
              }
            }
            else {
              return item;
            }
          });
          console.log(updatedData,"???????????????")
          // setLinks(updatedData);
        })
      })
      .catch((err) => {
        console.log('Error occured: ',err);
      });
  },[])

  return (
    <Dashboard>
      <section className={styles.wrapper}>
        <PageTopbar>
          <Stack
            alignItems="center"
            direction="row"
            marginBottom="20px"
            width="100%"
            justifyContent="space-between"
          >
            <PageTopbar.HeaderText>Manage Employees</PageTopbar.HeaderText>
            <Box
              sx={{
                display: 'flex',
                marginLeft: 'auto',
                alignItems: 'center',
                gap: '15px',
              }}
            >
              <PageTopbar.Button
                color="secondary"
                text="Batch Operations"
                endIcon={
                  <KeyboardArrowDown
                    sx={{ color: '#fff', marginTop: 0, fontSize: '14px' }}
                  />
                }
              />
              <PageTopbar.Button
                color="primary"
                text="Add Employee"
                onClick={() => setOpenAddEmployee(true)}
                endIcon={
                  <AddIcon
                    sx={{ color: '#fff', marginTop: 0, fontSize: '14px' }}
                  />
                }
              />
            </Box>
          </Stack>
          <Stack flexDirection="row" sx={{ position: 'absolute', bottom: 0 }}>
            {links.map(({ link, text}) => (
              <PageTopbar.Button
                key={text}
                color="secondary"
                text={text}
                isActiveLink={path.includes(link)}
                isLink
                onClick={() => navigate(`/employees-manage-employees/${link}`)}
              />
            ))}
          </Stack>
        </PageTopbar>
        <Box
          sx={{
            // display: 'grid',
            // gridTemplateColumns: 'minmax(min-content, 416px) 1fr',
            height: '100%',
          }}
        >
         <LifestyleGroup/>
        </Box>
      </section>
      <AddEmployeeModal
        open={OpenAddEmployee}
        setOpen={setOpenAddEmployee}
        refetch={refetch}
        type={formType}
        selectedEmployee={selectedEmployee}
      />
    </Dashboard>
  );
}
