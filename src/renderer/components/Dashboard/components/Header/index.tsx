import React from 'react';
import AffiliateSvg from 'renderer/assets/svg/affiliatesSvg';
import InfoSvg from 'renderer/assets/svg/infoSvg';
import NetworkSvg from 'renderer/assets/svg/networkSvg';
import BellSvg from 'renderer/assets/svg/bellSvg';
import ShieldSvg from 'renderer/assets/svg/shieldSvg';
import AvatarSvg from 'renderer/assets/svg/avatarSvg';
import LeftChevronSvg from 'renderer/assets/svg/leftChevronSvg';
import RightChevronSvg from 'renderer/assets/svg/rightChevronSvg';
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
