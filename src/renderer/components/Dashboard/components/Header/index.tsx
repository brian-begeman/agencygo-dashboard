import React from 'react';
import AffiliateSvg from 'Assets/svg/affiliatesSvg';
import InfoSvg from 'Assets/svg/infoSvg';
import classes from './styles.module.css';
import localisation from '../../../localisation.json';

const navigationItemsConst = [
  {
    name: localisation.dashboardScreen.version,
    icon: <InfoSvg />,
  },
  {
    name: localisation.dashboardScreen.utc,
    icon: <InfoSvg />,
  },
  {
    name: localisation.dashboardScreen.affiliates,
    icon: <AffiliateSvg />,
  },
];

function NavigationItem(props: any) {
  const { name, icon } = props;
  return (
    <div className={classes.navItem}>
      <div className={classes.navItemText}>{name}</div>

      <div className={classes.navIcon}>{icon}</div>
    </div>
  );
}

function Header() {
  return (
    <div className={classes.navbar}>
      <div className={classes.start}>Start Item</div>

      <div className={classes.endWrapper}>
        <div className={classes.middle} />
        <div className={classes.end}>
          {navigationItemsConst.map(({ name, icon }) => {
            return <NavigationItem name={name} icon={icon} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
