import { ReactNode } from 'react';
import classes from './styles.module.css';
import SideBar from './components/Sidebar';
import Header from './components/Header';

interface $Props {
  children: ReactNode | ReactNode[];
}

function Dashboard({ children }: $Props) {
  return (
    <div className={classes.dashboardWrapper}>
      <SideBar />
      <div className={classes.secondChild}>
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Dashboard;
