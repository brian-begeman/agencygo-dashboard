import { ReactNode } from 'react';
import classes from './styles.module.css';
import SideBar from './components/Sidebar';
import Header from './components/Header';
import { useTheme } from '@mui/material';

interface $Props {
  children: ReactNode | ReactNode[];
}

function Dashboard({ children }: $Props) {

  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';

  // Determine the class based on the theme
  const mode = isDarkTheme ? classes.darkTheme : classes.lightTheme;
 
  return (
    <div
      className={`${classes.dashboardWrapper} ${mode}`}
     
     
    >
      <SideBar />
      <div className={classes.secondChild}>
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Dashboard;
