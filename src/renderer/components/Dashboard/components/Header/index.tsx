import React from 'react';
import AffiliateSvg from 'Assets/svg/affiliatesSvg';
import InfoSvg from 'Assets/svg/infoSvg';
import NetworkSvg from 'Assets/svg/networkSvg';
import BellSvg from 'Assets/svg/bellSvg';
import ShieldSvg from 'Assets/svg/shieldSvg';
import AvatarSvg from 'Assets/svg/AvatarSvg';
import LeftChevronSvg from 'Assets/svg/LeftChevronSvg';
import RightChevronSvg from 'Assets/svg/RightChevronSvg';
import localisation from '../../../localisation.json';
import classes from './styles.module.css';

const navigationItemsConst = [
  {
    name: localisation.version,
    icon: <InfoSvg />,
  },
  {
    name: localisation.utc,
    icon: <InfoSvg />,
  },
  {
    name: localisation.affiliates,
    icon: <AffiliateSvg />,
  },
  {
    name: localisation.networkReport,
    icon: <NetworkSvg />,
  },
  {
    name: '',
    icon: <BellSvg />,
  },
  {
    name: '',
    icon: <ShieldSvg />,
  },
  {
    namee: '',
    icon: <AvatarSvg />,
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
      <div className={classes.start}>
        <LeftChevronSvg />
        <RightChevronSvg />
      </div>

      <div className={classes.endWrapper}>
        <div className={classes.middle} />
        <div className={classes.end}>
          {navigationItemsConst.map(({ name, icon }, index) => {
            return <NavigationItem name={name} icon={icon} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
