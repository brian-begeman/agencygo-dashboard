import React from 'react';

import HomeSvg from 'Assets/svg/homeSvg';
import OnlyManagerSvg from 'Assets/svg/onlyManager';
import AnalyticsSvg from 'Assets/svg/analyticsSvg';
import GrowthSvg from 'Assets/svg/growthSvg';
import S4sSvg from 'Assets/svg/s4sSvg';
import CreatorSvg from 'Assets/svg/creatorsSvg';
import EmployeSvg from 'Assets/svg/employeSvg';
import BrandLogoSvg from 'Assets/svg/brandLogoSvg';
import localisation from '../../../localisation.json';
import SidebarItem from './SidebarItem';
import classes from './styles.module.css';

const sideBarMenuConst = [
  {
    name: localisation.home,
    icon: <HomeSvg />,
    menu: [],
  },
  {
    name: localisation.manager,
    icon: <OnlyManagerSvg />,
    menu: [],
  },
  {
    name: localisation.analytics,
    icon: <AnalyticsSvg />,
    menu: [
      {
        label: 'Create Reports',
        value: 'createReports',
      },
      {
        label: 'Chatter Reports',
        value: 'chatterReports',
      },
      {
        label: 'Fan Reports',
        value: 'fanReports',
      },
    ],
  },
  {
    name: localisation.growth,
    icon: <GrowthSvg />,
    menu: [
      {
        label: 'Smart Tags',
        value: 'smartTags',
      },
      {
        label: 'Auto Follow',
        value: 'autoFollow',
      },
      {
        label: 'Profile Promotion',
        value: 'profilePromotion',
      },
      {
        label: 'Trail Links',
        value: 'trialLinks',
      },
      {
        label: 'Tracking Links',
        value: 'trackingLinks',
      },
      {
        label: 'Scrips',
        value: 'scripts',
      },
    ],
  },
  {
    name: localisation.s4s,
    icon: <S4sSvg />,
    menu: [
      {
        label: 'Discover Creators',
        value: 'discoverCreators',
      },
      {
        label: 'Invite Link',
        value: 'inviteLink',
      },
      {
        label: 'S4S Schedule',
        value: 's4sSchedule',
      },
      {
        labl: 'S4S Settings',
        value: 's4sSettings',
      },
    ],
  },
  {
    name: localisation.creators,
    icon: <CreatorSvg />,
    menu: [],
  },
  {
    name: localisation.employees,
    icon: <EmployeSvg />,
    menu: [
      {
        label: 'Manage Employees',
        value: 'manageEmployees',
      },
      {
        label: 'Manage Shifts',
        value: 'manageShifts',
      },
    ],
  },
];

function BrandLogo() {
  return (
    <div className={classes.brandLogo}>
      <div className={classes.brandIcon}>
        <BrandLogoSvg />
      </div>
    </div>
  );
}

function SideBar() {
  return (
    <div className={classes.sidebar}>
      <BrandLogo />
      <div className={classes.sidebarNavWrapper}>
        {sideBarMenuConst.map(({ name, icon, menu }) => {
          return <SidebarItem name={name} icon={icon} menu={menu} />;
        })}
      </div>
    </div>
  );
}

export default SideBar;
