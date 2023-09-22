import React from 'react';
import AccountSvg from 'renderer/assets/svg/AccountSvg';
import ChevronSettingNav from 'renderer/assets/svg/ChevronSettingNav';
import classes from './styles.module.css';

interface NavTabsProps {
  isActive: boolean;
  handleOnChange: (value: string) => void;
  navItem: {
    label: string;
    value: string;
    icon: any;
  };
}
function NavTabs(props: NavTabsProps) {
  const { isActive, navItem, handleOnChange } = props;
  const { label, value, icon } = navItem;
  return (
    <div
      onClick={() => handleOnChange(value)}
      className={isActive ? classes.navActiveWrapper : classes.navWrapper}
    >
      <div className={classes.navIconTextWrap}>
        <div className={classes.navIcon}>{icon}</div>
        <div className={classes.navText}>{label}</div>
      </div>
      {isActive && (
        <div className={classes.chevronIcon}>
          <ChevronSettingNav />
        </div>
      )}
    </div>
  );
}

export default NavTabs;
