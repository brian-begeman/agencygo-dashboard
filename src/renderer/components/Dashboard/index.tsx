import React from 'react';
import classes from './styles.module.css';
import SideBar from './components/Sidebar';
import Header from './components/Header';

function Dashboard() {
  return (
    <div className={classes.dashboardWrapper}>
      <SideBar />
      <div className={classes.secondChild}>
        <Header />
        <div>content will go here </div>
      </div>
    </div>
  );
}

export default Dashboard;
