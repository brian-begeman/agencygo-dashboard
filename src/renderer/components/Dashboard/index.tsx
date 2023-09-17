import React from 'react';
import classes from './styles.module.css';
import SideBar from './components/Sidebar';
import Header from './components/Header';
import CardDemo from './components/Card';

function Dashboard() {
  return (
    <div className={classes.dashboardWrapper}>
      <SideBar />
      <div className={classes.secondChild}>
        <Header />
        <div>
          content will <CardDemo Logo={"OF"} Amount={'448.5'} Earnings={'Total Earnings'} RiseUpdate={'12.7'}/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
