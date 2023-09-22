import React from 'react';
import AffiliateSvg from 'renderer/assets/svg/affiliatesSvg';
import InfoSvg from 'renderer/assets/svg/infoSvg';
import NetworkSvg from 'renderer/assets/svg/networkSvg';
import BellSvg from 'renderer/assets/svg/bellSvg';
import ShieldSvg from 'renderer/assets/svg/shieldSvg';
import AvatarSvg from 'renderer/assets/svg/AvatarSvg';
import LeftChevronSvg from 'renderer/assets/svg/leftChevronSvg';
import RightChevronSvg from 'renderer/assets/svg/rightChevronSvg';
import { NavLink } from 'react-router-dom';
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
    link: '/notification',
  },
  {
    name: '',
    icon: <ShieldSvg />,
    link: '/settings',
  },
  {
    namee: '',
    icon: <AvatarSvg />,
  },
];

function NavigationItem(props: any) {
  const { name, icon, link } = props;
  const renderNavItem = () => (
    <div className={classes.navItem}>
      <div className={classes.navItemText}>{name}</div>

      <div className={classes.navIcon}>{icon}</div>
    </div>
  );

  if (link) {
    return (
      <NavLink to={link} className={classes.navLink}>
        {renderNavItem()}
      </NavLink>
    );
  }
  return renderNavItem();
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
          {navigationItemsConst.map(({ name, icon, link }) => {
            return (
              <NavigationItem name={name} icon={icon} link={link} key={name} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
