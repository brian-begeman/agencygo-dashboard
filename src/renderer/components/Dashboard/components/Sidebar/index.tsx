import React from 'react';
import HomeSvg from 'Assets/svg/homeSvg';
import classes from './styles.module.css';

function SideBarItem() {
  return (
    <div className={classes.sidebarItem}>
      <div className={classes.sidebarIcon}>
        <HomeSvg />
      </div>
      <div className={classes.sidebarItemText}>Home</div>
    </div>
  );
}

function BrandLogo() {
  return (
    <div className={classes.brandLogo}>
      <div className={classes.brandIcon} />
    </div>
  );
}
function SideBar() {
  return (
    <div className={classes.sidebar}>
      <BrandLogo />
      <SideBarItem />
      <SideBarItem />
    </div>
  );
}

export default SideBar;
